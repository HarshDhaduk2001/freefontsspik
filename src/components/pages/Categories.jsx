import React from "react";
import Feature from "../Feature";

const Categories = () => {
  return (
    <>
      <div className="mx-10">
        <div className="flex flex-col items-center justify-center mx-4 lg:mx-10 dark:text-white">
          <p className="text-blueColor text-[20px] lg:text-[24px]">
            CATEGORIES
          </p>
          <div className="relative w-full flex items-center justify-center mt-4">
            <div className="absolute bg-white dark:bg-blackColor dark:text-white px-2 -top-4 lg:-top-9 text-[26px] lg:text-[42px] text-center">
              Browse Your Favorite
            </div>
            <div className="border border-blueColor rounded-2xl w-full">
              <div className="flex flex-col items-center justify-center bg-[#F5F5F5] rounded-2xl dark:bg-darkCharcol">
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default Categories;
