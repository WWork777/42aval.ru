'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Services({ topic = "Все" }) {
  const [articles, setArticles] = useState([]);
  const [selectedTags, setSelectedTags] = useState(null); // null - начальное состояние, пока не загружены данные
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [displayedArticlesCount, setDisplayedArticlesCount] = useState(8);
  const articlesPerPage = 8;

  // Загрузка данных с сервера
  useEffect(() => {
    fetch("/Services/Services.json")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setFilteredArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  // Загружаем выбранные теги из sessionStorage только при монтировании компонента
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTags = JSON.parse(sessionStorage.getItem("selectedTags"));
      if (storedTags) {
        setSelectedTags([topic]); // Обновляем состояние с выбранными тегами
      } else {
        setSelectedTags([topic]); // Если тегов нет, устанавливаем дефолтное значение
      }
    }
  }, []);

  // Фильтрация проектов при изменении selectedTags
  useEffect(() => {
    if (selectedTags && articles.length > 0) {
      filterArticles(selectedTags);
      setDisplayedArticlesCount(articlesPerPage);
    }
  }, [selectedTags, articles]);

  // Сохранение выбранных тегов в sessionStorage
  useEffect(() => {
    if (selectedTags) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("selectedTags", JSON.stringify(selectedTags));
      }
    }
  }, [selectedTags]);

  const filterArticles = (tags) => {
    let filtered = articles;

    if (tags.length > 0 && !tags.includes("Все")) {
      filtered = filtered.filter((article) =>
        tags.every((tag) => article.tags.includes(tag))
      );
    }

    setFilteredArticles(filtered);
  };

  const handleTagClick = (tag) => {
    setSelectedTags(tag === "Все" ? ["Все"] : [tag]);
  };

  const handleLoadMore = () => {
    setDisplayedArticlesCount((prevCount) => prevCount + articlesPerPage);
  };

  if (selectedTags === null) {
    // Показать загрузочный экран, пока теги не загрузятся
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <div className="search">
        <h1>Услуги</h1>
        <div className="tags-container">
          {["Все", "Регистрация бизнеса", "Внесение изменений в ЕГРЮЛ", "Бухгалтерское сопровождение", "Налоговое сопровождение", "Помощь в экстренных ситуациях"].map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={selectedTags.includes(tag) ? "active" : ""}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="articles-container">
        {filteredArticles.length > 0 ? (
          filteredArticles.slice(0, displayedArticlesCount).map((article) => (
            <Link className="article-card" key={article.id} href={`/services/${article.url}`} >
              <Image src={`/Services/${article.url}/1.webp`} alt={`Проект дома ${article.description} "${article.title}"`} width={1000} height={1000} />
              <div className="article-card-fon">
                <div>
                  <h4>{article.name}</h4>
                  <span>{article.subtitle}</span>
                </div>
                <button className='button-card'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
                </button>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-articles">Проекты не найдены</p>
        )}
      </div>
      {filteredArticles.length > displayedArticlesCount && (
        <button className="load-more" onClick={handleLoadMore}>
          Показать еще
        </button>
      )}
    </>
  );
}
