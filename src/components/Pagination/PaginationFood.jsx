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
      />
    </>
  );
};

export default PaginationFood;
