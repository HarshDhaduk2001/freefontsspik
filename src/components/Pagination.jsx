import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Home = (props) => {
  const totalPages = Math.ceil(props.totalCards / props.cardsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, props.currentPage - 2);
    const endPage = Math.min(totalPages, props.currentPage + 2);

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => props.setCurrentPage(i)}
            className={`w-6 h-6 mx-1 rounded-full ${
              props.currentPage === i ? "bg-blue-500 text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (props.currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => props.setCurrentPage(i)}
              className={`w-6 h-6 mx-1 rounded-full ${
                props.currentPage === i ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i}
            </button>
          );
        }
        pages.push(
          <span key="ellipsis-end" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      } else if (
        props.currentPage >= 5 &&
        props.currentPage <= totalPages - 4
      ) {
        pages.push(
          <span key="ellipsis-start" className="px-3 py-1 mx-1">
            ...
          </span>
        );

        for (let i = startPage; i <= endPage; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => props.setCurrentPage(i)}
              className={`w-6 h-6 mx-1 rounded-full ${
                props.currentPage === i ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i}
            </button>
          );
        }

        pages.push(
          <span key="ellipsis-end" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      } else {
        pages.push(
          <span key="ellipsis-start" className="px-3 py-1 mx-1">
            ...
          </span>
        );

        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => props.setCurrentPage(i)}
              className={`w-6 h-6 mx-1 rounded-full ${
                props.currentPage === i ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i}
            </button>
          );
        }
      }
    }

    return pages;
  };

  const goToPrevPage = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (props.currentPage < totalPages) {
      props.setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center justify-center my-6">
      <button
        onClick={goToPrevPage}
        disabled={props.currentPage === 1}
        className={`w-7 h-7 text-sm mx-2 flex items-center justify-center rounded-full border border-[#333333]`}
      >
        <GrLinkPrevious />
      </button>

      {renderPageNumbers()}

      <button
        onClick={goToNextPage}
        disabled={props.currentPage === totalPages}
        className={`w-7 h-7 text-sm mx-2 flex items-center justify-center rounded-full border border-[#333333]`}
      >
        <GrLinkNext />
      </button>
    </div>
  );
};

export default Home;
