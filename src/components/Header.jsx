/* eslint-disable eqeqeq */
import React from "react";
import { useLocation } from "react-router-dom";
import Search from "../assets/Search.png";

const headerData = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Categories", link: "/categories" },
  { id: 3, title: "Collections", link: "/collections" },
  { id: 4, title: "Fonts Pairs", link: "/fontspairs" },
];

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex items-center justify-center w-full mt-20">
      <div className="flex items-center justify-between w-full mx-10 border border-blueColor rounded-lg h-20 px-4">
        <div className="flex items-center justify-center">
          <p className="text-lg text-blueColor mr-10">FREEFONTSPIK</p>
          {headerData.map((i) => (
            <p
              key={i.id}
              className={`mr-8 ${
                pathname == i.link ? "text-blueColor text-[20px]" : ""
              }`}
            >
              {i.title}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default Header;
