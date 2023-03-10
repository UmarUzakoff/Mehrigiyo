import React from "react";
import Tozalash from "../../images/refresh.svg";
import Koproq from "./Koproq";

const Buttons = () => {
  const refresh = () => window.location.reload(true);
  return (
    <>
      <div className="flex flex-col text-center w-96 mt-12 ml-28 pr-32 leftCheckbox">
        <div className="flex justify-between items-center mb-3">
          <h4 className=" font-semibold">Kategoriyalar</h4>
          <button
            onClick={refresh}
            className=" text-headerText opacity-60 flex justify-center items-center gap-2 underline font-thin text-sm tozalash"
            style={{ backgroundImage: `url(${Tozalash})` }}>
            Tozalash
          </button>
        </div>
        <div class="flex items-center mb-4">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="checkbox w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-white focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Hammasi
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Choy
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Asal
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yog’
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Non
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Ziravorlar
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Sharbatlar
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Lolipoplar
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Tabletkalar
          </label>
        </div>
        <div class="flex items-center mt-4">
          <input
            id="checked-checkbox"
            type="checkbox"
            value="&#11167;    Ko'proq"
            class="bg-slate-500 w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-600 focus:bg-slate-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800"
          />
          <span className="text-auth ml-2 cursor-pointer">&#11167;Ko'proq</span>
          <label
            for="checked-checkbox"
            class="text-sm font-medium text-gray-900 dark:text-gray-300 relative"></label>
          <Koproq />
        </div>
      </div>
    </>
  );
};

export default Buttons;
