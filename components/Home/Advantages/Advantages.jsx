"use client";
import "./Advantages.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function Advantages() {
  const availableServices = [
    {
      id: 1,
      title: `Мы работаем только по официальному договору`,
      text: "Мы несем полную материальную ответственность за свою работу.",
    },
    {
      id: 2,
      title: "Наши услуги можно полностью принять в расходы",
      text: "За счет наших услуг уменьшаются затраты на зарплатные налоги, налоги на прибыль, усн.",
    },
    {
      id: 3,
      title: "Повышаем квалификацию за свой счет",
      text: "Наши специалисты всегда в курсе последних изменений законодательства. Вам не придется тратить деньги на обучение персонала",
    },
    {
      id: 4,
      title: `Мы не болеем и не ходим в отпуск`,
      text: "Полностью заменяем штат бухгалтеров. Консультируем, подготавливаем все документы.",
    },
    {
      id: 5,
      title: "Вам не нужно тратить средства на рабочее место и ПО",
      text: "Собственное современное и актуальное программное обеспечение для ведения бухгалтерии и сдачи отчетности",
    },
  ];

  return (
    <>
      <div className="home-services home-block advantages-blog">
        <div className="swiper-title-pagination advantages">
          <div>
            <h2>
              Почему с нами<br></br>
              выгодно работать?
            </h2>
            <button className="swiper-button-prev-new-advantages">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"
                />
              </svg>
            </button>
            <button className="swiper-button-next-new-advantages">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next-new-advantages",
            prevEl: ".swiper-button-prev-new-advantages",
          }}
          modules={[Navigation]}
          className="promo-catalog"
        >
          {availableServices.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="advantages-home-card">
                <p className="num">0{item.id}</p>
                <p className="title">{item.title}</p>
                <span>{item.text}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
