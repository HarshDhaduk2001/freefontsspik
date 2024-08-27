import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col items-end justify-center transition-colors duration-200 mr-10">
      <input
        type="checkbox"
        id="checkbox"
        className="absolute opacity-0"
        checked={dark}
        onChange={() => darkModeHandler()}
      />
      <label
        htmlFor="checkbox"
        className="flex items-center justify-between w-12 h-6 bg-whiteColor dark:bg-blackColor border border-darkCharcol rounded-full p-1 cursor-pointer relative"
      >
        <FaSun className="text-yellow-400" />
        <FaMoon className="text-yellow-500" />
        <span
          className={`w-5 h-5 bg-blueColor rounded-full absolute transition-transform duration-200 ${
            dark ? "translate-x-5" : "translate-x-[-2px]"
          }`}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
