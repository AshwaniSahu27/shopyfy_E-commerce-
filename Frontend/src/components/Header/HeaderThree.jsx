import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function HeaderThree() {
  return (
    <div className="flex h-20 w-full  items-center justify-between gap-4 px-10">
      <div className=" cursor-pointer flex h-1/2 items-center gap-3 rounded-3xl bg-[#2bbef9] px-5 py-6 text-white">
        <FaBars />
        <h1>ALL CATEGORIES</h1>
        <IoIosArrowDown />
      </div>
      <div className="Dosis flex gap-2  text-[#223994]/90">
        <div className="flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]">
          HOME
          <IoIosArrowDown />
        </div>
        <div className="flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]">
          SHOP
          <IoIosArrowDown />
        </div>

        <div className="flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]" >
          <i class="fa-solid fa-drumstick-bite"></i>
          MEATS & SEAFOOD
        </div>
        <div className="flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]">
          <i class="fa-solid fa-bread-slice"></i>
          BAKERY
        </div>
        <div className="flex items-center gap-2 rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]">
          <i class="fa-solid fa-mug-hot"></i>
          BEVERAGES
        </div>
        <div className="rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]">BLOG</div>
        <div className="rounded-full cursor-pointer px-4 py-2 hover:bg-[#2bbef9]/30 hover:text-[#2066b1]">CONTACT</div>
      </div>
    </div>
  );
}

export default HeaderThree;
