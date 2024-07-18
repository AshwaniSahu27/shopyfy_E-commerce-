import React from "react";
import bread from "../../assets/bread.jpg";
import daal from "../../assets/daal.jpg";


function HeroPage() {
  return (
    <div className=" w-full h-full flex justify-between gap-5 ">
        <div className="w-[46vw] ">
            <img src={bread} alt="" className="rounded-lg w-full" />
            <div className=" absolute top-80  left-[30vw] flex flex-col gap-2 ">
                <h2 className="text-2xl text-gray-500">Everything is so fresh</h2>
                <h3 className="text-2xl font-semibold">only in ShopSmart</h3>
                <p className="text-[1vw] text-gray-500">ShopSmart Weekend Discount</p>
                <button className="px-4 py-1 text-white mt-4 rounded-3xl bg-[#223994] border-none w-fit">Shop now</button>
            </div>
        </div>
        <div className="w-[46vw] ">
       <img src={daal} alt="" className="rounded-lg w-full" />
       <div className=" absolute top-80  right-[5vw] flex flex-col gap-2 ">
                <h2 className="text-2xl text-gray-500">Big discount on</h2>
                <h3 className="text-2xl font-semibold">organic legumes</h3>
                <p className="text-[1vw] text-gray-500">ShopSmart Weekend Discount</p>
                <button className="px-4 py-1 text-white mt-4 rounded-3xl bg-[#223994] border-none w-fit">Shop now</button>
            </div>
        </div>
      
    </div>
  );
}

export default HeroPage;
