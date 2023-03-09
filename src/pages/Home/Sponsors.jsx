import React from "react";
import sponsor1 from "./images/sponsor1.svg";
import sponsor2 from "./images/sponsor2.svg";
import sponsor3 from "./images/sponsor3.svg";
import sponsor4 from "./images/sponsor4.svg";
import sponsor5 from "./images/sponsor5.svg";
import sponsor6 from "./images/sponsor6.svg";

const Sponsors = () => {
  return (
    <>
      <hr className="hr container" />
      <div className="centerUl flex justify-center items-center">
        <ul className="flex flex-row justify-center items-center gap-20">
          <li className="flex flex-row gap-4">
            <img src={sponsor1} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor2} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor3} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor4} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor5} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor6} alt="img" />
          </li>
        </ul>
      </div>
      <hr className="hr container mb-40" />
    </>
  );
};

export default Sponsors;