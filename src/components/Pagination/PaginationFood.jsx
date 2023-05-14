import React from "react";
import ReactPaginate from "react-paginate";

const PaginationFood = () => {
  const handlePageClick = () => {
    console.log("click");
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex flex-row mx-2 border-1 border-orange-500 bg-slate-500"
      />
    </>
  );
};

export default PaginationFood;
