'use client'
import Link from "next/link";
import './HeroForm.scss'
import Inputmask from 'inputmask';
import { useEffect, useRef, useState } from 'react';

export default function HeroForm() {
  const inputRef = useRef(null);
  // Состояние только для имени, телефон живет внутри маски
  const [formData, setFormData] = useState({ name: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      const im = new Inputmask({ 
        mask: "+7 (999) 999-99-99", 
        showMaskOnHover: false,
        autoUnmask: true, // Позволяет получать чистые цифры через .value
        clearMaskOnLostFocus: true
      });
      im.mask(inputRef.current);
      
      return () => {
        if (inputRef.current?.inputmask) inputRef.current.inputmask.remove();
      };
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Получаем данные напрямую из DOM-узлов для надежности
    const maskInstance = inputRef.current?.inputmask;
    const rawPhone = maskInstance ? maskInstance.unmaskedvalue() : ""; 
    const formattedPhone = inputRef.current?.value || "";

    // Валидация: unmaskedvalue для +7 (999) возвращает 10 цифр (без +7)
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
            message: `Новая заявка с сайта:\nИмя: ${formData.name}\nТелефон: +7${rawPhone}`
          }),
        },
      );

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: '' });
        if (inputRef.current) inputRef.current.value = ""; // Чистим неуправляемый инпут
      } else {
        alert('Ошибка при отправке. Попробуйте снова.');
      }
    } catch (error) {
      console.error(error);
      alert('Ошибка при отправке. Проверьте соединение.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="hero-form-container" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="group">
            <input
              type="text"
              name="name"
              placeholder=" " 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="bar"></span>
            <label>Ваше имя</label>
          </div>

          <div className="group">
            <input
              ref={inputRef}
              type="text"
              name="phone"
              placeholder=" "
              required
              autoComplete="off"
            />
            <span className="bar"></span>
            <label>Введите номер телефона</label>
          </div>
        </div>

        <div className="conf-wrapper">
          <input type="checkbox" id="hero-conf" required />
          <label htmlFor="hero-conf" style={{ position: 'static', pointerEvents: 'auto' }}>
            Я согласен с <Link target="_blank" href="/docs/Политика обработки ПД.pdf">политикой данных</Link>
          </label>
        </div>

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </button>
      </form>

      {showModal && (
        <div className="modal-tg">
          <div className="modal-tg-content">
            <h2 className="modal-tg-title">Заявка отправлена!</h2>
            <p className="modal-tg-text">Мы получили вашу заявку и свяжемся с вами в ближайшее время</p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
}