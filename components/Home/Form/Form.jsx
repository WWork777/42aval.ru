'use client'
import Image from "next/image";
import Link from "next/link";
import './Form.scss'
import Inputmask from 'inputmask';
import { useEffect, useRef, useState } from 'react';

export default function Form() {

  const inputRef = useRef(null);
  const [formData, setFormData] = useState({ name: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      const im = new Inputmask({ 
        mask: "+7 (999) 999-99-99", 
        showMaskOnHover: false,
        autoUnmask: true 
      });
      im.mask(inputRef.current);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const maskInstance = inputRef.current?.inputmask;
    const rawPhone = maskInstance ? maskInstance.unmaskedvalue() : ""; 

    if (!rawPhone || rawPhone.length !== 10) {
      alert('Введите корректный номер телефона (10 цифр после +7)');
      return;
    }

    setIsSubmitting(true);

    const Phone = "79627347474";
    const idInstance = "3100517801";
    const apiTokenInstance = "4e23b210658549c881680633b93bb11301a0f304a927433da6";

    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: `${Phone}@c.us`,
            message: `Новая заявка (Нижняя форма):\nИмя: ${formData.name}\nТелефон: +7${rawPhone}`
          }),
        },
      );

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '' });
        if (inputRef.current) inputRef.current.value = "";
      } else {
        alert('Ошибка при отправке. Попробуйте снова.');
      }
    } catch (error) {
      console.error(error);
      alert('Ошибка при отправке. Проверьте соединение.');
    }finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Закрыть модальное окно
  };

  return (
    <>
      <form className="FooterForm" onSubmit={handleSubmit}>
        <div className="form-head">
            <p className="form-title">Готовы доверить бухгалтерию<br></br>профессионалам?</p>
            <span>Оставьте заявку,&nbsp;и&nbsp;мы свяжемся с&nbsp;вами в&nbsp;ближайшее время.&nbsp;</span>
        </div>
        <div className="form-form">
                        <div className="group">      
                            <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                             />
                            <span className="bar"></span>
                            <label>Имя</label>
                        </div>
                        <div className="group">      
                          <input
                              ref={inputRef}
                              type="text"
                              name="phone"
                              required
                              autoComplete="off"
                          />
                            <span className="bar"></span>
                            <label>Телефон</label>
                        </div>
            {/* <span className="conf">Нажимая на кнопку “отправить заявку”, я соглашаюсь с условиями <a href="#"   type="button" data-bs-toggle="modal" data-bs-target="#сonfidentiality">политики конфиденциальности</a></span> */}
            <span className="conf">Нажимая на кнопку “отправить заявку”, я соглашаюсь с условиями <Link target="_blank" href="/docs/Политика обработки ПД.pdf">политики конфиденциальности</Link></span>
            <button type="submit" className="link-more" href='#' disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span>Отправка...</span>
                </>
              ) : (
                <>
                  <span>Оставить заявку</span>
                </>
              )}
		        </button>
        </div>
      </form>
      {showModal && (
        <div className="modal-tg">
          <div className="modal-tg-content">
            <h2>Заявка отправлена!</h2>
            <p>Мы получили вашу заявку и свяжемся с вами в ближайшее время</p>
            <button onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}
