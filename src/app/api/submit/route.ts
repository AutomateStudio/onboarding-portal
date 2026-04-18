import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    if (!payload.email) {
      return NextResponse.json({ error: 'email es requerido' }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('N8N_WEBHOOK_URL no configurada — payload recibido:', payload);
      return NextResponse.json({ success: true, warning: 'webhook no configurado' });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('n8n webhook error:', response.status, text);
      return NextResponse.json(
        { error: `Error al enviar a n8n: ${response.status}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Submit API error:', err);
    const message = err instanceof Error ? err.message : 'Error interno';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
