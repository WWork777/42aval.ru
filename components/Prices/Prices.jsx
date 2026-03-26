"use client";
import React from "react";
// import Link from "next/link";
// import Image from "next/image";
import './Prices.scss';

export default function PriceComponent() {
  return (
    <div className="prices">
      <h3>Цены</h3>
      
      <div className="page">
        {/* Категория 1 */}
        <section className="price-section">
          <h2>Услуги для физических лиц</h2>
          <table className="price-table">
            <tbody>
              <tr>
                <td>Формирование декларации 3-НДФЛ: Продажа имущества</td>
                <td>1500 руб. (+500 за каждый последующий объект)</td>
              </tr>
              <tr>
                <td>Социальные вычеты (обучение, лечение до 2-х справок, каждая последующая +100р) с загрузкой в лк</td>
                <td>1500 руб.</td>
              </tr>
              <tr>
                <td>Имущественные вычеты (покупка квартиры)</td>
                <td>1500 руб.</td>
              </tr>
              <tr>
                <td>Консультация (подбор системы налогообложения, формы собственности. Определение порядка ведения бизнес процессов)</td>
                <td>5000 руб./час (Бесплатно при заключении договора Бухгалтерского сопровождения)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Категория 2 */}
        <section className="price-section">
          <h2>Услуги Государственной регистрации для Юридических лиц</h2>
          <table className="price-table">
            <tbody>
              <tr>
                <td>Регистрация (Открытие) ООО (1 учредитель/ИП)</td>
                <td>Бесплатно</td>
              </tr>
              <tr>
                <td>Регистрация (Открытие) ООО (несколько учредителей)</td>
                <td>6000 руб.</td>
              </tr>
              <tr>
                <td>Внесение Изменений в ЕГРЮЛ (сменить вид деятельности)</td>
                <td>1500 руб.</td>
              </tr>
              <tr>
                <td>Внесение Изменений (смена адреса, зависит от сложности)</td>
                <td>от 6000 руб.</td>
              </tr>
              <tr>
                <td>Иные изменения в Учредительные документы</td>
                <td>от 3500 руб.</td>
              </tr>
              <tr>
                <td>Упрощенная Ликвидация ООО</td>
                <td>10 000 руб.</td>
              </tr>
              <tr>
                <td>Стандартная ликвидация ООО</td>
                <td>от 25 000 руб.</td>
              </tr>
              <tr>
                <td>Помощь в открытии расчетного счета</td>
                <td>Бесплатно</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Категория 3 */}
        <section className="price-section">
          <h2>Услуги по ведению Бухгалтерского учета и составления отчетности</h2>
          <table className="price-table">
            <tbody>
              <tr>
                <td>Отчетность нулевая</td>
                <td>2500 руб. / квартал</td>
              </tr>
              <tr>
                <td>Ведение бухгалтерского учета (УСН/ Патент /АУСН)</td>
                <td>от 5000 руб.</td>
              </tr>
              <tr>
                <td>Ведение бухгалтерского учета ОСНО (общая система (НДС))</td>
                <td>от 10 000 руб.</td>
              </tr>
              <tr>
                <td>Расчет Заработной платы и кадровый документооборот без воинского учета (за человека)</td>
                <td>1000 руб.</td>
              </tr>
              <tr>
                <td>Расчет Заработной платы и кадровый документооборот с воинским учетом (за человека)</td>
                <td>1200 руб.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SEO JSON-LD микроразметка */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </div>
    </div>
  );
}

// Выносим данные для микроразметки в отдельную переменную
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Прайс-лист на бухгалтерские и юридические услуги",
  "itemListElement": [
    {
      "@type": "OfferCatalog",
      "name": "Услуги для физических лиц",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Формирование декларации 3-НДФЛ: Продажа имущества (+500 за каждый последующий объект)" },
          "price": "1500",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Социальные вычеты (обучение, лечение до 2-х справок, каждая последующая +100р)" },
          "price": "1500",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Имущественные вычеты (покупка квартиры)" },
          "price": "1500",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Консультация (подбор системы налогообложения, формы собственности)" },
          "price": "5000",
          "priceCurrency": "RUB",
          "description": "5000/час. При заключении договора Бухгалтерского сопровождения - Бесплатно."
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Услуги Государственной регистрации для Юридических лиц",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Регистрация (Открытие) ООО (1 учредитель/ИП) / Помощь в открытии расчетного счета" },
          "price": "0",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Регистрация (Открытие) ООО (несколько учредителей)" },
          "price": "6000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Внесение Изменений в ЕГРЮЛ (сменить вид деятельности)" },
          "price": "1500",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Внесение Изменений (смена адреса)" },
          "price": "6000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Иные изменения в Учредительные документы" },
          "price": "3500",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Упрощенная Ликвидация ООО" },
          "price": "10000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Стандартная ликвидация ООО" },
          "price": "25000",
          "priceCurrency": "RUB"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Услуги по ведению Бухгалтерского учета и составления отчетности",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Отчетность нулевая (за квартал)" },
          "price": "2500",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Ведение бухгалтерского учета (УСН/ Патент /АУСН)" },
          "price": "5000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Ведение бухгалтерского учета ОСНО (общая система НДС)" },
          "price": "10000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Расчет Заработной платы и кадровый документооборот без воинского учета (за человека)" },
          "price": "1000",
          "priceCurrency": "RUB"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Расчет Заработной платы и кадровый документооборот с воинским учетом (за человека)" },
          "price": "1200",
          "priceCurrency": "RUB"
        }
      ]
    }
  ]
};