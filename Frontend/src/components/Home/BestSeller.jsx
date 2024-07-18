import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import star from "../../assets/star.png";
import expand from "../../assets/expand.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./CustomArrows.jsx";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Rating from '@mui/material/Rating';


function BestSeller() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="mt-10 w-full relative">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl text-[#223994]">BEST SELLERS</h1>
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

  
      <Slider
        {...settings}
        className="mt-5 w-full overflow-hidden rounded-lg border-[1px] relative"
      >

        <div className="product-container box-content cursor-pointer border-r-[1px] px-4 py-4 hover:bg-slate-100"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="w-full">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="absolute top-3 rounded-md bg-[#2bbef9] px-2 text-white">
              33%
            </div>

            <div
              className={`${hover ? "scale-[1]" : "scale-0"} absolute top-3  transition-all duration-300 ease-out`}
            >
              <div className="relative left-44 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 hover:bg-[#223994]">
                <img src={expand} alt="" className="w-4 " />
              </div>
              <div className="relative left-44 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300 hover:bg-[#223994] hover:text-white">
                <FaRegHeart />
              </div>
            </div>
          </div>

          <h1 className="fontFamily mt-2 h-10 text-[1.2vw] font-extrabold leading-5">
            USDA Choice Angus Beef Stew Meat
          </h1>

          <h4 className="mt-2 text-[1vw] text-[#00b853]">IN STOCK</h4>
          <div className="flex w-10 items-center gap-2">
            {/* <Typography component="legend">Read only</Typography> */}
            <Rating name="read-only" value={3} size="small"  readOnly />
            <p>3</p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 line-through">$99.09</span>
            <span className="font-semibold text-red-600">$49.09</span>
          </div>
          <button className="mt-4 w-full rounded-3xl bg-yellow-400 py-1">
            Add to Cart
          </button>
        </div>

        <div className="product-container box-content w-[1vw] cursor-pointer border-r-[1px] px-4 py-4 hover:bg-slate-100"
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}>
          <div className="w-full">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="absolute top-3 rounded-md bg-[#2bbef9] px-2 text-white">
              49%
            </div>
            <div
              className={`${hover2 ? "scale-[1]" : "scale-0"} absolute top-3  transition-all duration-300 ease-out`}
            >
              <div className="relative left-44 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300">
                <img src={expand} alt="" className="w-4" />
              </div>
              <div className="relative left-44 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-300">
                <FaRegHeart />
              </div>
            </div>
          </div>
          <h1 className="fontFamily mt-2 h-10 text-[1.2vw] font-extrabold leading-5">
            Fresh Organic Broccoli Crowns
          </h1>
          <h4 className="mt-2 text-[1vw] text-[#00b853]">IN STOCK</h4>
          <div className="flex w-10 items-center gap-2">
          <Rating name="read-only" value={2} size="small"  readOnly />
            <p>2</p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 line-through">$199.09</span>
            <span className="font-semibold text-red-600">$99.09</span>
          </div>
          <button className="mt-4 w-full rounded-3xl bg-yellow-400 py-1">
            Add to Cart
          </button>
        </div>

        <div className="product-container box-content w-[1vw] cursor-pointer border-r-[1px] px-4 py-4 hover:bg-slate-100">
          <div className="w-full">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <h1 className="fontFamily mt-2 h-10 text-[1.2vw] font-extrabold leading-5">
            {" "}
            Boomchickapop
          </h1>
          <h4 className="mt-2 text-[1vw] text-[#00b853]">IN STOCK</h4>
          <div className="flex w-10 items-center gap-2">
          <Rating name="read-only" value={4} size="small"  readOnly />
            <p>4</p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 line-through">$29.99</span>
            <span className="font-semibold text-red-600">$11.49</span>
          </div>
          <button className="mt-4 w-full rounded-3xl bg-yellow-400 py-1">
            Add to Cart
          </button>
        </div>

        <div className="product-container box-content w-[1vw] cursor-pointer border-r-[1px] px-4 py-4 hover:bg-slate-100">
          <div className="w-full">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <h1 className="fontFamily mt-2 h-10 text-[1.2vw] font-extrabold leading-5">
            USDA Choice Angus Beef Stew Meat
          </h1>
          <h4 className="mt-2 text-[1vw] text-[#00b853]">IN STOCK</h4>
          <div className="flex w-10 items-center gap-2">
          <Rating name="read-only" value={5} size="small"  readOnly />
            <p>5</p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 line-through">$79.39</span>
            <span className="font-semibold text-red-600">$69.29</span>
          </div>
          <button className="mt-4 w-full rounded-3xl bg-yellow-400 py-1">
            Add to Cart
          </button>
        </div>

        <div className="product-container box-content w-[1vw] cursor-pointer border-r-[1px] px-4 py-4 hover:bg-slate-100">
          <div className="w-full">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <h1 className="fontFamily mt-2 h-10 text-[1.2vw] font-extrabold leading-5">
            USDA Choice Angus Beef Stew Meat
          </h1>
          <h4 className="mt-2 text-[1vw] text-[#00b853]">IN STOCK</h4>
          <div className="flex w-10 items-center gap-2">
            <img src={star} alt="" />
            <p>1</p>
          </div>
          <div className="flex gap-3">
            <span className="text-gray-500 line-through">$79.39</span>
            <span className="font-semibold text-red-600">$69.29</span>
          </div>
          <button className="mt-4 w-full rounded-3xl bg-yellow-400 py-1">
            Add to Cart
          </button>
        </div>


      </Slider>

      
    </div>

  );
}

export default BestSeller;
