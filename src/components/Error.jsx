import React, { useContext } from "react";
import { ContextApi } from "../context/context";

export const Error = () => {
  const { state } = useContext(ContextApi);

  if (state.error) {
    return (
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center bg-red-300">
        <div className="h-[200px] p-4 bg-red-600 text-4xl text-white">
          {state.error}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
