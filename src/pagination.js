import React from "react";

const Pagination = ({ PostsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / PostsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      {pageNumber.map(el => (
        <span
          style={{ border: "solid", padding: "5px" }}
          onClick={() => paginate(el)}
        >
          {el}{" "}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
