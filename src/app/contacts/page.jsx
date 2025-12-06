import Contacts from "../../../components/Contacts/Contacts";
import Header from "../../../components/Header/Header";
import Form from "../../../components/Home/Form/Form";
import YMap from "../../../components/YMap/YMap";

export const metadata = {
  title: "Контакты Aval42 | Закажите бухгалтерские услуги для вашего бизнеса",
  description:
    "Свяжитесь с нами для консультации и расчёта стоимости бухгалтерских услуг. Телефон, адрес, форма обратной связи — компания Aval42.",
  alternates: {
    canonical: "https://42aval.ru/contacts",
  },
  keywords: [
    "контакты бухгалтерской компании, заказать бухгалтерские услуги, консультация бухгалтера",
  ],
  openGraph: {
    title: "Контакты Aval42 | Закажите бухгалтерские услуги для вашего бизнеса",
    description:
      "Свяжитесь с нами для консультации и расчёта стоимости бухгалтерских услуг. Телефон, адрес, форма обратной связи — компания Aval42.",
    url: `https://42aval.ru/contacts`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: "Аутсорс бухгалтерия Aval42",
      },
    ],
  },
};

export default function MainBlog() {
  return (
    <>
      <Header />
      <Contacts />
      <YMap />
      {/* <Form /> */}
    </>
  );
}
