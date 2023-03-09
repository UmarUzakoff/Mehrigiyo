import React, { useState, useContext, memo } from "react";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../../context/localizationContext";
import LikeBg from "./images/LikeBg.png";
import box from "./images/box.svg";
import call from "./images/call.svg";
import sms from "./images/sms.svg";
import "./index.css";

const SevimliDorilar = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <section
      style={{ backgroundImage: `url(${LikeBg})` }}
      className="LikeBox container relative">
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
            ? "Saqlangan dorilar"
            : language == "ru"
            ? "Хранящиеся лекарства"
            : "Stored medicines"}
        </Link>
        <h1 className="mt-0 ml-24 pt-5 mb-0 pb-0">
          {language == "uz"
            ? "Sevimli dorilar"
            : language == "ru"
            ? "Любимые лекарства"
            : "Favorite medicines"}
        </h1>
      </div>
      <div className="flex justify-center items-center h-3/5 pt-60">
        <img src={box} alt="emptyBox" />
      </div>
      <div className="flex flex-col w-32 justify-end items-center callSms">
        <img src={call} alt="call" />
        <img src={sms} alt="sms" />
      </div>
    </section>
  );
};

export default SevimliDorilar;
