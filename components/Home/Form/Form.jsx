'use client'
import Image from "next/image";
import './Form.scss'
import Inputmask from 'inputmask';
import { useEffect, useRef, useState } from 'react';

export default function Form() {

  const inputRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', phone: ''});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Inputmask({ mask: "+7 (999) 999-99-99", showMaskOnHover: false }).mask(inputRef.current);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawPhone = inputRef.current.inputmask.unmaskedvalue();

    if (!rawPhone || rawPhone.length !== 10) {
      setStatus('Введите корректный номер телефона.');
      return;
    }

    setIsSubmitting(true);
    setStatus('Отправка...');

    try {
      const response = await fetch('/api/send-bitrix', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Заявка успешно отправлена!');
        setFormData({ name: '', phone: '', message: '' });
        setShowModal(true);
      } else {
        setStatus('Ошибка при отправке. Попробуйте снова.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Ошибка при отправке. Попробуйте снова.');
    }finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Закрыть модальное окно
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
                              value={formData.phone}
                              onChange={handleChange}
                              required
                          />
                            <span className="bar"></span>
                            <label>Телефон</label>
                        </div>
            <span className="conf">Нажимая на кнопку “отправить заявку”, я соглашаюсь с условиями <a href="#"   type="button" data-bs-toggle="modal" data-bs-target="#сonfidentiality">политики конфиденциальности</a></span>
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
