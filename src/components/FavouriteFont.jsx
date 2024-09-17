import React, { useEffect, useState } from "react";

const data = [
  { font: "font-sans", title: "NF", desc: "New Fonts" },
  { font: "font-serif", title: "A1", desc: "Display" },
  { font: "font-display", title: "Aa", desc: "Script" },
  { font: "font-monospace", title: "Aa", desc: "Fancy" },
  { font: "font-fangsong", title: "Fa", desc: "Basic" },
  { font: "font-display", title: "Aa", desc: "Language Fonts" },
  { font: "font-Georgia", title: "Aa", desc: "Other" },
];

const FavouriteFont = () => {
  const [active, setActive] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:mx-10 dark:text-white mb-10 mx-10">
      <p className="text-blueColor text-[20px] lg:text-[24px]">CATEGORIES</p>
      <div className="relative w-full flex items-center justify-center mt-4 lg:mt-8">
        <div className="absolute bg-white dark:bg-blackColor dark:text-white px-2 -top-4 lg:-top-9 text-[20px] md:text-[26px] lg:text-[42px] text-center">
          Browse Your Favorite
        </div>
        <div className="border border-blueColor rounded-2xl w-full">
          <div className="flex items-center justify-between px-2 md:px-6 lg:px-12 w-full bg-white rounded-2xl dark:bg-darkCharcol text-black pt-4 md:pt-8 pb-7 md:pb-12">
            {data.map((i, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center relative w-[1/7]"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActive(index)}
              >
                <h1
                  className={`text-xl md:text-4xl lg:text-7xl`}
                >
                  {i.title}
                </h1>
                <p className="text-center text-[8px] md:text-[18px] lg:text-[24px]">
                  {i.desc}
                </p>

                {((isMobile && active === index) || hoverIndex === index) && (
                  <div
                    className={`absolute flex items-center justify-center gap-1 md:gap-2 lg:gap-4 text-[8px] md:text-[14px] lg:text-[16px] whitespace-nowrap -bottom-6 md:-bottom-9 border border-blueColor bg-[#F5F5F5] px-2 md:px-4 py-1 ${
                      (isMobile && index === data.length - 3) ||
                      index === data.length - 2 ||
                      index === data.length - 1
                        ? "right-2 md:right-5 rounded-full rounded-tr-none"
                        : "left-2 md:left-5 rounded-full rounded-tl-none"
                    }`}
                  >
                    <p>Sans Serif</p>
                    <p>Serif</p>
                    <p>Slab</p>
                    <p>Monospace</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteFont;
