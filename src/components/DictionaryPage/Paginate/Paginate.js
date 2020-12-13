import React from "react";
import ReactPaginate from "react-paginate";
import "./Paginate.css";

function Paginate({ pageCount }) {
  const handlePageChange = ({ selected }) => {
    console.log(selected);
  };
  return (
    <div className="pagination">
      <ReactPaginate
        onPageChange={handlePageChange}
        pageCount={pageCount}
        previousLabel="<"
        nextLabel=">"
      />
    </div>
  );
}

export default Paginate;
