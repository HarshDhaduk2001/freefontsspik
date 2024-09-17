import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import heart from "../assets/heart.png";

const FontCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="border border-blueColor hover:bg-[#F5F5F5] hover:dark:bg-[#16181E] rounded-3xl w-full md:w-[1/2] lg:1/3 xl:1/4 px-4 py-2 text-[#333333] dark:text-whiteColor"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex items-start justify-between">
        <p className="text-[20px] md:text-[24px] w-[80%] font-semibold">
          The five boxing wizards jump quickly 1234567890
        </p>
        {isHovered && (
          <span className="flex items-center justify-center border border-grayColor rounded-full h-6 w-6">
            {/**<BiHeart />**/}
            <img src={heart} alt="" />
          </span>
        )}
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
