import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    // Ваш endpoint Bitrix24
    const BITRIX_URL = 'https://b24-6kv0rc.bitrix24.ru/rest/1/ws4tqkfcfnzm2mxg/crm.lead.add';

    // Отправка данных в Bitrix24
    const bitrixResponse = await fetch(BITRIX_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          TITLE: `Заявка от ${name}`,
          NAME: name,
          PHONE: [{
            VALUE: phone,
            VALUE_TYPE: 'WORK'
          }],
          // Опциональные стандартные поля:
          SOURCE_ID: 'WEB', // Источник - веб-сайт
          STATUS_ID: 'NEW'  // Статус - новый
        }
      })
    });

    const result = await bitrixResponse.json();

    // Обработка ошибок Bitrix
    if (result.error) {
      return NextResponse.json(
        { 
          success: false,
          error: result.error_description || 'Ошибка при создании лида в Bitrix24' 
        },
        { status: 400 }
      );
    }

    // Успешный ответ
    return NextResponse.json(
      { 
        success: true,
        leadId: result.result 
      },
      { status: 200 }
    );

  } catch (error) {
    // Обработка непредвиденных ошибок
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Внутренняя ошибка сервера' 
      },
      { status: 500 }
    );
  }
}