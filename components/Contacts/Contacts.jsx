import "./Contacts.scss";
function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="body-contacts">
          <div className="header-contacts">
            <h1 className="cormorant-garamond-bold">Контакты</h1>
          </div>
          <div className="right-body-contacts">
            <div className="right-body-contacts-content">
              <div>
                <h4>телефон</h4>
                <a href="tel:+7 (913) 304-52-33">
                  <p>
                    <span className="color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                      </svg>
                      +7 (913) 304-52-33
                    </span>
                  </p>
                </a>
              </div>
              <div>
                <h4>адрес</h4>
                <p>
                  <span className="color">
                    <svg
                      fill="currentColor"
                      width={16}
                      height={16}
                      viewBox="0 0 1920 1920"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                          fillRule="evenodd"
                        ></path>{" "}
                      </g>
                    </svg>
                    г. Кемерово, ул. Терешковой, 41
                  </span>
                </p>
              </div>
              <div>
                <h4>мессенджеры</h4>
                <div className="icons">
                  <a href="https://max.ru/u/f9LHodD0cOKf3w-EcnAMZGQEmLKfVuMxL2SsR6OO9GCeU9VMgJrzRx9J8Ow" className="icon">

                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                      width="23" height="23" viewBox="0 0 320.000000 320.000000"
                      preserveAspectRatio="xMidYMid meet">

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
              <div>
                <h4>почта</h4>
                <a href="mailto:55199986499@mail.ru">
                  <p>
                    <span className="color">
                      <svg
                        fill="currentColor"
                        width={16}
                        height={16}
                        viewBox="0 0 1920 1920"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                            fillRule="evenodd"
                          ></path>{" "}
                        </g>
                      </svg>
                      55199986499@mail.ru
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
