import Image from "next/image";
import "./Hero.scss";
import HeroHeader from "./HeroHeader";
import DopHeader from "../../DopHeader/DopHeader";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <DopHeader />
      <HeroHeader />
      <div className="hero">
        <Image
          className="hero-fon"
          src={"/Home/Hero/fon.jpg"}
          width={1920}
          height={1080}
          alt="Бухгалтерский учет для бизнеса"
        />
        <div className="hero-content">
          <div className="slogan">
            <p>
              Мы считаем<br></br>
              Вы зарабатываете
            </p>
            <span>
              Доверьте бухгалтерию экспертам и&nbsp;сосредоточьтесь
              на&nbsp;том,&nbsp;что&nbsp;действительно важно
            </span>
          </div>
          <div className="hero-buttons">
            {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Связаться с нами</button> */}
            <Link href={"/services"}>Подробнее об услугах</Link>
          </div>
          <Image
            src={"/Home/Hero/businesswoman.svg"}
            width={616}
            height={834}
            alt="Аутсорсинг бухгалтерского учета"
          />
        </div>
      </div>
    </>
  );
}
