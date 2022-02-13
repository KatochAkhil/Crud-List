import React from "react";

function Pagination({ listPerPage, totalList, paginate }) {
  const listNumber = [];

  for (let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
    listNumber.push(i);
  }


  return (
    <ul className="pagination justify-content-center">
      {listNumber.map((number) => (
        <li key={number} className="page-item">
          <button onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
