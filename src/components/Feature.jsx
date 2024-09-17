import React from "react";
import img from "../assets/images/common";

const featureData = {
  card: [
    {
      title: "Design Inspiration",
      desc: "We provide inspiration by showcasing examples of how the fonts can be used in different contexts, such as logos, posters, or websites.",
    },
    {
      title: "Free Fonts",
      desc: "Get the latest free fonts without any cost or licensing restrictions.",
    },
    {
      title: "Licensing Option",
      desc: "We offer a range of licensing options for its fonts, including commercial and non-commercial use, desktop and so on.",
    },
  ],
  client: [
    { title: "192", text: "Free Fonts" },
    { title: "839", text: "Font Downloaded" },
    { title: "112", text: "Font Designers" },
  ],
};

const Feature = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#F5F5F5] dark:bg-[#16181E] overflow-hidden">
      <div className="flex items-center justify-between w-full ml-10 pl-4 pt-8 lg:pt-0">
        <div className="flex flex-col items-start justify-start w-full lg:w-1/2">
          <p className="text-blueColor text-[18px] lg:text-[24px] uppercase">
            Feature
          </p>
          <p className="text-[24px] lg:text-[42px]">What do we give to you?</p>
        </div>
        <img src={img.FeatureImage} alt="bg" className="pt-4 hidden lg:block" />
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center w-full mx-10 px-10 mt-8 gap-8 lg:gap-16">
        {featureData.card.map((i, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-1 w-full lg:w-1/3"
          >
            <div className="flex items-center justify-start gap-2">
              <img src={img.Bullet_Round_White} alt="icon" />
              <p className="text-[18px] lg:text-[24px] text-blueColor">
                {i.title}
              </p>
            </div>
            <p className="text-[14px] w-[75%]">{i.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mx-10 px-8 w-full mt-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-whiteColor dark:bg-[#0A0A0A] py-4 px-4 md:px-10 gap-4 lg:gap-0 rounded-lg w-[95%]">
          {featureData.client.map((i) => (
            <div className="flex flex-col md:flex-row items-center justify-center">
              <span className="text-[24px] lg:text-[56px] font-bold">
                {i.title}K+
              </span>
              <span className="hidden lg:block text-[16px] lg:text-[24px]">
                {i.text.split(" ")[0]}
                <br />
                {i.text.split(" ")[1]}
              </span>
              <span className="lg:hidden ml-2 text-[16px] lg:text-[24px]">
                {i.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
