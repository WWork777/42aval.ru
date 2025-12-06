import React from "react";
import Link from "next/link";
import "./ArticlePage.scss";
import Image from "next/image";
import Header from "../../../../components/Header/Header";
import Form from "../../../../components/Home/Form/Form";
import Service from "../../../../components/Service/Service";

export async function generateMetadata({ params }) {
  const { post } = params;

  const res = await fetch(`https://42aval.ru/Services/Services.json`);
  const data = await res.json();
  const article = data.find((item) => item.url === post);

  if (!article) {
    return {
      title: "Проект не найден",
      description: "Этого проекта не существует.",
    };
  }

  return {
    title: `${article.title}`,
    description: `${article.description}`,
    keywords: article.keywords,
    alternates: {
      canonical: `https://42aval.ru/services/${article.url}`,
    },
    openGraph: {
      title: `${article.title}`,
      description: `${article.description}`,
      url: `https://42aval.ru/services/${article.url}`,
      images: [
        {
          url: `/Portfolio/${article.url}/1.webp`,
          alt: article.title,
        },
      ],
    },
  };
}

const Portfolio = async ({ params }) => {
  const { post } = params;

  const res = await fetch(`https://42aval.ru/Services/Services.json`);
  const data = await res.json();
  const article = data.find((item) => item.url === post);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <>
      <Header />
      <div className="service-container">
        <div className="service-hero-container">
          <Image
            src={`/Services/${article.url}/1.webp`}
            alt={`${article.title}`}
            className="project-fon"
            width={1900}
            height={1200}
          />
          <div className="project-title">
            <div>
              <h1>{article.name}</h1>
              <h2>{article.subtitle}</h2>
            </div>
            <div>
              <p className="price">{article.price}</p>
              {/* <button
                className="link-more"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Оставить заявку
              </button> */}
            </div>
          </div>
        </div>
        <div className="service-advantages">
          <div className="service-advantages-card">
            <p className="title-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4141 20.4141L22.4141 14.4141C22.6034 14.2292 22.7541 14.0086 22.8575 13.765C22.9609 13.5214 23.0149 13.2598 23.0164 12.9952C23.018 12.7306 22.967 12.4683 22.8664 12.2235C22.7659 11.9788 22.6178 11.7564 22.4307 11.5693C22.2436 11.3822 22.0212 11.2341 21.7765 11.1335C21.5317 11.033 21.2694 10.982 21.0048 10.9836C20.7402 10.9851 20.4786 11.0391 20.235 11.1425C19.9914 11.2459 19.7708 11.3966 19.5859 11.5859L14.7454 16.4273L13.1087 15.3355C12.6673 15.0614 12.1365 14.9698 11.6287 15.08C11.1209 15.1902 10.6759 15.4936 10.3878 15.9261C10.0997 16.3586 9.99121 16.8862 10.0852 17.3972C10.1791 17.9083 10.4682 18.3628 10.8913 18.6645L13.8908 20.6645C14.2752 20.9217 14.7371 21.0373 15.1974 20.9917C15.6576 20.946 16.0877 20.7418 16.4141 20.4141ZM16 4C9.38353 4 4 9.38353 4 16C4 22.6165 9.38353 28 16 28C22.6165 28 28 22.6165 28 16C28 9.38353 22.6165 4 16 4ZM16 32C7.17835 32 0 24.8216 0 16C0 7.17835 7.17835 0 16 0C24.8216 0 32 7.17835 32 16C32 24.8216 24.8216 32 16 32Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="32"
                    y1="16"
                    x2="0"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C7AC7D" />
                    <stop offset="1" stopColor="#A68768" />
                  </linearGradient>
                </defs>
              </svg>
              {article.advantages.one.title}
            </p>
            <p className="text-card">{article.advantages.one.subtitle}</p>
          </div>
          <div className="service-advantages-card">
            <p className="title-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4141 20.4141L22.4141 14.4141C22.6034 14.2292 22.7541 14.0086 22.8575 13.765C22.9609 13.5214 23.0149 13.2598 23.0164 12.9952C23.018 12.7306 22.967 12.4683 22.8664 12.2235C22.7659 11.9788 22.6178 11.7564 22.4307 11.5693C22.2436 11.3822 22.0212 11.2341 21.7765 11.1335C21.5317 11.033 21.2694 10.982 21.0048 10.9836C20.7402 10.9851 20.4786 11.0391 20.235 11.1425C19.9914 11.2459 19.7708 11.3966 19.5859 11.5859L14.7454 16.4273L13.1087 15.3355C12.6673 15.0614 12.1365 14.9698 11.6287 15.08C11.1209 15.1902 10.6759 15.4936 10.3878 15.9261C10.0997 16.3586 9.99121 16.8862 10.0852 17.3972C10.1791 17.9083 10.4682 18.3628 10.8913 18.6645L13.8908 20.6645C14.2752 20.9217 14.7371 21.0373 15.1974 20.9917C15.6576 20.946 16.0877 20.7418 16.4141 20.4141ZM16 4C9.38353 4 4 9.38353 4 16C4 22.6165 9.38353 28 16 28C22.6165 28 28 22.6165 28 16C28 9.38353 22.6165 4 16 4ZM16 32C7.17835 32 0 24.8216 0 16C0 7.17835 7.17835 0 16 0C24.8216 0 32 7.17835 32 16C32 24.8216 24.8216 32 16 32Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="32"
                    y1="16"
                    x2="0"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C7AC7D" />
                    <stop offset="1" stopColor="#A68768" />
                  </linearGradient>
                </defs>
              </svg>
              {article.advantages.two.title}
            </p>
            <p className="text-card">{article.advantages.two.subtitle}</p>
          </div>
          <div className="service-advantages-card">
            <p className="title-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4141 20.4141L22.4141 14.4141C22.6034 14.2292 22.7541 14.0086 22.8575 13.765C22.9609 13.5214 23.0149 13.2598 23.0164 12.9952C23.018 12.7306 22.967 12.4683 22.8664 12.2235C22.7659 11.9788 22.6178 11.7564 22.4307 11.5693C22.2436 11.3822 22.0212 11.2341 21.7765 11.1335C21.5317 11.033 21.2694 10.982 21.0048 10.9836C20.7402 10.9851 20.4786 11.0391 20.235 11.1425C19.9914 11.2459 19.7708 11.3966 19.5859 11.5859L14.7454 16.4273L13.1087 15.3355C12.6673 15.0614 12.1365 14.9698 11.6287 15.08C11.1209 15.1902 10.6759 15.4936 10.3878 15.9261C10.0997 16.3586 9.99121 16.8862 10.0852 17.3972C10.1791 17.9083 10.4682 18.3628 10.8913 18.6645L13.8908 20.6645C14.2752 20.9217 14.7371 21.0373 15.1974 20.9917C15.6576 20.946 16.0877 20.7418 16.4141 20.4141ZM16 4C9.38353 4 4 9.38353 4 16C4 22.6165 9.38353 28 16 28C22.6165 28 28 22.6165 28 16C28 9.38353 22.6165 4 16 4ZM16 32C7.17835 32 0 24.8216 0 16C0 7.17835 7.17835 0 16 0C24.8216 0 32 7.17835 32 16C32 24.8216 24.8216 32 16 32Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="32"
                    y1="16"
                    x2="0"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C7AC7D" />
                    <stop offset="1" stopColor="#A68768" />
                  </linearGradient>
                </defs>
              </svg>
              {article.advantages.three.title}
            </p>
            <p className="text-card">{article.advantages.three.subtitle}</p>
          </div>
          <div className="service-advantages-card">
            <p className="title-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4141 20.4141L22.4141 14.4141C22.6034 14.2292 22.7541 14.0086 22.8575 13.765C22.9609 13.5214 23.0149 13.2598 23.0164 12.9952C23.018 12.7306 22.967 12.4683 22.8664 12.2235C22.7659 11.9788 22.6178 11.7564 22.4307 11.5693C22.2436 11.3822 22.0212 11.2341 21.7765 11.1335C21.5317 11.033 21.2694 10.982 21.0048 10.9836C20.7402 10.9851 20.4786 11.0391 20.235 11.1425C19.9914 11.2459 19.7708 11.3966 19.5859 11.5859L14.7454 16.4273L13.1087 15.3355C12.6673 15.0614 12.1365 14.9698 11.6287 15.08C11.1209 15.1902 10.6759 15.4936 10.3878 15.9261C10.0997 16.3586 9.99121 16.8862 10.0852 17.3972C10.1791 17.9083 10.4682 18.3628 10.8913 18.6645L13.8908 20.6645C14.2752 20.9217 14.7371 21.0373 15.1974 20.9917C15.6576 20.946 16.0877 20.7418 16.4141 20.4141ZM16 4C9.38353 4 4 9.38353 4 16C4 22.6165 9.38353 28 16 28C22.6165 28 28 22.6165 28 16C28 9.38353 22.6165 4 16 4ZM16 32C7.17835 32 0 24.8216 0 16C0 7.17835 7.17835 0 16 0C24.8216 0 32 7.17835 32 16C32 24.8216 24.8216 32 16 32Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="32"
                    y1="16"
                    x2="0"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C7AC7D" />
                    <stop offset="1" stopColor="#A68768" />
                  </linearGradient>
                </defs>
              </svg>
              {article.advantages.four.title}
            </p>
            <p className="text-card">{article.advantages.four.subtitle}</p>
          </div>
        </div>
        <div className="numbers">
          <p className="numbers-title">{article.numbers.title}</p>
          <p className="numbers-text">{article.numbers.subtitle}</p>
          <div className="numbers-card-container">
            <div className="numbers-card">
              <div className="numbers-card-title">
                <p>{article.numbers.first.number}</p>
                <span>{article.numbers.first.text}</span>
              </div>
            </div>
            <div className="numbers-card">
              <div className="numbers-card-title">
                <p>{article.numbers.second.number}</p>
                <span>{article.numbers.second.text}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="packet">
          <h4 dangerouslySetInnerHTML={{ __html: article.packet.title }}></h4>
          <div className="packet-card-container">
            <div className="packet-card">
              <span className="packet-card-num">01</span>
              <p className="packet-card-title">{article.packet.first.title}</p>
              <div
                dangerouslySetInnerHTML={{ __html: article.packet.first.list }}
              ></div>
            </div>
            <div className="packet-card">
              <span className="packet-card-num">02</span>
              <p className="packet-card-title">{article.packet.second.title}</p>
              <div
                dangerouslySetInnerHTML={{ __html: article.packet.second.list }}
              ></div>
            </div>
            <div className="packet-card">
              <span className="packet-card-num">03</span>
              <p className="packet-card-title">{article.packet.third.title}</p>
              <div
                dangerouslySetInnerHTML={{ __html: article.packet.third.list }}
              ></div>
            </div>
            <div className="packet-card">
              <span className="packet-card-num">04</span>
              <p className="packet-card-title">{article.packet.fourth.title}</p>
              <div
                dangerouslySetInnerHTML={{ __html: article.packet.fourth.list }}
              ></div>
            </div>
          </div>
        </div>
        <Service />
      </div>
      {/* <Form /> */}
    </>
  );
};

export default Portfolio;
