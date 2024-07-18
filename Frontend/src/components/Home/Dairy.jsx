
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import expand from "../../assets/expand.svg";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";




function Dairy() {
  return (
    <div className="relative mt-10 inter  min-h-screen w-full">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl text-[#223994]">BREACKFAST & DAIRY</h1>
          <h5 className="text-gray-500">
            Do not miss the current offers until the end of Jully.
          </h5>
        </div>
        <div className="shrink-0">
          <button className="flex items-center gap-3 rounded-3xl bg-slate-400/20 px-4 py-1 text-gray-600">
            See All <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="relative mt-8 flex min-h-screen w-full">
        <div className="relative w-[30%] overflow-hidden rounded-l-xl border-[1px]">
          <div className="relative">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/category-banner-2.jpg"
              alt=""
            />

            <div className="absolute left-6 top-8 flex flex-col gap-1">
              <h2 className="text-2xl text-gray-800">Weekly Discounts on</h2>
              <h3 className="text-2xl font-semibold"> Breackfast & Dairy</h3>
              <p className="text-[1vw] text-gray-500">
                ShopSmart Weekend Discount
              </p>
              <button className="mt-4 w-fit rounded-3xl border-none bg-[#223994] px-4 py-1 text-white">
                View All
              </button>
            </div>
          </div>
          <div className="w-ful flex gap-2 px-4 py-10">
            <div className="fontFamily flex w-1/2 flex-col gap-3 text-[1.1vw]">
              <Link>Herbs & Seasonings</Link>
              <Link>Packaged Produce</Link>
              <Link>Party Trays</Link>
              <Link>Cuts & Sprouts</Link>
            </div>
            <div className="fontFamily flex w-1/2 flex-col gap-3 text-[1.1vw]">
              <Link>Packaged Produce</Link>
              <Link>Fresh Fruits</Link>
              <Link>Fresh Vegetables</Link>
            </div>
          </div>

          <div className="absolute bottom-6 flex items-center gap-3 px-4 text-blue-700">
            <Link>Shop All Fruits & Vegetables</Link>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="relative flex w-[70%] flex-wrap overflow-hidden rounded-lg border-[1px]">
          {Array.from({ length: 8 }).map((val) => {
            return (
              <div
                className="product-container relative box-content w-[25%] cursor-pointer border-b-[1px] border-r-[1px] hover:bg-slate-100"
                //   onMouseEnter={() => setHover(true)}
                //   onMouseLeave={() => setHover(false)}
              >
                <div className="absolute left-3 top-2 rounded-md bg-[#2bbef9] px-2 text-white">
                  33%
                </div>

                <div className="w-full">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg"
                    alt=""
                    className="rounded-lg"
                  />

                  {/* ${hover ? "scale-[1]" : "scale-0"} */}
                  <div
                    className={`absolute top-2 hidden transition-all duration-300 ease-out`}
                  >
                    <div className="relative left-[150px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 hover:bg-[#223994]">
                      <img src={expand} alt="" className="w-4" />
                    </div>
                    <div className="relative left-[150px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 hover:bg-[#223994] hover:text-white">
                      <FaRegHeart />
                    </div>
                  </div>
                </div>

                <h1 className="fontFamily mt-2 h-10 text-[1.2vw] font-extrabold leading-5">
                  USDA Choice Angus Beef Stew Meat
                </h1>
                <h4 className="mt-2 text-[1vw] text-[#00b853]">IN STOCK</h4>
                <div className="flex w-10 items-center gap-2">
                  <Rating name="read-only" value={2} size="small" readOnly />

                  <p>3</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 line-through">$99.09</span>
                  <span className="font-semibold text-red-600">$49.09</span>
                </div>
                <button className="mt-4 hidden w-full rounded-3xl bg-yellow-400 py-1">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dairy;
