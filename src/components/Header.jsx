/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "../assets/Search.png";
import { FaBars, FaTimes } from "react-icons/fa";

const headerData = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Categories", link: "/categories" },
  { id: 3, title: "Collections", link: "/collections" },
  { id: 4, title: "Fonts Pairs", link: "/fontspairs" },
];

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex items-center justify-center w-full mt-8 lg:mt-20 mb-4 lg:mb-10">
      <div className="flex items-center justify-between w-full mx-10 border border-blueColor rounded-lg h-20 px-4">
        <div className="flex items-center justify-center">
          <p className="text-lg text-blueColor mr-10">FREEFONTSPIK</p>
          <div className="hidden lg:flex">
            {headerData.map((i) => (
              <p
                key={i.id}
                className={`mr-8 ${
                  pathname == i.link ? "text-blueColor text-[20px]" : ""
                }`}
              >
                <a href={i.link}>{i.title}</a>
              </p>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex items-center justify-center bg-[#F5F5F5] w-full py-2 px-4 rounded-lg gap-2">
            <img src={Search} alt="search" />
            <input
              type="text"
              placeholder="Search all font and foundries"
              className="bg-[#F5F5F5] outline-none border-none placeholder-darkCharcol w-[90%]"
            />
          </div>
          <div className="w-24 h-10 flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#009FFF] to-[#1E77ED] rounded-lg ml-10">
            Login
          </div>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex lg:hidden items-center justify-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? (
              <FaTimes size={24} color="#009FFF" />
            ) : (
              <FaBars size={24} color="#009FFF" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#F5F5F5] dark:bg-darkCharcol z-50 flex flex-col items-center justify-center">
          {/* Close Button at the Top-Right Corner */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-blueColor focus:outline-none"
          >
            <FaTimes size={30} />
          </button>

          {headerData.map((i) => (
            <p
              key={i.id}
              className={`my-4 text-2xl ${
                pathname == i.link ? "text-blueColor text-[24px]" : ""
              }`}
            >
              <a href={i.link}>{i.title}</a>
            </p>
          ))}
          <div className="w-24 mt-8 flex items-center justify-center cursor-pointer bg-gradient-to-r from-[#009FFF] to-[#1E77ED] rounded-lg py-3 text-white">
            Login
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
