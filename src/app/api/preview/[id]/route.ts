import { NextRequest, NextResponse } from 'next/server';
import { INDUSTRY_TEMPLATES, buildDesktopHtml } from '@/constants/industryTemplates';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Find template across all industries
  let template = null;
  for (const templates of Object.values(INDUSTRY_TEMPLATES)) {
    const found = templates.find((t) => t.id === id);
    if (found) { template = found; break; }
  }

  if (!template) {
    return new NextResponse('Template not found', { status: 404 });
  }

  const body = buildDesktopHtml(template);

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${template.name} — Demo</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; min-height: 100vh; }
  </style>
</head>
<body>
  ${body}
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
