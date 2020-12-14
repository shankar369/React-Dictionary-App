import React from "react";
import ReactPaginate from "react-paginate";
import "./Paginate.css";

function Paginate({ pageCount, currentPage, setCurrentPage }) {
  const handlePageChange = ({ selected }) => {
    sessionStorage.setItem("current_page", selected);
    setCurrentPage(selected);
  };
  return (
    <div className="pagination">
      <ReactPaginate
        onPageChange={handlePageChange}
        pageCount={pageCount}
        previousLabel="<"
        nextLabel=">"
        forcePage={currentPage}
      />
    </div>
  );
}

export default Paginate;
