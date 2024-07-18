import React from 'react'

function DiscountBar() {
  return (
    <div className='w-full h-[16vh] flex rounded-lg relative mt-10 mb-10 bg-[#f8efea] items-center px-5  justify-between'>
      <div className='text-xl text-[#00b853]'>

        <strong>100% Secure delivery </strong>
        without contacting the courier
      </div>
      <img src="https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg" alt="" className='w-[30%] h-full object-cover' />

      <button className="mt-4 w-fit rounded-3xl border-none bg-[#00b853] px-4 py-1 text-white">
            Shop Now
          </button>



    </div>
  )
}

export default DiscountBar