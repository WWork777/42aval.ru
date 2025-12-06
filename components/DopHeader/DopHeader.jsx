"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OffcanvasHeader from "../OffcanvasHeader/OffcanvasHeader";

export default function DopHeader() {
  const openButtonRef = useRef(null);
  const router = useRouter();

  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки

    // Симулируем клик по кнопке для открытия/закрытия offcanvas
    if (openButtonRef.current) {
      openButtonRef.current.click();
    }

    // После этого выполняем переход по ссылке
    router.push(href);
  };

  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [isActive, setIsActive] = useState(false); // Новое состояние для активации функционала

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Активируем функционал только после прокрутки 200px
      if (currentScrollTop > 200) {
        setIsActive(true);

        if (currentScrollTop > lastScrollTop) {
          // Скроллим вниз
          setScrollDirection("down");
          setIsFixed(false);
        } else if (currentScrollTop < lastScrollTop) {
          // Скроллим вверх
          setScrollDirection("up");
          setIsFixed(true);
        }
      } else {
        // Если меньше 200px, всегда показываем шапку
        setIsActive(false);
        setIsFixed(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`all-header ${
          isActive ? (isFixed ? "" : "translate") : "translate"
        }`}
      >
        <Link href="/" className="logo-container">
          <div className="name">
            <Image
              src={"/avallogoblack.svg"}
              width={240}
              height={120}
              alt="АВАЛЬ42 Аутсорсинг бухгалтерского учета"
            />
          </div>
        </Link>
        <div className="menu">
          <Link href="/">Главная</Link>
          <Link href="/services">Услуги</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/requisites">Реквизиты</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
        <button
          ref={openButtonRef}
          id="btn-menu"
          className="btn-menu"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            ></path>
          </svg>
        </button>

        <div className="contacts-container">
          <div className="icons">
            <a href="https://wa.me/79133045233" className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                {" "}
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
              </svg>
            </a>
          </div>

          {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Обратный звонок</button> */}
        </div>
      </header>
      <OffcanvasHeader />
    </>
  );
}
