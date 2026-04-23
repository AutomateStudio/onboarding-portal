// ============================================================
// Automate Studio — Pipeline de Leads
// Pegar este código en Extensions → Apps Script del sheet
// ============================================================

const SHEET_ID = '1KCOvL5IMDt7iJBKNeUjq_9fnpo4YRQYQKLoo3_n8_QM';
const SHEET_NAME = 'Leads';

const HEADERS = [
  'Fecha',
  'Estado',
  'Nombre',
  'Email',
  'WhatsApp',
  'Tienda',
  'URL Shopify',
  'Industria',
  'Plan',
  'Tema',
  'Paleta',
  'Fuente',
  'Apps',
  'Tono de voz',
  'Descripción marca',
  'Productos top',
  'Acceso Shopify',
  'URL referencia',
];

function getOrCreateSheet() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Agregar encabezados si la hoja está vacía
  if (sheet.getLastRow() === 0) {
    var headerRow = sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.getRange(1, 1, 1, HEADERS.length).setBackground('#0a0e1a');
    sheet.getRange(1, 1, 1, HEADERS.length).setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, HEADERS.length);
  }

  return sheet;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet();

    var fecha = Utilities.formatDate(
      new Date(),
      'America/Bogota',
      'dd/MM/yyyy HH:mm'
    );

    sheet.appendRow([
      fecha,
      'Nuevo lead',
      data.contactName  || '',
      data.email        || '',
      data.whatsapp     || '',
      data.storeName    || '',
      data.shopifyUrl   || '',
      data.industry     || '',
      data.plan         || '',
      data.theme        || '',
      data.palette      || '',
      data.font         || '',
      (data.selectedApps || []).join(', '),
      data.voiceTone    || '',
      data.brandDesc    || '',
      data.topProducts  || '',
      data.shopifyAccess || '',
      data.referenceUrl  || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error('Apps Script error:', err);
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Para probar manualmente desde el editor
function testPost() {
  doPost({
    postData: {
      contents: JSON.stringify({
        contactName: 'Juan Pérez',
        email: 'juan@test.com',
        whatsapp: '+573001234567',
        storeName: 'Mi Tienda Test',
        shopifyUrl: 'mitienda.myshopify.com',
        industry: 'beauty',
        plan: 'Pro',
        theme: 'dark',
        palette: 'purple',
        font: 'inter',
        selectedApps: ['reviews', 'upsell'],
        voiceTone: 'profesional',
        brandDesc: 'Tienda de prueba para testear el webhook',
        topProducts: 'Producto A, Producto B',
        shopifyAccess: 'Colaborador',
        referenceUrl: 'https://ejemplo.com',
      }),
    },
  });
}
