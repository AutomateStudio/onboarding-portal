import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

function getDriveClient() {
  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );
  oauth2.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  return google.drive({ version: 'v3', auth: oauth2 });
}

export async function POST(req: NextRequest) {
  try {
    const { email, storeName } = await req.json();

    if (!email || !storeName) {
      return NextResponse.json({ error: 'email y storeName son requeridos' }, { status: 400 });
    }

    const drive = getDriveClient();
    const parentFolderId = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID!;

    // 1. Crear carpeta principal de la tienda
    const folderRes = await drive.files.create({
      requestBody: {
        name: `${storeName} — Catálogo de Productos`,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [parentFolderId],
      },
      fields: 'id, webViewLink',
    });
    const folderId = folderRes.data.id!;
    const folderUrl = folderRes.data.webViewLink!;

    // 2. Subir plantilla Excel como Google Sheets
    const templatePath = path.join(process.cwd(), 'templates', 'plantilla-productos-automate.xlsx');
    const templateStream = fs.createReadStream(templatePath);

    await drive.files.create({
      requestBody: {
        name: 'Plantilla de Productos — Automate',
        mimeType: 'application/vnd.google-apps.spreadsheet',
        parents: [folderId],
      },
      media: {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        body: templateStream,
      },
      fields: 'id',
    });

    // 3. Crear subcarpeta "Fotos de Productos"
    await drive.files.create({
      requestBody: {
        name: 'Fotos de Productos',
        mimeType: 'application/vnd.google-apps.folder',
        parents: [folderId],
      },
      fields: 'id',
    });

    // 4. Invitar al cliente como editor
    await drive.permissions.create({
      fileId: folderId,
      requestBody: {
        type: 'user',
        role: 'writer',
        emailAddress: email,
      },
      sendNotificationEmail: true,
      emailMessage: `¡Tu carpeta de catálogo está lista! Aquí puedes subir las fotos y completar la plantilla de productos para tu tienda "${storeName}".`,
    });

    return NextResponse.json({ success: true, folderUrl });
  } catch (err: unknown) {
    console.error('Drive API error:', err);
    const message = err instanceof Error ? err.message : 'Error interno';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
