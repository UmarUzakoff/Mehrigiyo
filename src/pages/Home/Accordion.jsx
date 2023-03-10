import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import vector from "../Home/images/Vector.svg";
import leaves from "../Home/images/leaves.svg";

export default function Akordion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0 },
  };

  return (
    <section
      className="px-20 flex flex-row justify-between gap-72 container akkordion"
      style={{ backgroundImage: `url(${leaves})` }}>
      <div className="flex gap-10 flex-col">
        <div className="w-64 text-auth">
          <p className=" opacity-80">
            Qo'shimcha ma'lumot uchun biz bilan bog'laning
          </p>
        </div>
        <Link
          to={"/Mahsulotlar"}
          className=" bg-headerBg mahsulotlarButton w-40 h-12 cursor-pointer">
          Batafsil
          <img src={vector} alt="arrow" className=" inline-block ml-4" />
        </Link>
      </div>
      <div>
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="flex flex-row gap-28 pr-20 pb-7">
            <h5 className="accordion__h5">
              <span className="accordion__num">01</span>Какой состав сока
              Alatoo?<strong className=" hidden">dsbkjbjsja</strong>
            </h5>
          </AccordionHeader>
          <AccordionBody>
            Алатоо Mehrigiyo – натуральный сок из горького арбуза и папайи,
            очищает от шлаков, токсинов, выводит различных паразитов и их
            личинки, укрепляет иммунитет, омолаживает и дает энергию.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="flex flex-row pr-20 pb-7">
            <h5 className="accordion__h5">
              <span className="accordion__num">02</span>Сколько стоит Алатоо и
              сколько стоит доставка?
            </h5>
          </AccordionHeader>
          <AccordionBody>
            Сок "Алатоо" нормализует работу желудочно-кишечного тракта, улучшает
            функции печени, почек, головного мозга, очищает органы дыхания и
            сосуды, уменьшает риск развития простатита, природный безопасный
            слабительный препарат.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="flex flex-row gap-24 pr-20 pb-7">
            <h5 className="accordion__h5">
              <span className="accordion__num">03</span>Здравствуйте, аллергия
              часто на этот сок?
            </h5>
          </AccordionHeader>
          <AccordionBody>
            Ферменты, содержащиеся в бальзаме, обеспечивают нормальное
            расщепление белков, жиров и углеводов, даже при нехватке у организма
            собственных пищеварительных ферментов, улучшает пищеварение и
            функциональную деятельность желудочно-кишечного тракта,
            предотвращает запоры без необходимости проведения клизмы.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="flex flex-row pr-20 pb-7">
            <h5 className="accordion__h5">
              <span className="accordion__num">04</span>Эффективен ли сок Алатоо
              при герпесе?
            </h5>
          </AccordionHeader>
          <AccordionBody>
            Регенеративные свойства бальзама улучшают состояние кожи, оказывают
            положительное действие при кожных заболеваниях, таких как псориаз,
            витилиго и другие.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} animate={customAnimation}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="flex flex-row pr-20 pb-7">
            <h5 className="accordion__h5">
              <span className="accordion__num">05</span>Mожно принимать при
              полипе в жёлчном пузыре?
            </h5>
          </AccordionHeader>
          <AccordionBody>
            Этот препарат состоит из многокомпонентного оригинального вещества,
            обладает противоглистным, противовоспалительным, желчегонным,
            слабительным, спазмолитическим действием и тормозит свободные
            радикалы.
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
}
