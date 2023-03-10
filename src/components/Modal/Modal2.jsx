import React from "react";

export const Modal2 = ({ visible, setVisible, children }) => {
  if (visible) {
    return (
      <>
        <div
          className="fixed w-full h-full top-0 left-0 z-10 shadow-slate-100"
          onClick={() => setVisible(false)}></div>
        <div className="fixed w-2/3 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-white z-20 rounded-xl border-2 -pt-7">
          <button
            className="absolute right-3 top-3 rounded-xl bg-gray-200 w-7"
            onClick={() => setVisible(false)}>
            X
          </button>
          <div> {children}</div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
