import React from "react";
import { BiHeart } from "react-icons/bi";
import heart from "../assets/heart.png"

const FontCard = () => {
  return (
    <div className="border border-blueColor rounded-3xl w-[290px] md:w-[305px] px-4 py-2 text-[#333333]">
      <div className="w-full flex items-start justify-between">
        <p className="text-[20px] md:text-[24px] w-[90%] font-semibold">
          The five boxing wizards jump quickly 1234567890
        </p>
        <span className="border border-grayColor rounded-full p-1">
          {/**<BiHeart />**/}
          <img src={heart} alt="" />
        </span>
      </div>
      <p className="text-[16px] font-semibold mt-4">Tanklager</p>
      <span className="block text-[8px]">by Ariel Martin Perez</span>
      <div className="flex items-center justify-between">
        <button className="border border-grayColor text-blueColor rounded-full text-sm py-1 px-2 md:px-4 mt-3 mb-2">
          INFO
        </button>
        <button className="border text-whiteColor bg-blueColor rounded-full text-sm py-1 px-2 md:px- mt-3 mb-2">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default FontCard;
