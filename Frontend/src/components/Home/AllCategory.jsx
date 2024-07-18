import React from "react";

function AllCategory() {
  return (
    <div className="inter relative mb-5 mt-5 flex h-[50vh] w-full overflow-hidden rounded-lg border-[1.5px]">
      <div className="flex w-[20%] flex-col items-center border-r-[1.5px]">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg"
          alt=""
          className="h-[75%] w-full object-cover"
        />
        <div className="flex flex-col items-center">
          <h2>Beverages</h2>
          <h5 className="text-[1.1vw] text-gray-500">7 Items</h5>
        </div>
      </div>

      <div className="w-[80%]">
        <div className="flex h-1/2 w-full border-b-[1.5px]">
        
          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Biscuits & Snacks</h2>
              <h5 className="text-[1vw] text-gray-500">7 Items</h5>
            </div>
          </div>

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/breadbakery-1.jpg"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Breads & Bakery</h2>
              <h5 className="text-[1vw] text-gray-500">6 Items</h5>
            </div>
          </div>

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/dairy-1.jpg"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Biscuits & Snacks</h2>
              <h5 className="text-[1vw] text-gray-500">7 Items</h5>
            </div>
          </div>

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Frozen Foods</h2>
              <h5 className="text-[1vw] text-gray-500">7 Items</h5>
            </div>
          </div>

        </div>
        <div className="flex h-1/2 w-full">

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/fruitvegetables-1.jpg"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Fruits & vegetables</h2>
              <h5 className="text-[1vw] text-gray-500">7 Items</h5>
            </div>
          </div>

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image2.png"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Grocery & Staples</h2>
              <h5 className="text-[1vw] text-gray-500">8 Items</h5>
            </div>
          </div>

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/household-1.jpg"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Household Needs</h2>
              <h5 className="text-[1vw] text-gray-500">8 Items</h5>
            </div>
          </div>

          <div className="flex h-full w-[25%] items-center justify-center border-r-[1.5px]">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg"
              alt=""
              className="w-[40%] object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[1.1vw]">Meats & Seafood</h2>
              <h5 className="text-[1vw] text-gray-500">8 Items</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCategory;
