import React from 'react'
import  AllImage from "../../assets/all_product_image.jpg"
import { FaRegHeart } from 'react-icons/fa6';
import { Rating } from '@mui/material';
import expand from "../../assets/expand.svg";

function Products() {
  return (
    <div className=' relative w-[75%] min-h-screen inter'>

      <div className='relative'>
        <img src={AllImage} alt="image" className=' rounded-lg' />
        <div className="absolute left-[18vw] top-20 flex flex-col gap-1">
              <h2 className="text-2xl text-gray-500">Organic Meals Prepared</h2>
              <h3 className="text-3xl font-semibold"> Delivered to <span className='text-green-700'>your Home</span></h3>
              <p className="text-[1vw] text-gray-500">
              Fully prepared & delivered nationwide.
              </p>
            </div>
      </div>

      <div className="relative mt-10 flex w-full flex-wrap overflow-hidden rounded-lg border-[1px]">
          {Array.from({ length: 12 }).map((val) => {
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
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-53-346x310.jpg"
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

                <h1 className="fontFamily mt-2 h-10 text-[1.1vw] font-extrabold leading-5">
                  USDA Choice Angus Beef Stew Meat
                </h1>
                <h4 className="mt-2 text-[0.8vw] text-[#00b853]">IN STOCK</h4>
                <div className="flex w-10 items-center gap-2">
                  <Rating name="read-only" value={2} size="small" readOnly />
                  <p>3</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 line-through">$99.09</span>
                  <span className="font-semibold text-red-600">$49.09</span>
                </div>
                <button className="mt-4 w-full  rounded-3xl bg-yellow-400 py-1">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>




    </div>
  )
}

export default Products