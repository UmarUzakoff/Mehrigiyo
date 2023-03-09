import React, { useState, useContext, memo } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../../../../context/localizationContext";

const Mahsulotlar = () => {
  const { setLanguage, language } = useContext(LocalizationApi);

  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.type))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.type === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
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
            ? "Mahsulotlar"
            : language == "ru"
            ? "Продукты"
            : "Products"}
        </Link>
        <h1 className="mt-0 ml-24 pt-5 mb-0 pb-0">
          {language == "uz"
            ? "Mahsulotlar"
            : language == "ru"
            ? "Продукты"
            : "Products"}
        </h1>
        <div className="flex flex-row justify-between mt-4">
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default memo(Mahsulotlar);
