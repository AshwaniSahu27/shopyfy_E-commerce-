import React from "react";

function Dishes() {
  return (
    <div className="relative inter mt-5 flex h-fit w-full gap-6 py-5">
      <div className="relative">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-05.jpg"
          alt=""
          className="rounded-xl"
        />

        <div className="absolute left-6 top-8 flex flex-col gap-1">
          <h2 className=" text-[1.3vw] text-[#00b853]">WEEKLY DISCOUNT 30% </h2>
          <h3 className="text-2xl font-semibold"> Netural Eggs</h3>
          <p className="text-[1vw] text-gray-400">Eat One Every Day</p>
          <button className="mt-4 w-fit rounded-3xl border-none bg-gray-400 px-4 py-1 text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" relative">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-06.jpg"
          alt=""
          className="rounded-xl"
        />
          <div className="absolute left-6 top-8 flex flex-col gap-1">
          <h2 className=" text-[1.3vw] text-[#00b853]">WEEKLY DISCOUNT 40% </h2>
          <h3 className="text-2xl font-semibold"> Test the Best</h3>
          <p className="text-[1vw] text-gray-400">Shine the Morning</p>
          <button className="mt-4 w-fit rounded-3xl border-none bg-gray-400 px-4 py-1 text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className=" relative">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-10.jpg"
          alt=""
          className="rounded-xl"
        />
          <div className="absolute left-6 top-8 flex flex-col gap-1">
          <h2 className=" text-[1.3vw] text-[#00b853]">WEEKLY DISCOUNT 60% </h2>
          <h3 className="text-2xl font-semibold">Ditch the Junk</h3>
          <p className="text-[1vw] text-gray-400">Breakfast made Better</p>
          <button className="mt-4 w-fit rounded-3xl border-none bg-gray-400 px-4 py-1 text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
