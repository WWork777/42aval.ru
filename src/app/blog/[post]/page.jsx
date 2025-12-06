// app/blog/[post]/page.js
import React from "react";
import Link from "next/link";
import "./ArticlePage.scss";
import Header from "../../../../components/Header/Header";
import HeroHeader from "../../../../components/Home/Hero/HeroHeader";
import DopHeader from "../../../../components/DopHeader/DopHeader";

// Функция для получения данных статьи
async function getArticle(postSlug) {
  try {
    // Используем относительный путь
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://42aval.ru";

    const res = await fetch(`${baseUrl}/Blog/Articles.json`, {
      next: { revalidate: 3600 }, // Кэшируем на 1 час
    });

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await res.json();
    return data.find((item) => item.url === postSlug);
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { post } = params;
  const article = await getArticle(post);

  if (!article) {
    return {
      title: "Статья не найдена",
      description: "Эта статья не существует.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `https://42aval.ru/blog/${article.url}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://42aval.ru/blog/${article.url}`,
      images: [
        {
          url: `/content/${article.photo}.webp`,
          alt: article.title,
        },
      ],
    },
  };
}

const ArticlePage = async ({ params }) => {
  const { post } = params;
  const article = await getArticle(post);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  const formattedText = article.articlestext.replace(/\n\n/g, "<br><br>");

  return (
    <>
      <HeroHeader />
      <DopHeader />
      <div
        className="project-fon"
        style={{ backgroundImage: `url(/Blog/${article.photo}.webp)` }}
      >
        <h1>{article.title}</h1>
        <p>{article.date}</p>
      </div>
      <div className="article-page">
        <div
          className="article-text"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
        <Link href="/blog" className="back-button">
          Назад в блог
        </Link>
      </div>
    </>
  );
};

export default ArticlePage;
