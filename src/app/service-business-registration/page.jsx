import Header from "../../../components/Header/Header";
import Form from "../../../components/Home/Form/Form";
import Services from "../../../components/Services/Services";

export const metadata = {
  title: "Регистрация бизнеса в Кемерово | АВАЛЬ",
  description:
    "Быстрая регистрация бизнеса в Кемерово. Регистрация ООО и ИП. Полный спектр бухгалтерский услуг. Аутсорс бухгалтерия.",
  alternates: {
    canonical: "https://42aval.ru/services",
  },
  keywords: [
    "услуги бухгалтера",
    "ведение бухгалтерского учета",
    "услуги налогового учета",
    "расчет налогов",
    "бухгалтерское сопровождение",
    "налоговое сопровождение",
    "бухгалтерский аутсорсинг",
    "аутсорс бухгалтерия",
    "бухгалтерия онлайн",
    "бухгалтерия Кемерово",
    "налоговая оптимизация",
    "снижение налогов",
  ],
  openGraph: {
    title: "Регистрация бизнеса в Кемерово | АВАЛЬ",
    description:
      "Быстрая регистрация бизнеса в Кемерово. Регистрация ООО и ИП. Полный спектр бухгалтерский услуг. Аутсорс бухгалтерия.",
    url: `https://42aval.ru/services`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: "Аутсорс бухгалтерия",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="container">
        <Services topic={"Регистрация бизнеса"} />
      </div>
      {/* <Form /> */}
    </>
  );
}
