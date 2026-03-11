"use client";
import "./Footer.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <Image
          src={`/Footer/footer.png`}
          alt="Студия архитектуры и дизайна - подвал"
          width={1920}
          height={752}
        />
        <div className="footer-fon">
          <div className="footer-menu">
            <Link href="/">Главная</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/requisites">Реквизиты</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
          <div className="footer-logo">
            <Image
              src={"/avallogowhite.svg"}
              width={1024}
              height={512}
              alt="АВАЛЬ42 Бухгалтерия аутсорс"
            />
          </div>
          <div className="footer-contacts">
            <a href="tel:+7 (913) 304-52-33">+7 (913) 304-52-33</a>
            <a href="mailto:55199986499@mail.ru">55199986499@mail.ru</a>
            <div className="links">
              <a
                href="https://max.ru/u/f9LHodD0cOKf3w-EcnAMZGQEmLKfVuMxL2SsR6OO9GCeU9VMgJrzRx9J8Ow"
                className="icon"
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 320.000000 320.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899
                      -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101
                      -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110
                      294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528
                      566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090
                      -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71
                      552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39
                      l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141
                      -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300
                      -15z"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <a className="adress" href="https://yandex.ru/maps/-/CHVgf-ku">
              г. Кемерово, Сити Плаза Терешковой, 41.<br></br>303 офис, 3 этаж
            </a>
            <p className="adress">Пн - пт 09:00 - 18:00</p>

            {/* Добавленные ссылки на документы */}
            <div className="footer-docs">
              <Link
                href="/docs/Политика обработки ПД.pdf"
                target="_blanc"
                className="doc-link"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/docs/Согласие.pdf"
                target="_blanc"
                className="doc-link"
              >
                Согласие на обработку персональных данных
              </Link>
            </div>

            {/* <button className="link-more"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Обратный звонок</button> */}
          </div>
        </div>
      </footer>
    </>
  );
}
