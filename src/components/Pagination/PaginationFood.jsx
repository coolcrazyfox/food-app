import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.css";

const PaginationFood = ({ onChangePage }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
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
