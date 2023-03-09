import React from "react";
import icon1 from "./images/Icon1.svg";
import icon2 from "./images/Icon2.svg";
import icon3 from "./images/Icon3.svg";
import icon4 from "./images/Icon4.svg";

const Menu = () => {
  return (
    <>
      <hr className="hr container mt-96" />
      <div className="h-96 centerUl flex justify-center items-center">
        <ul className="flex flex-row justify-center items-center gap-10">
          <li className="flex flex-row gap-4">
            <img src={icon1} alt="img" />
            <div>
              <h5 className="centerUl__h5 mt-5">Yetkazib berish bepul</h5>
              <p className="centerUl__p">
                100 000 so'mdan ortiq
                <br /> buyurtma berganingizda
              </p>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <img src={icon2} alt="img" />
            <div>
              <h5 className="centerUl__h5 mt-2">Tez to'lov</h5>
              <p className="centerUl__p">100% xavfsiz to'lov</p>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <img src={icon3} alt="img" />
            <div>
              <h5 className="centerUl__h5 mt-2">Doimiy chegirmalar</h5>
              <p className="centerUl__p">Ular allaqachon ishlamoqda</p>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <img src={icon4} alt="img" />
            <div>
              <h5 className="centerUl__h5 mt-2">Onlayn yordam</h5>
              <p className="centerUl__p">Ish vaqti: 08:00 - 18:00</p>
            </div>
          </li>
        </ul>
      </div>
      <hr className="hr container mb-20" />
    </>
  );
};

export default Menu;