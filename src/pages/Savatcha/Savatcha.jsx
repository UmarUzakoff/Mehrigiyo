import React, { useState, useContext, memo } from "react";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../../context/localizationContext";
import LikeBg from "../SevimliDorilar/images/LikeBg.png";
import box from "../SevimliDorilar/images/box.svg";
import call from "../SevimliDorilar/images/call.svg";
import sms from "../SevimliDorilar/images/sms.svg";
import "../SevimliDorilar/index.css";

const Savatcha = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <section
      style={{ backgroundImage: `url(${LikeBg})` }}
      className="SavatchaBox container relative">
      <div className="container pt-10">
        <Link to={"/"} className="ml-24 text-headerText">
          {language == "uz"
            ? "Bosh sahifa"
            : language == "ru"
            ? "Главное"
            : "Home"}{" "}
        </Link>
        /
        <Link to={"/Mahsulotlar"} className="text-auth opacity-90">
          {" "}
          {language == "uz"
            ? "Savatcha"
            : language == "ru"
            ? "Корзина"
            : "Shopping cart"}
        </Link>
        <h1 className="mt-0 ml-24 pt-5 mb-0 pb-0">
          {language == "uz"
            ? "Savatcha"
            : language == "ru"
            ? "Корзина"
            : "Shopping cart"}
        </h1>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center h-3/5 pt-40">
        <img src={box} alt="emptyBox" />
        <h5 className="savatcha__h5">Saqlangan dorilar bo’sh!</h5>
        <div className="w-1/4">
          <p className="savatcha__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </div>
      </div>
      <div className="flex flex-col w-32 justify-end items-center callSms">
        <img src={call} alt="call" />
        <img src={sms} alt="sms" />
      </div>
    </section>
  );
};

export default Savatcha;
