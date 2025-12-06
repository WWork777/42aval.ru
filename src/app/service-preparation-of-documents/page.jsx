import Header from "../../../components/Header/Header";
import Form from "../../../components/Home/Form/Form";
import Services from "../../../components/Services/Services";

export const metadata = {
  title: "Подготовка документов для налоговой в Кемерово | АВАЛЬ",
  description:
    "Оптимизация налогов, патентная система, сдача налоговой отчетности. Полный спектр бухгалтерских услуг.",
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
    title: "Подготовка документов для налоговой в Кемерово | АВАЛЬ",
    description:
      "Оптимизация налогов, патентная система, сдача налоговой отчетности. Полный спектр бухгалтерских услуг.",
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
        <Services topic={"Налоговое сопровождение"} />
      </div>
      {/* <Form /> */}
    </>
  );
}
