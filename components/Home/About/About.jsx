import Image from "next/image";
import './About.scss'

export default function About() {
  return (
    <>
      <div className="home-block about">
        <div className="about-title">
          <h2>О компании</h2>
          <Image src={'/Home/About/about.jpg'} alt="Аутсорсинг бухгалтерского учета" width={606} height={623}/>
        </div>

        <div className="about-text">
            <h2>Нам доверяют финансы,<br></br>
            потому что мы знаем в них толк
            </h2>
            <p>Мы&nbsp;—&nbsp;команда профессионалов с&nbsp;опытом в&nbsp;бухгалтерском учете, налоговом планировании и&nbsp;финансовом консалтинге. Наша&nbsp;цель&nbsp;—&nbsp;избавить вас от бумажной рутины, минимизировать риски и&nbsp;обеспечить стабильность бизнеса.</p>
            <p>Мы работаем с&nbsp;малым, средним и&nbsp;крупным бизнесом, предлагая персонализированные решения под&nbsp;любые задачи.</p>
            <div className="advantage-block">
                <div className="advantage">
                    <span>15+</span>
                    <p>Лет опыта работы</p>
                    <div className="advantage-line"></div>
                </div>
                <div className="advantage">
                    <span>50 000+</span>
                    <p>Успешно отправленных отчетов</p>
                    <div className="advantage-line"></div>
                </div>
                <div className="advantage">
                    <span>10 млн+ ₽</span>
                    <p>Сэкономили на налогах</p>
                    <div className="advantage-line"></div>
                </div>
                <div className="advantage">
                    <span>100+</span>
                    <p>Клиентов уже работают с нами</p>
                    <div className="advantage-line"></div>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}
