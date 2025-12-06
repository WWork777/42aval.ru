import "./Steps.scss";

export default function Steps() {
  return (
    <>
      <div className="steps-home home-block">
        <h2>
          Бухгалтерский учет<br></br>доступный каждому
        </h2>
        <div className="steps-card-container">
          <div className="steps-card">
            <p className="steps-num">01</p>
            <div className="steps-card-body">
              <p className="steps-title">
                Связываетесь с нами в любое удобное время
              </p>
              <p className="steps-text">
                Напишите нам в любую удобную соц. сеть и мы разберёмся в вашей
                задаче и подберём оптимальное решение.
              </p>
            </div>
          </div>
          <div className="steps-card">
            <p className="steps-num">02</p>
            <div className="steps-card-body">
              <p className="steps-title">
                Анализируем вашу ситуацию и подписываем договор
              </p>
              <p className="steps-text">
                Проводим аудит текущего учета, выявляем ключевые моменты и
                фиксируем условия сотрудничества.
              </p>
            </div>
          </div>
          <div className="steps-card">
            <p className="steps-num">03</p>
            <div className="steps-card-body">
              <p className="steps-title">
                Ведём бухгалтерию и сдаем отчетность
              </p>
              <div className="steps-text">
                <p>
                  Берём на себя все расчеты, учет операций, налоговые платежи и
                  сдачу отчетности в строгом соответствии с законодательством.
                </p>
              </div>
            </div>
          </div>
          <div className="steps-card">
            <p className="steps-num">04</p>
            <div className="steps-card-body">
              <p className="steps-title">
                Вы работаете спокойно, а мы контролируем все цифры
              </p>
              <p className="steps-text">
                Вы занимаетесь бизнесом, а мы следим, чтобы ваши финансы были в
                порядке и вам не грозили штрафы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
