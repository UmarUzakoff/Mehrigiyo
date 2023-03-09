import { Modal } from "../../Modal/Modal";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LocalizationApi } from "../../../context/localizationContext";
// import { ThemeApi } from '../../../context/themeContext'
import location from "./images/location.svg";
import modal from "./images/modal.svg";
import uniqueBg from "./images/uniqueBg.png";
import Favourite from "./images/Favourite.svg";
import appbar from "./images/appbar.svg";
import SignIn from "./SignIn";
import Heart from "react-heart";
// import { FaShoppingCart } from "react-icons/fa";

// import "react-phone-number-input/style.css";
// import flags from "react-phone-number-input/flags";
// import en from "react-phone-number-input/locale/en.json";
// import PhoneInput from "react-phone-number-input";

const Header = () => {
  // const { theme, toggleTheme } = useContext(ThemeApi)
  const { setLanguage, language } = useContext(LocalizationApi);
  const [createModal, setCreateModal] = useState(false);
  const [active, setActive] = useState(false);

  function onChange(e) {
    setLanguage(e.target.value);
  }

  function toggleCreateModal() {
    setCreateModal((prev) => !prev);
  }

  var signin = document.querySelector("#signin");
  var register = document.querySelector("#register");
  setTimeout(function () {
    register.checked = true;
  }, 1);
  setTimeout(function () {
    signin.checked = true;
  }, 1);

  // const [value, setValue] = useState();

  return (
    // <header className={`${theme == 'light' ? 'bg-headerBg' : 'bg-black text-white'} container px-20`}>
    <header
      className="container"
      style={{ backgroundImage: `url(${uniqueBg})` }}>
      <nav className="p-2 flex justify-between px-20 bg-headerBg">
        <ul className="flex gap-0">
          <li>
            <Link className="p-2 text-sm text-headerText" to={"/"}>
              {language == "uz"
                ? "Mahsulotlar katalogi"
                : language == "ru"
                ? "Каталог товаров"
                : "Product catalog"}
            </Link>
          </li>
          <li>
            <Link className="p-2 text-sm text-headerText">
              {language == "uz"
                ? "Foto-lavhalar"
                : language == "ru"
                ? "Фотографии"
                : "Photographs"}
            </Link>
          </li>
          <li>
            <Link className="p-2 text-sm text-headerText">
              {language == "uz"
                ? `Yetkazib berish va to'lash`
                : language == "ru"
                ? "Доставка и оплата"
                : "Delivery and payment"}
            </Link>
          </li>
          <li>
            <Link className="p-2 text-sm text-Aksiya">
              {language == "uz"
                ? "Aksiya"
                : language == "ru"
                ? "Акция"
                : "Sale"}
            </Link>
          </li>
          <li>
            <Link className="p-2 text-sm text-Yangi">
              {language == "uz" ? "Yangi" : language == "ru" ? "Новое" : "New"}
            </Link>
          </li>
          {/* <li className='rounded-full bg-white' onClick={toggleTheme}>
            {theme}
          </li> */}
        </ul>

        <div>
          <select onChange={onChange} id="gender">
            <option className="uz" value="uz" selected>
              O'zbekcha
            </option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
          <span className="px-3">|</span>
          <span className="inline-flex">
            {language == "uz"
              ? "Toshkent Shahar"
              : language == "ru"
              ? "город Ташкент"
              : "Tashkent city"}
            <img className="pl-2" src={location} />
          </span>
          <span className="px-3">|</span>
          {/* <Modal/> */}
          <button onClick={toggleCreateModal}>
            {language == "uz" ? "Kirish" : language == "ru" ? "Вход" : "Enter"}
            <img className="inline-flex pl-2" src={modal} alt="Enter" />
          </button>
          <Modal visible={createModal} setVisible={setCreateModal}>
            <SignIn />
          </Modal>
        </div>
      </nav>
      <div className="headfoot p-2 flex justify-between w-full px-20 bg-transparent">
        <div className="headfoot__left">
          <h1 className="headerLogo">LOGO</h1>
          <ul className="headfoot__ul">
            <li>
              <NavLink to={"/"}>
                {language == "uz"
                  ? "Bosh sahifa"
                  : language == "ru"
                  ? "Главное"
                  : "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Mahsulotlar"}>
                {language == "uz"
                  ? "Mahsulotlar"
                  : language == "ru"
                  ? "Продукты"
                  : "Products"}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="headfoot__right flex flex-row justify-center items-center">
          <Link to={"/SevimliDorilar"}>
            {/* <img className="cursor-pointer hover:fill-auth" src={Favourite} alt="img" /> */}
            <Heart
              isActive={active}
              onClick={() => setActive(!active)}
              animationScale={1.2}
              animationTrigger="both"
              animationDuration={0.2}
              activeColor="green"
              inactiveColor="white"
              className={`customHeart${active ? "activee" : ""} likee w-7 mb-2`}
            />
          </Link>
          <Link to={"/Savatcha"}>
            <img className="cursor-pointer" src={appbar} alt="img" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
