import React, { useState } from "react";
import Feature from "../Feature";
import img1 from "../../assets/Rectangle 68.png";
import img2 from "../../assets/Rectangle 62.png";
import WorldMap from "../../assets/WorldMap.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please provide a valid Email Address.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }
    if (formData.contactNumber && !/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be digits only.";
    }
    if (formData.contactNumber.length > 10) {
      newErrors.contactNumber = "Contact number must be up to 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-4 lg:mx-10 dark:text-white">
        <p className="font-semibold text-[24px] lg:text-[64px] uppercase text-center">
          We’re here to <br />
          <span className="text-blueColor">guarantee your success</span>
        </p>

        {/* Image Section */}
        <div className="relative mt-8">
          <div className="relative flex justify-center">
            <img src={img1} alt="" />
            <img
              src={img2}
              alt=""
              className="absolute top-20 lg:top-56 left-1/2 transform -translate-x-1/2"
            />
          </div>
          <p className="font-normal text-start text-whiteColor absolute top-2 lg:top-10 left-0 right-0 text-[11px] lg:text-[32px] px-5 lg:px-16">
            ConsultUs provides consulting services that help business owners and
            leaders build a more valuable business. We worked with their founder
            to build a professional, modern site that follows the StoryBrand
            framework to clearly communicate the value it adds to potential
            clients.
          </p>
        </div>

        <div className="mt-32 lg:mt-64 lg:pt-10 w-full text-center">
          <p className="font-semibold text-[24px] lg:text-[64px] uppercase">
            We’re here for you <br />
            <span className="text-blueColor">no matter where you are</span>
          </p>
          <img src={WorldMap} alt="" className="mt-5 lg:mt-10" />
        </div>

        <div className="bg-[#F5F5F5] dark:bg-darkCharcol px-10 mx-2 lg:mx-0 mb-8 lg:mb-20 rounded-2xl pb-8">
          <p className="font-semibold mt-4 lg:mt-0 text-[36px] lg:text-[128px] text-blueColor text-center uppercase">
            Here to Help
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-1/2 flex flex-col items-start justify-start">
              <form onSubmit={handleSubmit} className="flex flex-col items-start justify-start w-full">
                <label
                  htmlFor="fullName"
                  className="font-medium mt-4 text-[16px]"
                >
                  Full name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Full name..."
                  className={`border py-3 px-4 w-full lg:w-[80%] rounded bg-whiteColor my-2 text-darkCharcol outline-none ${
                    errors.fullName ? "border-red-500" : "border-grayColor"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}

                <label htmlFor="email" className="font-medium mt-4 text-[16px]">
                  Email Address*
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address..."
                  className={`border py-3 px-4 rounded w-full lg:w-[80%] bg-whiteColor my-2 text-darkCharcol outline-none ${
                    errors.email ? "border-red-500" : "border-grayColor"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}

                <label
                  htmlFor="contactNumber"
                  className="font-medium mt-4 text-[16px]"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={(e) => {
                    // Allow only numbers and limit to 10 characters
                    const value = e.target.value;
                    if (/^\d*$/.test(value) && value.length <= 10) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Enter Your Contact Number..."
                  className={`border py-3 px-4 rounded w-full lg:w-[80%] bg-whiteColor my-2 text-darkCharcol outline-none ${
                    errors.contactNumber ? "border-red-500" : "border-grayColor"
                  }`}
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm">{errors.contactNumber}</p>
                )}

                <label
                  htmlFor="message"
                  className="font-medium mt-4 text-[16px]"
                >
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className={`border py-3 px-4 w-full lg:w-[80%] rounded bg-whiteColor my-2 text-darkCharcol outline-none h-32 ${
                    errors.message ? "border-red-500" : "border-grayColor"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}

                <div className="w-24 h-10 flex items-center justify-center cursor-pointer text-whiteColor bg-gradient-to-r from-[#009FFF] to-[#1E77ED] rounded-lg mt-4">
                  <button type="submit">Sign up</button>
                </div>
              </form>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-start lg:pr-10">
              <p className="text-[22px] lg:text-[46px] font-medium">Join Our Newsletter</p>
              <p className="text-[14px] lg:text-[18px]">
                Add your details and you'll receive our quarterly email,
                including what's happening with the wildlife, nature and
                communities around Lewa House
              </p>
              <label
                htmlFor="newsletterEmail"
                className="font-medium mt-4 text-[16px]"
              >
                Email Address
              </label>
              <input
                type="text"
                name="newsletterEmail"
                placeholder="Enter Your Email Address..."
                className="border-grayColor py-3 px-4 rounded w-full lg:w-[80%] bg-whiteColor my-1 lg:my-2 placeholder-grayColor text-darkCharcol outline-none"
              />
              <div className="w-24 h-10 flex items-center justify-center cursor-pointer text-whiteColor bg-gradient-to-r from-[#009FFF] to-[#1E77ED] rounded-lg mt-1 lg:mt-4">
                <button type="button">Sign up</button>
              </div>
              <div className="mt-5 lg:mt-10">
                <p className="text-blueColor text-[16px] font-medium">Legal</p>
                <div className="flex items-start justify-center gap-5">
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </div>
                <p>Cookie Policy</p>
                <p className="text-blueColor text-[16px] font-medium mt-4">
                  Alternatively Contact us at:
                </p>
                <p>contact@freefontspik.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default Contact;
