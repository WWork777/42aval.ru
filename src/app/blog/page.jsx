// src/MainBlog.js
import BlogComponent from "../../../components/Blog/Blog";
import Header from "../../../components/Header/Header";
import "./MainBlog.scss";

export const metadata = {
  title: "Блог о бухгалтерии, налогах и учете | Советы от экспертов Aval42",
  description:
    "Актуальные статьи о бухгалтерии, налогообложении и финансовом учете. Полезные советы для бизнеса, ИП и организаций от команды Aval42.",
  alternates: {
    canonical: "https://42aval.ru/blog",
  },
  keywords: [
    "бухгалтерский учет, налоговый учет, налоги для бизнеса, советы бухгалтеру, налоговые консультации, бухгалтерские статьи",
  ],
  openGraph: {
    title: "Блог о бухгалтерии, налогах и учете | Советы от экспертов Aval42",
    description:
      "Актуальные статьи о бухгалтерии, налогообложении и финансовом учете. Полезные советы для бизнеса, ИП и организаций от команды Aval42.",
    url: `https://42aval.ru/blog`,
    images: [
      {
        url: `/favicon/favicon-96x96.png`,
        alt: "Аутсорсинг бухгалтерия AVAL42",
      },
    ],
  },
};

export default function MainBlog() {
  return (
    <>
      <Header />
      <BlogComponent />
    </>
  );
}
