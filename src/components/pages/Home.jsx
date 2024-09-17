import React, { useState } from "react";
import FontCard from "../FontCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Feature from "../Feature";

const Home = () => {
  const totalCards = 160;
  const cardsPerPage = 20;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const cardsArray = Array(totalCards).fill(<FontCard />);

  const getPaginatedCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardsArray.slice(startIndex, endIndex);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 5 || i === totalPages) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-6 h-6 mx-1 rounded-full ${
              currentPage === i ? "bg-blue-500 text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      } else if (i === 6) {
        pages.push(
          <span key="ellipsis" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
          {getPaginatedCards()}
        </div>

        <div className="flex items-center justify-center my-6">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`w-7 h-7 text-sm mx-2 flex items-center justify-center rounded-full border border-[#333333]`}
          >
            <GrLinkPrevious />
          </button>

          {renderPageNumbers()}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`w-7 h-7 text-sm mx-2 flex items-center justify-center rounded-full border border-[#333333]`}
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
      <Feature />
    </>
  );
};

export default Home;
