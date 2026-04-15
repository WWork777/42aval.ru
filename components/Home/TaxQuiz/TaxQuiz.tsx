"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./TaxQuiz.module.scss";
import Link from "next/link";
import Inputmask from "inputmask";

const CheckIcon = () => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8L6 13L17 1"
      stroke="#a3816a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const steps = [
  {
    id: 1,
    question: "Что планируете открывать?",
    options: [
      "Индивидуальное предпринимательство (ИП)",
      "Общество с огранич. ответственностью (ООО)",
    ],
  },
  {
    id: 2,
    question: "Ожидаемый годовой доход?",
    options: ["До 2.4 млн ₽", "До 150 млн ₽", "Более 150 млн ₽"],
  },
  {
    id: 3,
    question: "Будут ли наемные сотрудники?",
    options: ["Работаю один", "До 10 человек", "Более 10 человек"],
  },
];

export default function TaxQuiz() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Состояние для хранения выбранных ответов
  const [answers, setAnswers] = useState<string[]>([]);

  const phoneRef = useRef(null);

  // Инициализация маски телефона
  useEffect(() => {
    if (phoneRef.current && isFinished) {
      const im = new Inputmask({
        mask: "+7 (999) 999-99-99",
        showMaskOnHover: false,
        autoUnmask: true,
        clearMaskOnLostFocus: true,
      });
      im.mask(phoneRef.current);
    }
  }, [isFinished]);

  const handleNext = (option: string) => {
    // Сохраняем ответ текущего шага
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = option;
    setAnswers(updatedAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setIsStarted(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

    const messageText =
      `📊 КВИЗ: Подбор стратегии\n` +
      `📞 Телефон: +7${rawPhone}\n` +
      `--------------------------\n` +
      steps
        .map((s, idx) => `❓ ${s.question}\n✅ ${answers[idx]}`)
        .join("\n\n");

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
          (window as any).ym(92696090, "reachGoal", "quiz");
        }
        // ------------------------------

        alert("Спасибо! Мы получили ваши ответы и скоро свяжемся с вами.");

        setIsStarted(false);
        setIsFinished(false);
        setCurrentStep(0);
        setAnswers([]);
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
    <div className={`${styles.taxQuiz} home-block`}>
      <div className={styles.quizCard}>
        {!isStarted ? (
          <div className={styles.introStep}>
            <span className={styles.badge}>Экспертный аудит</span>
            <h2 className={styles.title}>
              Получите персональный подбор <br />
              <span>налоговой стратегии</span>
            </h2>
            <p>
              Ответьте на 3 уточняющих вопроса, чтобы определить оптимальный
              режим налогообложения и минимизировать платежи в бюджет.
            </p>
            <ul className={styles.bonusList}>
              <li>
                <CheckIcon />{" "}
                <span>Сравнение УСН (доходы), УСН (д-р) и Патента</span>
              </li>
              <li>
                <CheckIcon /> <span>Анализ ограничений по выручке и штату</span>
              </li>
              <li>
                <CheckIcon /> <span>Рекомендации по выбору кодов ОКВЭД</span>
              </li>
            </ul>
            <button
              className={styles.startBtn}
              onClick={() => setIsStarted(true)}
            >
              Начать подбор стратегии
            </button>
          </div>
        ) : !isFinished ? (
          <>
            <div className={styles.quizHeader}>
              <p className={styles.num}>0{steps[currentStep].id}</p>
              <button className={styles.backBtn} onClick={handleBack}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Назад
              </button>
            </div>
            <h2 className={styles.title}>{steps[currentStep].question}</h2>
            <div className={styles.options}>
              {steps[currentStep].options.map((opt, index) => (
                <button
                  key={index}
                  onClick={() => handleNext(opt)}
                  className={styles.optionBtn}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${((currentStep + 1) / steps.length) * 100}%`,
                }}
              ></div>
            </div>
          </>
        ) : (
          <div className={styles.finalStep}>
            <button
              className={styles.backBtn}
              onClick={() => setIsFinished(false)}
            >
              Назад к вопросам
            </button>
            <h2 className={styles.title}>Формирование отчета</h2>
            <p className={styles.finalDesc}>
              Ваши данные приняты. Укажите номер телефона, на который эксперт
              пришлет расчет налоговой нагрузки и предложит лучший вариант
              регистрации бизнеса.
            </p>
            <form className={styles.quizForm} onSubmit={handleSubmit}>
              <input
                ref={phoneRef}
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Получить результаты подбора"}
              </button>
            </form>
            <p className={styles.privacy}>
              Нажимая на кнопку, вы соглашаетесь с{" "}
              <Link href="/docs/Политика%20обработки%20ПД.pdf" target="_blank">
                политикой обработки персональных данных
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
