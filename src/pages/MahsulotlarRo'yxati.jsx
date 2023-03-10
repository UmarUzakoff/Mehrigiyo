import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import ROHATYogi from "./Home/images/ROHATYogi.svg";
import Sirop from "./Home/images/Sirop.svg";
import Banana from "./Home/images/Banana.svg";
import RohatYogi2 from "./Home/images/RohatYogi2.svg";
import plus from "./Home/images/plus.svg";
import vector from "./Home/images/Vector.svg";
import stars from "./Home/images/stars.svg";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import { Link } from "react-router-dom";
import { Modal2 } from "../components/Modal/Modal2";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Price1 } from "./REDUX/Price1";
import { Price2 } from "./REDUX/Price2";
import SwiperCore from "swiper/core";
SwiperCore.use([Scrollbar]);

const data = [
  {
    id: 1,
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    sale: "17,190, uzs",
    price: 16000,
    description:
      "Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi",
    image: ROHATYogi,
    favorite: false,
    visited: false,
  },
  {
    id: 2,
    name: "Rohat Sirop",
    type: "Erkaklar kuchi",
    sale: "200,190, uzs",
    price: 150000,
    description:
      "Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi",
    image: Sirop,
    favorite: false,
    visited: false,
  },
  {
    id: 3,
    name: "Organic Bananas",
    type: "7pcs, Price",
    sale: "17,190, uzs",
    price: 16000,
    description:
      "Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi",
    image: Banana,
    favorite: false,
    visited: false,
  },
  {
    id: 4,
    name: "ROHAT Yog`i №2",
    type: "Mavjud",
    sale: "17,190, uzs",
    price: 16000,
    description:
      "Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi",
    image: RohatYogi2,
    favorite: false,
    visited: false,
  },
  {
    id: 5,
    name: "Rohat Sirop",
    type: "Erkaklar kuchi",
    sale: "200,190, uzs",
    price: 150000,
    description:
      "Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi",
    image: Banana,
    favorite: false,
    visited: false,
  },
];

function MahsulotlarRoyxati() {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = useCallback((id) => {
    data.map((item) => {
      if (item.id === id) {
        return setFavorites([...favorites, item]);
      } else {
        return favorites;
      }
    });
  });

  const handleFavorite2 = useCallback((id) => {
    data.map((item) => {
      if (item.id === id) {
        return setFavorites([item]);
      } else {
        return favorites;
      }
    });
  });

  const [createModal, setCreateModal] = useState(false);

  function toggleCreateModal() {
    setCreateModal((prev) => !prev);
  }

  const onClick = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0 },
  };

  return (
    <div className="container px-10">
      <div></div>
      <h1 className="w-10">Mahsulotlarimiz ro'yxati</h1>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper container mb-12 relative">
        <SwiperSlide className="flex flex-row  justify-center gap-7 mb-10 pt-14">
          {data.map((item, i) => (
            <li key={i} className="doriWrap">
              <div className="flex flex-row gap-3 items-start">
                <img src={item.image} alt="img" />
                <button
                  className="mr-5 mt-5"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  <svg
                    class="h-8 w-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    {" "}
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="ml-6">
                <p className="itemName">{item.name} </p>
                <span className="itemType">{item.type} </span>
              </div>
              <div className="flex flex-row items-center gap-16">
                <div className="ml-6 mt-7">
                  <span className="itemSale">{item.sale} </span>
                  <p className="itemPrice">
                    {item.price}
                    {" uzs"}
                  </p>
                </div>
                <button
                  style={{
                    backgroundImage: `url(${plus})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="button text-md w-10 h-10 text-center"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  {item.favorite === true ? " " : " "}
                </button>
              </div>
              <Button
                onClick={() => {
                  handleFavorite2(item.id);
                  toggleCreateModal();
                }}
                variant="gradient"
                className="detailsLink">
                tafsilotlar&#8250;
              </Button>
              <Modal2 visible={createModal} setVisible={setCreateModal}>
                <ul className="flex gap-7 containerrr">
                  {favorites.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-row justify-between items-center gap-10">
                      <section className="ExampleComponent">
                        <div className="main-wrap">
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={8}
                            initialSlide={1}
                            centeredSlides={true}
                            scrollbar={{ draggable: true, dragSize: 24 }}>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </section>
                      <div>
                        <h3 className=" font-extrabold text-2xl">
                          {item.name}
                        </h3>
                        <img src={stars} alt="stars" />
                        <div className="flex flex-row gap-80 items-center">
                          {item.price === 16000 ? <Price1 /> : <Price2 />}
                        </div>
                        <hr className="mt-5" />
                        <Accordion open={open === 1} animate={customAnimation}>
                          <AccordionHeader
                            className="pr-20"
                            onClick={() => handleOpen(1)}>
                            <h5 className="accordion__h52 flex justify-around">
                              Mahsulot haqida
                            </h5>
                          </AccordionHeader>
                          <AccordionBody>{item.description}</AccordionBody>
                        </Accordion>
                        <hr />
                        <div className="flex flex-row justify-between items-center mt-5">
                          <h5 className="accordion__h52">Og’irligi</h5>
                          <div className="mr-10">
                            <span className="gr100">100 gr</span>
                            <span className="ml-6 plus">&#8250;</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Modal2>
            </li>
          ))}
        </SwiperSlide>
        <SwiperSlide className="flex flex-row  justify-center gap-7 mb-10 pt-14">
          {data.map((item, i) => (
            <li key={i} className="doriWrap">
              <div className="flex flex-row gap-3 items-start">
                <img src={item.image} alt="img" />
                <button
                  className="mr-5 mt-5"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  <svg
                    class="h-8 w-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    {" "}
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="ml-6">
                <p className="itemName">{item.name} </p>
                <span className="itemType">{item.type} </span>
              </div>
              <div className="flex flex-row items-center gap-16">
                <div className="ml-6 mt-7">
                  <span className="itemSale">{item.sale} </span>
                  <p className="itemPrice">
                    {item.price}
                    {" uzs"}
                  </p>
                </div>
                <button
                  style={{
                    backgroundImage: `url(${plus})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="button text-md w-10 h-10 text-center"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  {item.favorite === true ? " " : " "}
                </button>
              </div>
              <Button
                onClick={() => {
                  handleFavorite2(item.id);
                  toggleCreateModal();
                }}
                variant="gradient"
                className="detailsLink">
                tafsilotlar&#8250;
              </Button>
              <Modal2 visible={createModal} setVisible={setCreateModal}>
                <ul className="flex gap-7 containerrr">
                  {favorites.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-row justify-between gap-10">
                      <section className="ExampleComponent">
                        <div className="main-wrap">
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={8}
                            initialSlide={1}
                            centeredSlides={true}
                            scrollbar={{ draggable: true, dragSize: 24 }}>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </section>
                      <div>
                        <h3 className=" font-extrabold text-2xl">
                          {item.name}
                        </h3>
                        <img src={stars} alt="stars" />
                        <div className="flex flex-row gap-80 items-center">
                          {item.price === 16000 ? <Price1 /> : <Price2 />}
                        </div>
                        <hr className="mt-5" />
                        <Accordion open={open === 1} animate={customAnimation}>
                          <AccordionHeader
                            className="pr-20"
                            onClick={() => handleOpen(1)}>
                            <h5 className="accordion__h52 flex justify-around">
                              Mahsulot haqida
                            </h5>
                          </AccordionHeader>
                          <AccordionBody>{item.description}</AccordionBody>
                        </Accordion>
                        <hr />
                        <div className="flex flex-row justify-between items-center mt-5">
                          <h5 className="accordion__h52">Og’irligi</h5>
                          <div className="mr-10">
                            <span className="gr100">100 gr</span>
                            <span className="ml-6 plus">&#8250;</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Modal2>
            </li>
          ))}
        </SwiperSlide>
        <SwiperSlide className="flex flex-row  justify-center gap-7 mb-10 pt-14">
          {data.map((item, i) => (
            <li key={i} className="doriWrap">
              <div className="flex flex-row gap-3 items-start">
                <img src={item.image} alt="img" />
                <button
                  className="mr-5 mt-5"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  <svg
                    class="h-8 w-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    {" "}
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="ml-6">
                <p className="itemName">{item.name} </p>
                <span className="itemType">{item.type} </span>
              </div>
              <div className="flex flex-row items-center gap-16">
                <div className="ml-6 mt-7">
                  <span className="itemSale">{item.sale} </span>
                  <p className="itemPrice">
                    {item.price}
                    {" uzs"}
                  </p>
                </div>
                <button
                  style={{
                    backgroundImage: `url(${plus})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="button text-md w-10 h-10 text-center"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  {item.favorite === true ? " " : " "}
                </button>
              </div>
              <Button
                onClick={() => {
                  handleFavorite2(item.id);
                  toggleCreateModal();
                }}
                variant="gradient"
                className="detailsLink">
                tafsilotlar&#8250;
              </Button>
              <Modal2 visible={createModal} setVisible={setCreateModal}>
                <ul className="flex gap-7 containerrr">
                  {favorites.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-row justify-between gap-10">
                      <section className="ExampleComponent">
                        <div className="main-wrap">
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={8}
                            initialSlide={1}
                            centeredSlides={true}
                            scrollbar={{ draggable: true, dragSize: 24 }}>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </section>
                      <div>
                        <h3 className=" font-extrabold text-2xl">
                          {item.name}
                        </h3>
                        <img src={stars} alt="stars" />
                        <div className="flex flex-row gap-80 items-center">
                          {item.price === 16000 ? <Price1 /> : <Price2 />}
                        </div>
                        <hr className="mt-5" />
                        <Accordion open={open === 1} animate={customAnimation}>
                          <AccordionHeader
                            className="pr-20"
                            onClick={() => handleOpen(1)}>
                            <h5 className="accordion__h52 flex justify-around">
                              Mahsulot haqida
                            </h5>
                          </AccordionHeader>
                          <AccordionBody>{item.description}</AccordionBody>
                        </Accordion>
                        <hr />
                        <div className="flex flex-row justify-between items-center mt-5">
                          <h5 className="accordion__h52">Og’irligi</h5>
                          <div className="mr-10">
                            <span className="gr100">100 gr</span>
                            <span className="ml-6 plus">&#8250;</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Modal2>
            </li>
          ))}
        </SwiperSlide>
        <SwiperSlide className="flex flex-row  justify-center gap-7 mb-10 pt-14">
          {data.map((item, i) => (
            <li key={i} className="doriWrap">
              <div className="flex flex-row gap-3 items-start">
                <img src={item.image} alt="img" />
                <button
                  className="mr-5 mt-5"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  <svg
                    class="h-8 w-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    {" "}
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className="ml-6">
                <p className="itemName">{item.name} </p>
                <span className="itemType">{item.type} </span>
              </div>
              <div className="flex flex-row items-center gap-16">
                <div className="ml-6 mt-7">
                  <span className="itemSale">{item.sale} </span>
                  <p className="itemPrice">
                    {item.price}
                    {" uzs"}
                  </p>
                </div>
                <button
                  style={{
                    backgroundImage: `url(${plus})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="button text-md w-10 h-10 text-center"
                  onClick={() => {
                    handleFavorite(item.id);
                    onClick();
                  }}>
                  {item.favorite === true ? " " : " "}
                </button>
              </div>
              <Button
                onClick={() => {
                  handleFavorite2(item.id);
                  toggleCreateModal();
                }}
                variant="gradient"
                className="detailsLink">
                tafsilotlar&#8250;
              </Button>
              <Modal2 visible={createModal} setVisible={setCreateModal}>
                <ul className="flex gap-7 containerrr">
                  {favorites.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-row justify-between gap-10">
                      <section className="ExampleComponent">
                        <div className="main-wrap">
                          <Swiper
                            slidesPerView={3}
                            spaceBetween={8}
                            initialSlide={1}
                            centeredSlides={true}
                            scrollbar={{ draggable: true, dragSize: 24 }}>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div
                                className="main-slide-item"
                                style={{
                                  background: "url(images/example.png)",
                                }}>
                                <img
                                  src={item.image}
                                  alt="img"
                                  className="tafsilotImg"
                                />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </section>
                      <div>
                        <h3 className=" font-extrabold text-2xl">
                          {item.name}
                        </h3>
                        <img src={stars} alt="stars" />
                        <div className="flex flex-row gap-80 items-center">
                          {item.price === 16000 ? <Price1 /> : <Price2 />}
                        </div>
                        <hr className="mt-5" />
                        <Accordion open={open === 1} animate={customAnimation}>
                          <AccordionHeader
                            className="pr-20"
                            onClick={() => handleOpen(1)}>
                            <h5 className="accordion__h52 flex justify-around">
                              Mahsulot haqida
                            </h5>
                          </AccordionHeader>
                          <AccordionBody>{item.description}</AccordionBody>
                        </Accordion>
                        <hr />
                        <div className="flex flex-row justify-between items-center mt-5">
                          <h5 className="accordion__h52">Og’irligi</h5>
                          <div className="mr-10">
                            <span className="gr100">100 gr</span>
                            <span className="ml-6 plus">&#8250;</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Modal2>
            </li>
          ))}
        </SwiperSlide>
      </Swiper>
      <Link
        to={"/Mahsulotlar"}
        className=" bg-headerBg mahsulotlarButton ml-16 cursor-pointer">
        Barcha mahsulotlarni ko’rish
        <img src={vector} alt="arrow" className=" inline-block ml-4" />
      </Link>
    </div>
  );
}

export default MahsulotlarRoyxati;
