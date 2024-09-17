import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FavouriteFont from "../FavouriteFont";
import img from "../../assets/images/common";

const HomeDetails = () => {
  const { id } = useParams();
  const [alignment, setAlignment] = useState("center");
  const [fontSize, setFontSize] = useState(20);
  const [inputText, setInputText] = useState(
    "The five boxing wizards jump quickly 1234567890"
  );

  const resetAll = () => {
    setAlignment("center");
    setFontSize(20);
    setInputText("The five boxing wizards jump quickly 1234567890");
  };

  return (
    <>
      <FavouriteFont />
      <div className="mx-10">
        <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol mb-10 rounded-lg">
          <div className="flex items-center justify-between w-full px-5">
            <button className="border border-grayColor text-darkCharcol rounded-full text-sm py-1 px-2 md:px-4 mt-3 mb-2">
              Add Collection
            </button>
            <button className="border text-whiteColor bg-blueColor rounded-full text-sm py-1 px-2 md:px- mt-3 mb-2">
              DOWNLOAD
            </button>
          </div>
          <h1 className="text-[96px] text-blueColor">Protest Strike</h1>
          <p className="text-[28px]">by Ariel Martin Perez</p>
          <div className="flex items-center justify-center gap-4 my-10">
            <div className="flex flex-col items-center justify-center">
              <p className="text-blueColor text-[18px]">Licence</p>
              <p className="text-[32px]">2 Style</p>
            </div>
            <p className="h-20 w-[2px] bg-darkCharcol"></p>
            <div className="flex flex-col items-center justify-center">
              <p className="text-blueColor text-[18px]">Licence</p>
              <p className="text-[32px]">Personal Use Licence</p>
            </div>
            <p className="h-20 w-[2px] bg-darkCharcol"></p>
            <div className="flex flex-col items-center justify-center">
              <p className="text-blueColor text-[18px]">Category</p>
              <p className="text-[32px]">Sans Serif</p>
            </div>
          </div>
          <img
            src={img.DetailsImage}
            alt=""
            className=" w-[80%] md:w-[70%] lg:w-[60%] rounded-lg"
          />
          <div
            className="flex items-center justify-center w-[80%] md:w-[70%] lg:w-[60%] my-4 border border-blueColor rounded-lg"
            style={{ textAlign: alignment }} // Apply alignment style
          >
            <p
              className={`py-4 px-[10%] text-blueColor`}
              style={{
                fontSize: `${fontSize}px`,
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {inputText}
            </p>
          </div>
          <div className="flex items-center justify-between p-4 w-[80%] md:w-[70%] lg:w-[60%] mb-4 border border-blueColor rounded-lg">
            <input
              type="text"
              className={`border border-[#736767] !bg-transparent placeholder:text-[#A3A1A7] text-[#A3A1A7] dark:text-whiteColor rounded-lg w-[50%] py-2 px-4 outline-none`}
              placeholder="Type Something...."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between w-[80%] md:w-[70%] lg:w-[60%] mb-4">
            <button
              className="border border-gray-500 px-4 py-2 rounded-lg"
              onClick={() => setAlignment("left")}
            >
              Left
            </button>
            <button
              className="border border-gray-500 px-4 py-2 rounded-lg"
              onClick={() => setAlignment("center")}
            >
              Center
            </button>
            <button
              className="border border-gray-500 px-4 py-2 rounded-lg"
              onClick={() => setAlignment("right")}
            >
              Right
            </button>
          </div>
          <div className="flex items-center justify-between w-[10%] mb-4">
            <input
              type="range"
              min="10"
              max="100"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full h-[2px]"
            />
          </div>
          <button
            className="border border-red-500 bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={resetAll}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeDetails;
