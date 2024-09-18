import React from "react";

const FontDetailsCard = () => {
  return (
    <div className="border border-blueColor hover:bg-[#F5F5F5] hover:dark:bg-[#16181E] rounded-3xl w-full md:w-[1/2] lg:1/3 xl:1/4 px-4 py-2 text-[#333333] dark:text-whiteColor">
      <div className="w-full flex flex-col items-start justify-between gap-1 md:gap-3 my-2 md:my-4">
        <p className="text-[18px] md:text-[22px] font-bold">
          The Batteries Powered By Gravity
        </p>
        <p className="text-[10px] md:text-[14px]">
          Meta on Thursday announced a series of updates and new features for
          its Reels on Facebook and Instagram. While Instagram Reels' length has
          been extended to 90 seconds from 60 seconds, users can now also import
          their own audio directly. Instagram Reels will now also have the
          option of adding stickers, poll, quiz and emoji slider stickers.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold">Bebas Neue Regular +</p>
          <span className="block text-[8px]">Nunito Regular Solar Flare</span>
        </div>
        <button className="border text-whiteColor bg-blueColor rounded-full text-xs py-1 px-2 md:px- mt-3 mb-2">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default FontDetailsCard;
