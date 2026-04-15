"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./WelcomeModal.module.scss";
import Inputmask from "inputmask";
import Link from "next/link";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneRef = useRef(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("welcomeShown")) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("welcomeShown", "true");
  };

  useEffect(() => {
    if (isOpen && phoneRef.current) {
      const im = new Inputmask({
        mask: "+7 (999) 999-99-99",
        autoUnmask: true,
      });
      im.mask(phoneRef.current);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const maskInstance = (phoneRef.current as any)?.inputmask;
    const rawPhone = maskInstance ? maskInstance.unmaskedvalue() : "";
    const name = nameRef.current?.value || "Не указано";

    if (!rawPhone || rawPhone.length !== 10) {
      alert("Введите корректный номер телефона");
      return;
    }

    setIsSubmitting(true);

    const targetPhone = "79627347474";
    const idInstance = "3100517801";
    const apiTokenInstance =
      "4e23b210658549c881680633b93bb11301a0f304a927433da6";

    const messageText =
      `🔥 ЗАЯВКА ИЗ WELCOME-MODAL\n` +
      `Имя: ${name}\n` +
      `Телефон: +7${rawPhone}\n` +
      `Цель: Снижение налоговой нагрузки`;

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
        // --- ЦЕЛЬ МЕТРИКИ ---
        if (typeof window !== "undefined" && (window as any).ym) {
          (window as any).ym(92696090, "reachGoal", "modal");
        }
        // --------------------

        alert("Заявка успешно отправлена! Эксперт свяжется с вами.");
        handleClose();
      } else {
        alert("Ошибка при отправке. Попробуйте снова.");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка соединения.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>
          &times;
        </button>

        <div className={styles.topLine}></div>
        <div className={styles.content}>
          <span className={styles.status}>Экспертное сопровождение</span>
          <h2>Снизим налоговую нагрузку на ваш бизнес</h2>
          <p>
            Найдем законные способы сократить платежи в бюджет и возьмем на себя
            все вопросы по ведению бухгалтерии.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Как к вам обращаться?"
              required
            />
            <input
              ref={phoneRef}
              type="tel"
              placeholder="Номер телефона"
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Обсудить стратегию"}
            </button>
            <p className={styles.privacy}>
              Нажимая на кнопку, вы соглашаетесь с{" "}
              <Link href="/docs/Политика%20обработки%20ПД.pdf" target="_blank">
                политикой конфиденциальности
              </Link>
            </p>
          </form>

          <p className={styles.note}>
            Гарантируем конфиденциальность данных по NDA
          </p>
        </div>
      </div>
    </div>
  );
}
