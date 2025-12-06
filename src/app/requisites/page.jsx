import Header from "../../../components/Header/Header";
import Form from "../../../components/Home/Form/Form";
import "./requisites.scss";

export const metadata = {
  title: `Реквизиты компании Aval42 | Бухгалтерские услуги для бизнеса`,
  description: `Реквизиты компании Aval42 для заключения договоров на бухгалтерское обслуживание и налоговый учет. Надежный партнёр вашего бизнеса.`,
  alternates: {
    canonical: "https://42aval.ru/requisites",
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
    title: `Реквизиты компании Aval42 | Бухгалтерские услуги для бизнеса`,
    description: `Реквизиты компании Aval42 для заключения договоров на бухгалтерское обслуживание и налоговый учет. Надежный партнёр вашего бизнеса.`,
    url: `https://42aval.ru/requisites`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: "Аутсорс бухгалтерия",
      },
    ],
  },
};

const RekvizitiItem = ({ name, value }) => {
  return (
    <>
      <div className="rekviziti-item">
        <p>{name}</p>
        <p>{value}</p>
      </div>
    </>
  );
};
function Rekviziti() {
  return (
    <>
      <Header />
      <div className="rekviziti">
        <div className="heading">
          <h1 className="cormorant-garamond-bold">Реквизиты</h1>
        </div>
        <div className="rekviziti-list">
          <RekvizitiItem
            name="Полное наименование:"
            value='ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АВАЛЬ"'
          />
          <RekvizitiItem name="Сокращенное наименование:" value='ООО "Аваль"' />
          <RekvizitiItem name="ИНН:" value="54205272556" />
          <RekvizitiItem name="КПП:" value="420501001" />
          <RekvizitiItem name="ОГРН:" value="1134205020014" />
          <RekvizitiItem
            name="Юридический адрес:"
            value="650036, Кемеровская область, г Кемерово, Терешковой ул, д. 41, офис 302"
          />
          <RekvizitiItem
            name="Фактический адрес:"
            value="Кемеровская область, г Кемерово, Терешковой ул, д. 41, офис 302"
          />
          <RekvizitiItem name="Телефон:" value="+7 (3842) 44-74-74" />
          <RekvizitiItem name="Эл. почта:" value="55199986499@mail.ru" />
          <RekvizitiItem
            name="Генеральный директор:"
            value="Астапенко Елена Анатольевна"
          />
        </div>
        {/* <Form /> */}
      </div>
    </>
  );
}

export default Rekviziti;
