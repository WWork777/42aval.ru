export async function POST(request) {
  try {
    const data = await request.json();
    console.log('=== НОВАЯ ЗАЯВКА (калькулятор) ===');
    console.log('Тип клиента:', data.clientType);
    console.log('Услуги:', data.services || data.oneTimeServices || data.periodicServices);
    console.log('Итоговая стоимость:', data.total, '₽');
    console.log('Имя:', data.name);
    console.log('Телефон:', data.phone);
    console.log('Комментарий:', data.comment || '(нет)');
    console.log('===================================');
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Ошибка обработки заявки:', error);
    return new Response(JSON.stringify({ success: false, error: 'Ошибка сервера' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}