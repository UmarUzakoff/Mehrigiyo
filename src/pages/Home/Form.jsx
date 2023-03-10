import React, { useState } from "react";
import { Link } from "react-router-dom";
import form from "./images/form.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import send from "../Home/images/send.svg";
import Bubble from "../Home/images/Bubble2.png";
import "./Form.css";

const Form = () => {
  const [value, setValue] = useState();
  return (
    <section
      className="flex flex-row justify-center items-center mt-32 Bubble"
      style={{ backgroundImage: `url(${Bubble})` }}>
      <div className="mr-40">
        <img src={form} alt="img" loading="lazy" decoding="async" />
      </div>
      <form action="https://echo.htmlacademy.ru" className="form-1 mr-40">
        <span className="text-auth">Biz bilan bog'lanish</span>
        <h3 className="Form__h3">So'rovingizni yuboring</h3>
        <div className="form-1__labels">
          <input type="text" required={true} placeholder="Mahmud" />
        </div>
        <div className="form-1__labels">
          <input
            type="email"
            required={true}
            placeholder="nmahmud0928@gmail.com"
          />
        </div>
        <div className="form-1__labels">
          <p className="authText">Telefon raqam</p>
          <PhoneInput
            required={true}
            defaultCountry="UZ"
            value={value}
            onChange={setValue}
            placeholder="+998"
          />
        </div>
        <div className="form-1__labels">
          <input type="password" required={true} />
        </div>
        <Link className=" bg-headerBg mahsulotlarButton cursor-pointer">
          Xabar yuborish
          <img src={send} alt="arrow" className=" inline-block ml-4" />
        </Link>
      </form>
    </section>
  );
};

export default Form;
