'use client';
import './Services.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Services(){

    const availableServices = [
        {id: 1, link: "/service-business-registration", img: "Бизнес", title: "Регистрация бизнеса", question: "Хотите открыть бизнес, но боитесь бюрократии?", text: "Мы оформим все документы, подадим заявку и поможем выбрать налогообложение. Вам не придется разбираться в тонкостях – просто начинайте работать."},
        {id: 2, link: "/service-preparation-of-documents", img: "Подготовка", title: "Подготовка документов для налоговой", question: "Ошибки в отчетах могут стоить штрафов. Уверены, что все сделано правильно?", text: "Мы подготовим и проверим документы, исключив риски. Все вовремя, без лишних вопросов со стороны налоговой."},
        {id: 3, link: "/service-accounting", img: "Бухучет", title: "Бухгалтерский учет под ключ", question: "Тратите время на бухгалтерию вместо развития бизнеса?", text: "Передайте нам учет, налоги и отчеты. Мы все сделаем правильно и в срок, а вы сосредоточьтесь на главном."},
        {id: 4, link: "/service-tax-support", img: "Налоги", title: "Налоговое сопровождение", question: "Хотите платить меньше налогов без риска проверок?", text: "Оптимизируем налоги законными способами, поможем выбрать выгодную систему налогообложения и избежать претензий со стороны ФНС."},
        {id: 5, link: "/service-change-egrul", img: "ЕГРЮЛ", title: "Изменения в ЕГРЮЛ", question: "Нужно сменить директора, адрес или ОКВЭД, но не знаете, как правильно оформить?", text: "Быстро и без ошибок внесем изменения в реестр, подготовим документы и подадим их в налоговую."},
    ]

    return(
        <>
            <div className='home-services home-block'>
                <div className='swiper-title-pagination'>
                    <div>
                        <h2>Услуги</h2>
                        <button className="swiper-button-prev-new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"/></svg>
                        </button>
                        <button className="swiper-button-next-new">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
                        </button>
                    </div>
                    <Link href={'/services'}>Все услуги <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg></Link>
                </div>
                <Swiper
                   slidesPerView={'auto'}
                   spaceBetween={0}
                   navigation={{
                       nextEl: ".swiper-button-next-new",
                       prevEl: ".swiper-button-prev-new",
                   }}
                   modules={[Navigation]}
                   className="promo-catalog"  
               >
                   {availableServices.map(item => (
                       <SwiperSlide key={item.id}>
                            <Image className='service-fon' src={`/Home/Services/${item.img}.jpg`} width={656} height={380} alt={item.title} />
                            <Link href={item.link} className='services-home-card'>
                                <div className='title-card'>
                                    <Image src={`/Home/Services/${item.img}.svg`} width={65} height={65} alt={item.title} />
                                    <p>{item.title}</p>
                                </div>
                                <div className='description-card'>
                                    <p>{item.question}</p>
                                    <div className='line'></div>
                                    <span>{item.text}</span>
                                    <button className='button-card'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
                                    </button>
                                </div>
                            </Link>
                       </SwiperSlide>
                   ))}
                   
               </Swiper>
            </div>
        </>
    )
}