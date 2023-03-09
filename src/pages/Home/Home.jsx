import React, { useState, useContext, memo } from "react";
import { LocalizationApi } from "../../context/localizationContext";
import uniqueBg from "./images/uniqueBg.png";
import Doc from "./images/Doc.svg";
import avatar1 from "./images/avatar1.svg";
import cloak from "./images/hours.svg";
import MahsulotlarRoyxati from "../MahsulotlarRo'yxati";
import { Link } from "react-router-dom";
import Care from "./Care";
import Akordion from "./Accordion";
import Menu from "./Menu";
import Form from "./Form";
import Sponsors from "./Sponsors";

const Home = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  return (
    <section className="container">
      <div
        className="container px-20 bg-header pb-5 homeHead"
        style={{ backgroundImage: `url(${uniqueBg})` }}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mt-10">
            {language == "uz"
              ? "Bepul shifokor maslahat kerakmi?"
              : language == "ru"
              ? "Нужна бесплатная консультация врача?"
              : "Need a free doctor's consultation?"}
          </h1>
          <div className="">
            <p className="text-center">
              {language == "uz"
                ? "24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq "
                : language == "ru"
                ? "Круглосуточная видеоконсультация. Личная консультация + Аудиозвонок"
                : "24/7 video consultation. Personal consultation + Audio call"}
              <br />
              {language == "uz"
                ? "Faqat"
                : language == "ru"
                ? "Только"
                : "Only"}{" "}
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=uz.islom&hl=ru&gl=US"
                }
                target="_blank"
                rel="noreferrer"
                className=" text-auth border-b-2 border-green-600 cursor-pointer">
                {language == "uz"
                  ? "mobil ilovada"
                  : language == "ru"
                  ? "в мобильном приложении"
                  : "in the mobile app"}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="cart cart__left">
            <span className="cart__span">
              <img loading="lazy" decoding="async" src={avatar1} alt="avatar" />
              Consultant
            </span>
            <p className="cart__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
              ullamcorper in et amet.
            </p>
          </div>
          <img
            loading="lazy"
            decoding="async"
            className="mt-10"
            src={Doc}
            alt="img"
          />
          <div className="cart cart__right">
            <div>
              <span className="cart__span">
                <img src={cloak} alt="avatar" />
                24/7 xizmatlar
              </span>
              <p className="cart__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
                ullamcorper in et amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <MahsulotlarRoyxati />
      <Care />
      <h1 className="px-20">Ko’p so'raladigan savollar</h1>
      <Akordion />
      <Form />
      <Sponsors />
    </section>
  );
};

export default memo(Home);
