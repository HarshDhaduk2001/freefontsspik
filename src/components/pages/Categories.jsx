import React, { useState } from "react";
import Feature from "../Feature";
import img from "../../assets/images/common";
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div
      className="border border-[#DADADA] rounded-2xl flex flex-col items-center justify-center"
      onClick={() => navigate("/categories/2")}
    >
      <img
        src={img.DetailsImage}
        alt=""
        className="rounded-lg w-[200px] h-[100px] md:w-[250px] md:h-[170px] lg:w-[300px] lg:h-[200px]"
      />
      <p className="lg:text-[24px]  my-1 lg:my-2 text-dar">Display</p>
    </div>
  );
};

const Categories = () => {
  const totalCards = 160;
  const cardsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const cardsArray = Array(totalCards).fill(<Card />);

  const getPaginatedCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardsArray.slice(startIndex, endIndex);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mx-10 dark:text-white mb-10 mx-10">
        <p className="text-blueColor text-[20px] lg:text-[24px]">CATEGORIES</p>
        <div className="bg-white dark:bg-blackColor dark:text-white px-2 -top-4 lg:-top-9 text-[20px] md:text-[26px] lg:text-[42px] text-center font-semibold mb-8">
          Browse Your Favorite
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {getPaginatedCards()}
        </div>

        <Pagination
          totalCards={totalCards}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Feature />
    </>
  );
};

export default Categories;
