'use client';

import { useState, useMemo } from 'react';
import styles from './styles.module.scss';

// ---------- ДАННЫЕ УСЛУГ ----------
const clientTypes = [
  { id: 'individual', label: 'Физическое лицо' },
  { id: 'legal', label: 'Юридическое лицо / ИП' },
];

// Физлица – фиксированные цены без количества
const individualServices = [
  {
    id: 'ndfl_sale',
    label: 'Декларация 3-НДФЛ: Продажа имущества',
    price: 1500,
  },
  {
    id: 'social',
    label: 'Социальные вычеты (обучение, лечение)',
    price: 1500,
  },
  {
    id: 'property',
    label: 'Имущественный вычет (покупка квартиры)',
    price: 1500,
  },
  {
    id: 'consult',
    label: 'Консультация (подбор системы налогообложения)',
    price: 5000,
    isHourly: true,
  },
];

const legalOneTimeServices = [
  { id: 'reg_ooo_one', label: 'Регистрация ООО (1 учредитель/ИП)', price: 0 },
  { id: 'reg_ooo_multi', label: 'Регистрация ООО (несколько учредителей)', price: 6000 },
  { id: 'change_activity', label: 'Внесение изменений в ЕГРЮЛ (смена вида деятельности)', price: 1500 },
  { id: 'change_address', label: 'Внесение изменений (смена адреса)', price: 6000 },
  { id: 'other_changes', label: 'Иные изменения в учредительные документы', price: 3500 },
  { id: 'liquidation_simple', label: 'Упрощённая ликвидация ООО', price: 10000 },
  { id: 'liquidation_standard', label: 'Стандартная ликвидация ООО', price: 25000 },
  { id: 'open_account', label: 'Помощь в открытии расчётного счёта', price: 0 },
];

const legalPeriodicServices = [
  {
    id: 'zero_report',
    label: 'Нулевая отчётность',
    price: 2500,
    period: 'квартал',
    showFrom: false,
  },
  {
    id: 'usn_patent_ausn',
    label: 'Ведение бухучёта (УСН / Патент / АУСН)',
    price: 5000,
    period: 'месяц',
    showFrom: true,
  },
  {
    id: 'osno',
    label: 'Ведение бухучёта ОСНО (с НДС)',
    price: 10000,
    period: 'месяц',
    showFrom: true,
  },
  {
    id: 'salary_no_military',
    label: 'Расчёт зарплаты и кадровый учёт (без воинского)',
    pricePerPerson: 1000,
    period: 'месяц',
    showFrom: true,
  },
  {
    id: 'salary_military',
    label: 'Расчёт зарплаты и кадровый учёт (с воинским)',
    pricePerPerson: 1200,
    period: 'месяц',
    showFrom: true,
  },
];

export default function Calculate() {
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState(clientTypes[0].id);

  // Физлица – выбранные услуги (объект с ключами true/false)
  const [selectedIndServices, setSelectedIndServices] = useState({});

  // Юрлица
  const [selectedOneTime, setSelectedOneTime] = useState([]);
  const [selectedPeriodic, setSelectedPeriodic] = useState({});

  // Контактные данные
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const toggleIndService = (serviceId) => {
    setSelectedIndServices((prev) => {
      const newState = { ...prev };
      if (newState[serviceId]) {
        delete newState[serviceId];
      } else {
        newState[serviceId] = true;
      }
      return newState;
    });
  };

  const toggleOneTime = (serviceId) => {
    setSelectedOneTime((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const togglePeriodic = (serviceId) => {
    setSelectedPeriodic((prev) => {
      const newState = { ...prev };
      if (newState[serviceId]) {
        delete newState[serviceId];
      } else {
        newState[serviceId] = true;
      }
      return newState;
    });
  };

  const individualTotal = useMemo(() => {
    let total = 0;
    Object.keys(selectedIndServices).forEach((serviceId) => {
      const service = individualServices.find((s) => s.id === serviceId);
      if (service) total += service.price;
    });
    return total;
  }, [selectedIndServices]);

  const legalTotal = useMemo(() => {
    let total = 0;
    selectedOneTime.forEach((id) => {
      const service = legalOneTimeServices.find((s) => s.id === id);
      if (service) total += service.price;
    });
    Object.keys(selectedPeriodic).forEach((id) => {
      const service = legalPeriodicServices.find((s) => s.id === id);
      if (service) {
        if (id === 'salary_no_military' || id === 'salary_military') {
          total += service.pricePerPerson;
        } else {
          total += service.price;
        }
      }
    });
    return total;
  }, [selectedOneTime, selectedPeriodic]);

  const total = clientType === 'individual' ? individualTotal : legalTotal;

  // Форматирование телефона (маска)
  const formatPhone = (input) => {
    let value = input.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length === 0) return '';
    let formatted = '+7';
    if (value.length > 1) formatted += ' (' + value.slice(1, 4);
    if (value.length >= 4) formatted += ') ' + value.slice(4, 7);
    if (value.length >= 7) formatted += '-' + value.slice(7, 9);
    if (value.length >= 9) formatted += '-' + value.slice(9, 11);
    return formatted;
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  const validatePhone = (phoneValue) => {
    const digits = phoneValue.replace(/\D/g, '');
    return digits.length === 11 && digits[0] === '7';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatusMsg('⚠️ Пожалуйста, укажите имя');
      return;
    }
    if (!phone.trim()) {
      setStatusMsg('⚠️ Пожалуйста, укажите телефон');
      return;
    }
    if (!validatePhone(phone)) {
      setStatusMsg('⚠️ Введите полный номер телефона (11 цифр)');
      return;
    }

    const orderData = {
      clientType: clientTypes.find((c) => c.id === clientType)?.label,
      ...(clientType === 'individual'
        ? {
            services: Object.keys(selectedIndServices).map(
              (id) => individualServices.find((s) => s.id === id)?.label
            ),
          }
        : {
            oneTimeServices: selectedOneTime.map((id) => legalOneTimeServices.find((s) => s.id === id)?.label),
            periodicServices: Object.keys(selectedPeriodic).map(
              (id) => legalPeriodicServices.find((s) => s.id === id)?.label
            ),
          }),
      total,
      name,
      phone,
      comment,
    };

    setIsSending(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/accounting-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        setStatusMsg('✅ Заявка отправлена! Скоро с вами свяжутся.');
        // Сброс формы
        setName('');
        setPhone('');
        setComment('');
        setSelectedIndServices({});
        setSelectedOneTime([]);
        setSelectedPeriodic({});
        setStep(1);
      } else {
        throw new Error('Ошибка сервера');
      }
    } catch (error) {
      setStatusMsg('❌ Ошибка отправки. Позвоните нам.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.stepper}>
      <h2 className={styles.title}>Калькулятор стоимости услуг</h2>

      <div className={styles.stepIndicator}>
        <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1</div>
        <div className={`${styles.line} ${step >= 2 ? styles.active : ''}`} />
        <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2</div>
        <div className={`${styles.line} ${step >= 3 ? styles.active : ''}`} />
        <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3</div>
      </div>

      <div className={styles.content}>
        {step === 1 && (
          <div className={styles.stepContent}>
            <div className={styles.formGroup}>
              <label>Вы работаете как:</label>
              <div className={styles.radioGroup}>
                {clientTypes.map((ct) => (
                  <label key={ct.id} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="clientType"
                      value={ct.id}
                      checked={clientType === ct.id}
                      onChange={() => setClientType(ct.id)}
                    />
                    <span>{ct.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContent}>
            {clientType === 'individual' ? (
              <div className={styles.servicesList}>
                <p className={styles.sectionHint}>Выберите нужные услуги:</p>
                {individualServices.map((service) => (
                  <div
                    key={service.id}
                    className={`${styles.serviceCard} ${selectedIndServices[service.id] ? styles.active : ''}`}
                  >
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={!!selectedIndServices[service.id]}
                        onChange={() => toggleIndService(service.id)}
                      />
                      <span className={styles.customCheckbox}></span>
                      <span className={styles.serviceName}>{service.label}</span>
                      <span className={styles.price}>
                        {service.price} ₽{service.isHourly ? '/час' : ''}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.servicesList}>
                <div className={styles.serviceBlock}>
                  <h3>Разовые услуги (регистрация, изменения)</h3>
                  {legalOneTimeServices.map((s) => (
                    <div
                      key={s.id}
                      className={`${styles.serviceCard} ${selectedOneTime.includes(s.id) ? styles.active : ''}`}
                    >
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={selectedOneTime.includes(s.id)}
                          onChange={() => toggleOneTime(s.id)}
                        />
                        <span className={styles.customCheckbox}></span>
                        <span className={styles.serviceName}>{s.label}</span>
                        <span className={styles.price}>{s.price} ₽</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className={styles.serviceBlock}>
                  <h3>Периодические услуги (ежемесячно / ежеквартально)</h3>
                  {legalPeriodicServices.map((s) => {
                    let priceDisplay = '';
                    if (s.id === 'salary_no_military' || s.id === 'salary_military') {
                      priceDisplay = `от ${s.pricePerPerson} ₽/чел/мес`;
                    } else {
                      priceDisplay = `${s.showFrom ? 'от ' : ''}${s.price} ₽/${s.period}`;
                    }

                    return (
                      <div
                        key={s.id}
                        className={`${styles.serviceCard} ${selectedPeriodic[s.id] ? styles.active : ''}`}
                      >
                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            checked={!!selectedPeriodic[s.id]}
                            onChange={() => togglePeriodic(s.id)}
                          />
                          <span className={styles.customCheckbox}></span>
                          <span className={styles.serviceName}>{s.label}</span>
                          <span className={styles.price}>{priceDisplay}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContent}>
            <div className={styles.totalBox}>
              <span>Итого:</span>
              <span className={styles.totalValue}>{total} ₽</span>
              {clientType === 'legal' &&
                (selectedPeriodic['usn_patent_ausn'] ||
                  selectedPeriodic['osno'] ||
                  selectedPeriodic['zero_report'] ||
                  selectedPeriodic['salary_no_military'] ||
                  selectedPeriodic['salary_military']) && (
                  <span className={styles.perPeriod}>
                    / {selectedPeriodic['zero_report'] ? 'квартал' : 'месяц'}
                  </span>
                )}
            </div>

            <form onSubmit={handleSubmit} className={styles.orderForm}>
              <h3>Оформить заявку</h3>
              <input
                type="text"
                placeholder="Ваше имя *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
              <textarea
                placeholder="Комментарий (по желанию)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={2}
              />
              <button type="submit" disabled={isSending} className={styles.submitBtn}>
                {isSending ? 'Отправка...' : 'Отправить заявку'}
              </button>
              {statusMsg && <div className={styles.statusMsg}>{statusMsg}</div>}
            </form>
          </div>
        )}
      </div>

      <div className={styles.navigation}>
        {step > 1 && (
          <button type="button" onClick={prevStep} className={styles.navBtn}>
            ← Назад
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep} className={styles.navBtn}>
            Далее →
          </button>
        )}
      </div>
    </div>
  );
}