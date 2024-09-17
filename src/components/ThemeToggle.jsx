import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = (props) => {
  const [dark, setDark] = useState(
    false
    // window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handleChange = (e) => {
  //     setDark(e.matches);
  //     document.body.classList.toggle("dark", e.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleChange);

  //   document.body.classList.toggle("dark", mediaQuery.matches);

  //   return () => mediaQuery.removeEventListener("change", handleChange);
  // }, []);

  return (
    <div
      className={`${
        props.hideHeaderFooter ? "hidden" : "flex"
      } flex-col items-end justify-center transition-colors duration-200 mr-10 mb-4 lg:mb-5`}
    >
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
