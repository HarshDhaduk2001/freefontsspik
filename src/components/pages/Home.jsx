import React, { useState } from "react";
import FontCard from "../FontCard";
import Feature from "../Feature";
import FavouriteFont from "../FavouriteFont";
import Pagination from "../Pagination";

const Home = () => {
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
      <div className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
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

export default Home;
