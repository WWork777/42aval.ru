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
          <Link href="/prices">Цены</Link>
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
            <a href="https://max.ru/u/f9LHodD0cOKf3w-EcnAMZGQEmLKfVuMxL2SsR6OO9GCeU9VMgJrzRx9J8Ow" className="icon">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="23" height="23" viewBox="0 0 320.000000 320.000000"
                      preserveAspectRatio="xMidYMid meet">

                      <g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899
                        -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101
                        -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110
                        294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528
                        566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090
                        -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71
                        552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39
                        l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141
                        -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300
                        -15z"/>
                      </g>
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
