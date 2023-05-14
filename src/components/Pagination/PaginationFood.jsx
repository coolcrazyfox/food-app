import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.css";

const PaginationFood = () => {
  const handlePageClick = (e) => {
    console.log("click", e);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={9}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className={s.box}
      />
    </>
  );
};

export default PaginationFood;
