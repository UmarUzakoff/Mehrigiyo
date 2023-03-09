import React from "react";
import { Link } from "react-router-dom";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import telegram from "./images/telegram.png";
import youtube from "./images/youtube.png";
import bg from "./images/homeBg.png";

const Footer = () => {
  return (
    <footer>
      <section className="bg-footerBg container text-white px-20">
        <h1>LOGO</h1>
        <div className="footer-head">
          <div className="first-foot">
            <p className=" opacity-80">
              Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
            </p>
            <p className=" opacity-80">
              <strong>Ish vaqti: </strong>Har kuni 8:00 dan 18:00 gacha
            </p>
            <ul className="socialmedia">
              <Link
                to={"https://www.facebook.com/"}
                target="_blank"
                rel="noreferrer">
                <img src={facebook} className="socialMeedia" alt="social-media" />
              </Link>
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                rel="noreferrer">
                <img src={instagram} className="socialMeedia" alt="social-media" />
              </Link>
              <Link
                to={"https://www.telegram.com/"}
                target="_blank"
                rel="noreferrer">
                <img src={telegram} className="socialMeedia" alt="social-media" />
              </Link>
              <Link
                to={"https://www.youtube.com/"}
                target="_blank"
                rel="noreferrer">
                <img src={youtube} className="socialMeedia" alt="social-media" />
              </Link>
            </ul>
          </div>
          <div>
            <p>Huquqiy</p>
          </div>
          <div className="stores">
            <p>Ilovani yuklab olish</p>
            <div>
              <a
                href="https://www.apple.com/ru/app-store/"
                target="_blank"
                class="market-btn apple-btn"
                role="button">
                <span className="market-button-subtitle">Download on the</span>
                <span className="market-button-title">App Store</span>
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store/games?hl=ru&gl=US"
                target="_blank"
                class="market-btn google-btn"
                role="button">
                <span className="market-button-subtitle hover">
                  Download on the
                </span>
                <span className="market-button-title hover">Google Play</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <div className="greenfoot">
            <div>
              <span className="text-white opacity-60 text-sm">E-mail</span>
              <p className="text-lg">info@mehrigiyo.uz</p>
            </div>
            <div>
              <span className="text-white opacity-60 text-sm">
                Bizga qo'ng'iroq qiling
              </span>
              <p className="text-lg text-white">+99898 125 31 03</p>
            </div>
          </div>
          <div className="homeBlogBg">
            <img src={bg} alt="img" />
          </div>
        </div>
      </section>
      <div className="footerWhite container px-20">
        <div className="footerWhite__left">
          <p>
            © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan.
            <br />
            Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola
            qilish majburiy.
          </p>
        </div>
        <ul className="footerWhite__right">
          <li>Bosh sahifa</li>
          <li>Biz haqimizda</li>
          <li>Yangiliklar</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
