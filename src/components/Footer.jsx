import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-5 lg:gap-0 lg:items-center bg-black text-white text-[18px] lg:text-[22px] w-full py-10 lg:py-20">
      <div className="flex flex-col items-start justify-center lg:w-2/5 px-4 lg:px-32 font-extralight">
        Fonts are the voice of written communication, and a font market platform
        is the stage where they can speak volumes.
        <p className="text-blue-500 mt-4">@2024 FreeFontsPik Inc.</p>
      </div>
      <div className="lg:w-1/5 px-4">
        <p className="text-blue-500 text-[26px] lg:text-[36px]">FreeFontsPik</p>
        <p className="text-[20px] lg:text-[30px]">
          <a href="/about">About</a>
        </p>
        <p className="text-[20px] lg:text-[30px]">
          <a href="/contactus">Contact us</a>
        </p>
        <p className="text-[20px] lg:text-[30px]">
          <a href="/privacypolicy">Privacy policy</a>
        </p>
      </div>
      <div className="lg:w-1/5 px-4">
        <p className="text-blue-500 text-[26px] lg:text-[36px]">Backyard</p>
        <p className="text-[20px] lg:text-[30px]">
          <a href="/howtoinstall">How to install</a>
        </p>
        <p className="text-[20px] lg:text-[30px]">
          <a href="/licenses">Licenses</a>
        </p>
        <p className="text-[20px] lg:text-[30px]">
          <a href="/faq">FAQ</a>
        </p>
      </div>
      <div className="lg:w-1/5 px-4">
        <p className="text-blue-500 text-[26px] lg:text-[36px]">Social</p>
        <p className="text-[20px] lg:text-[30px]">Instagram</p>
        <p className="text-[20px] lg:text-[30px]">Twitter</p>
        <p className="text-[20px] lg:text-[30px]">YouTube</p>
      </div>
    </div>
  );
};

export default Footer;
