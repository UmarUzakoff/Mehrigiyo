import React, { useContext } from "react";
import { ContextApi } from "../context/context";
import "./spinner.css";

export const Loading = () => {
  const { state } = useContext(ContextApi);
  if (state.loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center">
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
