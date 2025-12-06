import Image from "next/image";
import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Services from "../../components/Home/Services/Services";
import Advantages from "../../components/Home/Advantages/Advantages";
import Steps from "../../components/Home/Steps/Steps";
import Form from "../../components/Home/Form/Form";
import Blog from "../../components/Home/Blog/Blog";

export const metadata = {
  title: "Бухгалтерский аутсорсинг и регистрация бизнеса в Кемерово | АВАЛЬ",
  description:
    "Регистрация ООО и ИП, бухгалтерское сопровождение, налоговая оптимизация и помощь по ФЗ-115/ФЗ-161. Работаем по всей России. Фиксированные цены, гарантия сроков!",
  alternates: {
    canonical: "https://42aval.ru/",
  },
  keywords: [
    "бухгалтерский аутсорсинг",
    "регистрация ООО",
    "регистрация ИП",
    "открытие расчетного счета",
    "смена ОКВЭД",
    "внести изменения в ЕГРЮЛ",
    "бухгалтерское сопровождение",
    "налоговая оптимизация",
    "нулевая отчетность",
    "патентная система налогообложения",
    "подбор системы налогообложения",
    "ФЗ-115",
    "ФЗ-161",
    "помощь бизнесу",
    "аутсорсинг бухгалтерии",
    "сдача отчетности",
    "бухгалтерские услуги для ИП",
    "бухгалтерские услуги для ООО",
    "экстренная помощь бизнесу",
    "открыть бизнес под ключ",
  ],
  openGraph: {
    title: "Бухгалтерский аутсорсинг и регистрация бизнеса под ключ | АВАЛЬ",
    description:
      "Регистрация ООО и ИП, бухгалтерское сопровождение, налоговая оптимизация и помощь по ФЗ-115/ФЗ-161. Работаем по всей России. Фиксированные цены, гарантия сроков!",
    url: `https://42aval.ru/`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: "Аутсорсинг бухгалтерских услуг АВАЛЬ",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Steps />
      <Blog />
      {/* <Form /> */}
    </>
  );
}
