"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./BusinessSupport.module.scss";
import Inputmask from "inputmask";
import Link from "next/link";

export default function BusinessSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const phoneRef = useRef(null);

  const supportItems = [
    {
      title: "Открытие бизнеса под ключ",
      text: "Подбор оптимальной формы собственности (ИП/ООО) и системы налогообложения. Полная регистрация с учетом специфики вашего будущего бизнеса.",
      feature: "Стратегия",
    },
    {
      title: "Техническая подготовка",
      text: "Оперативная помощь в открытии расчетного счета в надежных банках и полная регистрация онлайн-кассы в ФНС с подключением к ОФД.",
      feature: "Инструменты",
    },
  ];

  useEffect(() => {
    if (isOpen && phoneRef.current) {
      const im = new Inputmask({
        mask: "+7 (999) 999-99-99",
        showMaskOnHover: false,
        autoUnmask: true,
        clearMaskOnLostFocus: true,
      });
      im.mask(phoneRef.current);
    }
  }, [isOpen]);

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const maskInstance = (phoneRef.current as any)?.inputmask;
    const rawPhone = maskInstance ? maskInstance.unmaskedvalue() : "";

    if (!rawPhone || rawPhone.length !== 10) {
      alert("Введите корректный номер телефона");
      return;
    }

    setIsSubmitting(true);

    const targetPhone = "79627347474";
    const idInstance = "3100517801";
    const apiTokenInstance =
      "4e23b210658549c881680633b93bb11301a0f304a927433da6";

    const messageText = `🚀 ЗАЯВКА НА СОПРОВОЖДЕНИЕ\nИнтересует: ${selectedService}\nИмя: ${name}\nТелефон: +7${rawPhone}`;

    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chatId: `${targetPhone}@c.us`,
            message: messageText,
          }),
        },
      );

      if (response.ok) {
        // --- ОТПРАВКА ЦЕЛИ В МЕТРИКУ ---
        if (typeof window !== "undefined" && (window as any).ym) {
          (window as any).ym(92696090, "reachGoal", "zapusk-modal");
        }
        // ------------------------------

        alert("Заявка принята. Мы подготовим для вас план открытия бизнеса.");
        setIsOpen(false);
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      console.error(error);
      alert("Произошла ошибка соединения.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-block">
      <div className={styles.supportContainer}>
        <div className={styles.infoSide}>
          <h2>
            Запустите бизнес <br /> без рисков и ошибок
          </h2>
          <p>
            Мы не просто регистрируем компанию, а выстраиваем финансовый
            фундамент: от подбора налоговой схемы до настройки кассового
            оборудования.
          </p>
        </div>
        <div className={styles.cardsSide}>
          {supportItems.map((item, idx) => (
            <div key={idx} className={styles.supportCard}>
              <span>{item.feature}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className={styles.line}></div>
              <button
                className={styles.cardBtn}
                onClick={() => openModal(item.title)}
              >
                Обсудить запуск
              </button>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h3>Консультация по запуску</h3>
            <p className={styles.serviceName}>{selectedService}</p>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  ref={phoneRef}
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Получить консультацию"}
              </button>
              <p className={styles.privacy}>
                Нажимая на кнопку, вы соглашаетесь с{" "}
                <Link
                  href="/docs/Политика%20обработки%20ПД.pdf"
                  target="_blank"
                >
                  политикой конфиденциальности
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
