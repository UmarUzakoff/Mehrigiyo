import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCount,
  selectPrice1,
} from "./counterSlice";
import "./redux.css";

export function Price1() {
  const count = useSelector(selectCount);
  const price1 = useSelector(selectPrice1);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-96 justify-between items-center">
      <div className="mt-10">
        <button
          className="mr-6 text-xl text-headerText"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className="ReduxCount font-extrabold">{count}</span>
        <button
          className="ml-6 text-xl text-auth"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className=" mt-10">
        <p className="itemPrice">
          {price1}
          {" uzs"}
        </p>
      </div>
    </div>
  );
}
