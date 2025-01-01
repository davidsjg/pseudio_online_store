import React from "react";
import { useState } from "react";
import Product from "../Product/Product";
import "./CategoryPaginate.css";

function CategoryPaginate({ data, category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  let tempArr = [];

  data.forEach((obj) => {
    if (obj.category === category) {
      tempArr.push(obj);
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tempArr.slice(indexOfFirstItem, indexOfLastItem);

  console.log(indexOfLastItem)

  return (
    <>
      <div className="pagTitle">
        <h1>{category}</h1>
        <div className="electronicSlide">
          <div className="es2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {currentItems.map((item, index) => (
              <div key={index}>
                <Product product={item} />
              </div>
            ))}

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastItem > data.length}
            >
              Next
            </button>
          </div>

          <div className="esButtonContain"></div>
        </div>
      </div>
    </>
  );
}

export default CategoryPaginate;
