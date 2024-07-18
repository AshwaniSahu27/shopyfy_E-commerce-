import React from "react";
import Filter from "./Filter";
import Products from "./Products"

function AllProducts() {
  return (
    <div className="relative mt-10 min-h-screen w-full px-10 flex">
      <Filter />
      <Products/>
    </div>
  );
}

export default AllProducts;
