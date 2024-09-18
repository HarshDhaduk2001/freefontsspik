import React, { useState } from "react";
import Feature from "../Feature";
import Pagination from "../Pagination";
import FontCard from "../FontCard";
import FavouriteFont from "../FavouriteFont";

const CategoriesDetail = () => {
  const totalCards = 160;
  const cardsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const cardsArray = Array(totalCards).fill(<FontCard />);

  const getPaginatedCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardsArray.slice(startIndex, endIndex);
  };
  return (
    <>
      <FavouriteFont />
      <div className="flex flex-col items-center justify-center lg:mx-10 dark:text-white mb-10 mx-10">
        <div className="flex items-center justify-center rounded-2xl -mt-5 mb-5 py-4 md:py-8  text-[26px] md:text-[60px] text-whiteColor bg-gradient-to-r from-[#009FFF] to-[#1E77ED] w-full">
          Calligraphy Fonts
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
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

export default CategoriesDetail;
