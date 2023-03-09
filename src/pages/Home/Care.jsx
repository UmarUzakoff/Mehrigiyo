import React from "react";
import care from "./images/care.svg";
import bg from "../../components/Layout/Footer/images/homeBg.png";

const Care = () => {
  return (
    <section className="container care ">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="care__h2">
            Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz
          </h2>
          <div className="ml-10 pt-20 mb-0 pb-0">
            <img src={bg} alt="img" />
          </div>
        </div>
        <img src={care} alt="img" />
      </div>
    </section>
  );
};

export default Care;
