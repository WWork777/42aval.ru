'use client';
import './Service.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Service(){

    const steps = [
        {id: 1, title: "Оставляете заявку", text: "Заполните короткую форму на нашем сайте, указав основные данные."},
        {id: 2, title: "Консультация", text: "Наш специалист свяжется с вами для уточнения деталей и подбора оптимальных условий регистрации."},
        {id: 3, title: "Подготовка документов", text: "Мы сформируем полный пакет документов, включая заявление о регистрации и, при необходимости, заявление на УСН."},
        {id: 4, title: "Работаете вы — считаем мы", text: "Вы занимаетесь бизнесом, а мы следим, чтобы ваши финансы были в порядке и вам не грозили штрафы."},
    ]

    return(
        <>
            <div className='steps'>
                <div className='swiper-title-pagination'>
                    <div>
                        <h4>Поддержим на <span>каждом</span> этапе</h4>
                        <div className='swiper-buttons'>
                            <button className="swiper-button-prev-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31z"/></svg>
                            </button>
                            <button className="swiper-button-next-new">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="currentColor" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <Swiper
                   slidesPerView={'auto'}
                   spaceBetween={0}
                   navigation={{
                       nextEl: ".swiper-button-next-new",
                       prevEl: ".swiper-button-prev-new",
                   }}
                   modules={[Navigation]}
                   className="steps-service"  
               >
                   {steps.map(item => (
                       <SwiperSlide key={item.id}>
                            <div className='services-home-card'>
                                <div className='title-card'>
                                    <p>{item.title}</p>
                                </div>
                                <div className='description-card'>
                                    <div className='line'></div>
                                    <span>{item.text}</span>
                                </div>
                            </div>
                       </SwiperSlide>
                   ))}
                   
               </Swiper>
            </div>
        </>
    )
}