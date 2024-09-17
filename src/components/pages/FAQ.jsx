import React, { useEffect, useRef, useState } from "react";
import Feature from "../Feature";

const faqData = [
  {
    question: "How to use a new font with a software?",
    answer:
      "Your correspondent can only view the fonts installed on their computer. Better avoid sending an email or an instant message with a non-standard font; or make sure your correspondent has installed it too, otherwise they will see a default font.",
  },
  {
    question: "How to use a font for a web site?",
    answer:
      "To install a font, simply download the font file, then double-click it and choose 'Install'. The font will be available in your software immediately.",
  },
  {
    question: "Why the fonts don't show up in e-mails / instant messengers?",
    answer:
      "Your correspondent can only view the fonts installed on their computer. Better avoid sending an email or an instant message with a non-standard font; or make sure your correspondent has installed it too, otherwise they will see a default font.",
  },
  {
    question: "How many fonts can be installed?",
    answer:
      "To install a font, simply download the font file, then double-click it and choose 'Install'. The font will be available in your software immediately.",
  },
  {
    question: "Why aren't stressed characters or numbers included?",
    answer:
      "Your correspondent can only view the fonts installed on their computer. Better avoid sending an email or an instant message with a non-standard font; or make sure your correspondent has installed it too, otherwise they will see a default font.",
  },
  {
    question: "Nothing is working!",
    answer:
      "To install a font, simply download the font file, then double-click it and choose 'Install'. The font will be available in your software immediately.",
  },
  {
    question: "How to create my own font?",
    answer:
      "Your correspondent can only view the fonts installed on their computer. Better avoid sending an email or an instant message with a non-standard font; or make sure your correspondent has installed it too, otherwise they will see a default font.",
  },
  {
    question: "I've submitted my font, how long will it take to be published?",
    answer:
      "To install a font, simply download the font file, then double-click it and choose 'Install'. The font will be available in your software immediately.",
  },
  {
    question: "Are all the fonts free of charge?",
    answer:
      "To install a font, simply download the font file, then double-click it and choose 'Install'. The font will be available in your software immediately.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height =
          openIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4 lg:mx-10 dark:text-white">
        <p className="text-blueColor text-[20px] lg:text-[24px]">FAQ</p>
        <div className="relative w-full flex items-center justify-center mt-8">
          <div className="absolute bg-white dark:bg-blackColor dark:text-white px-2 -top-4 lg:-top-9 text-[26px] lg:text-[42px] text-center">
            Questions?
          </div>
          <div className="border border-blueColor w-full">
            <div className="flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-darkCharcol m-4 mt-8 lg:m-8 rounded-lg py-10">
              <div className="flex flex-col items-center justify-center w-full lg:w-[50%]">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`w-full py-4 px-6 ${
                      faqData.length !== index + 1
                        ? "border-b border-grayColor"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex items-start cursor-pointer ${
                        openIndex === index ? "text-blueColor" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <span className="text-blueColor mr-2 lg:mr-4 text-[22px] lg:text-[32px] -mt-1 lg:-mt-3">
                        {openIndex === index ? "-" : "+"}
                      </span>
                      <p className="text-[16px] lg:text-[20px] flex-grow">
                        {faq.question}
                      </p>
                    </div>
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ height: "0px" }}
                    >
                      <p className="text-[14px] mt-2 pl-[16px] lg:pl-[30px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center text-center mt-4 text-blueColor text-[18px] lg:text-[36px]">
                Your question isn't answered here? <br /> Ask on the forum
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default FAQ;
