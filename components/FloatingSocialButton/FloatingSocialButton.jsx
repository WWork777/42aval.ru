"use client";
import { useState, useEffect, useRef } from "react";
import module from "./FloatingSocialButton.module.scss";

export default function FloatingSocialButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Закрытие при нажатии Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Кнопка вызова эвакуатора слева снизу */}
      <a href="tel:+79234807070" className={module.tow_truck_button}>
        {/* <img src="/svg/evakuator.png" alt="" /> */}
        <span className={module.tow_truck_text}>Вызвать эвакуатор</span>
      </a>

      {/* Основной контейнер с социальными кнопками справа */}
      <div className={module.floating_social_container} ref={containerRef}>
        {/* Социальные иконки */}
        <div
          className={`${module.social_icons} ${isOpen ? module.social_icons_open : ""}`}
        >
 <div className="contacts-container">
          <div className="icons">
            <a href="https://max.ru/u/f9LHodD0cOKf3w-EcnAMZGQEmLKfVuMxL2SsR6OO9GCeU9VMgJrzRx9J8Ow" className={module.social_icon}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="23" height="23" viewBox="0 0 320.000000 320.000000"
                      preserveAspectRatio="xMidYMid meet" fill="white">

                      <g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899
                        -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101
                        -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110
                        294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528
                        566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090
                        -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71
                        552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39
                        l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141
                        -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300
                        -15z"/>
                      </g>
                    </svg>
            </a>
          </div>

        </div>
          <a
            href="tel:+79627347474"
            className={module.social_icon}
            style={{ transitionDelay: "0.4s" }}
            onClick={() => setIsOpen(false)}
          >
           <svg viewBox="0 0 26 32" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white"><path d="m25.184 23.728-.05-.038s-3.109-2.08-4.487-3.011c-.53-.359-1.068-.541-1.596-.541-.732 0-1.18.355-1.228.396l-.059.057c-.003.003-.257.288-.83.772-.554.467-1.367.382-2.009-.218-.819-.765-5.364-6.396-6.787-8.314-.285-.385-.397-.734-.342-1.068.113-.687.929-1.253 1.368-1.557l.155-.108c.884-.633.978-1.733.692-2.488-.186-.491-2.025-4.44-2.247-4.881-.261-.522-.693-1.121-1.716-1.121-.584 0-2.107.226-3.086.927l-.219.152c-.886.612-2.536 1.752-2.536 4.142 0 3.034 2.256 7.543 6.898 13.785 4.963 6.673 10.872 9.783 13.303 9.783 2.229 0 4.385-2.739 5.079-4.066.67-1.278.095-2.26-.302-2.601z"/></svg>
          </a>
        </div>

        {/* Главная кнопка */}
        <button
          className={`${module.floating_button} ${isOpen ? module.floating_button_active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className={module.floating_button_close}>×</span>
          ) : (
            <span className={module.floating_button_text}>
              Связаться с нами
            </span>
          )}
        </button>
      </div>
    </>
  );
}