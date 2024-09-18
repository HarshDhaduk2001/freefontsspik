import React, { useState } from "react";
import FavouriteFont from "../FavouriteFont";
import Pagination from "../Pagination";
import FontDetailsCard from "../FontDetailsCard";

const FontsPairs = () => {
  const totalCards = 110;
  const cardsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(1);

  const cardsArray = Array(totalCards).fill(<FontDetailsCard />);

  const getPaginatedCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardsArray.slice(startIndex, endIndex);
  };

  return (
    <>
      <FavouriteFont />
      <div className="mx-10">
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
    </>
  );
};

export default FontsPairs;
