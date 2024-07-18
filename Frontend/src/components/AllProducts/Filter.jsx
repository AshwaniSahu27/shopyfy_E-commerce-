import React from 'react'
import { BsFilter } from "react-icons/bs";
import Gif from "../../assets/joose.gif"


function Filter() {
  return (
    <div className="w-[30%] inter2 flex flex-col gap-10">

        <div className=''>
            <h1 className='text-xl font-semibold Dosis flex items-center justify-between'>Product Catogary <span className=' mr-10 text-gray-500'><BsFilter />
            </span></h1>
            <div className=" mt-2 ">
                <ul >
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="Fruits & Vegetables" id="Fruits" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-apple-whole"></i></div>
                        <label htmlFor="Fruits" className='text-[1.3vw]'> Fruits & Vegetables</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Meats & Seafood" id="Meats" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-drumstick-bite"></i></div>
                        <label htmlFor="Meats"> Meats & Seafood</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Breakfast & Dairy" id="Dairy" />
                        <div className='text-gray-400 text-[1.2vw]'> <i class="fa-solid fa-cookie-bite"></i></div>
              
                        <label htmlFor="Dairy"> Breakfast & Dairy</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Beverages" id=" Beverages" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-martini-glass-citrus"></i></div>
                        <label htmlFor=" Beverages"> Beverages</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Frozen Foods" id="Frozen" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-icicles"></i></div>
                        <label htmlFor="Frozen"> Frozen Foods</label>
                    </li>

                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Biscuits & Snacks" id="Snacks" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-cookie-bite"></i></div>
                        <label htmlFor="Snacks"> Biscuits & Snacks</label>
                    </li>

                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Grocery & Staples" id="Grocery" />
                        <div className='text-gray-400 text-[1.2vw] '><i class="fa-solid fa-bag-shopping" ></i></div>
                        <label htmlFor="Grocery">  Grocery & Staples</label>
                    </li>


                </ul>
            </div>
            
        </div>

        <div>
           <h1 className='text-xl font-semibold Dosis flex items-center justify-between'>Filter by Price <span className=' mr-10 text-gray-500'><BsFilter />
           </span></h1>
           <div className='flex flex-col gap-1 mt-3'>
             <input type="range" min={10} max={300} className='w-[86%]' />
             <p>Price : 100 - 500 </p>
           </div>
            

        </div>


        <div>
            <h1 className='text-xl font-semibold Dosis flex items-center justify-between'>Product Status<span className=' mr-10 text-gray-500'><BsFilter />
            </span></h1>
            <div className=" mt-2 ">
                <ul >
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="Fruits & Vegetables" id="Fruits" />
                        <label htmlFor="Fruits" className='text-[1.3vw]'>In Stock</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="Fruits & Vegetables" id="Fruits" />
                        <label htmlFor="Fruits" className='text-[1.3vw]'>On sale</label>
                    </li>
                </ul>
            </div>

        </div>

        <div>
            <h1 className='text-xl font-semibold Dosis flex items-center justify-between'>Brands<span className=' mr-10 text-gray-500'><BsFilter />
            </span></h1>
            <div className=" mt-2 ">
                <ul >
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="oreo" id="oreo" />
                        <label htmlFor="oreo" className='text-[1.3vw]'>Oreo</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="Fruits & Vegetables" id="Fruits" />
                        <label htmlFor="Fruits" className='text-[1.3vw]'>Crecker</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="Fruits & Vegetables" id="Fruits" />
                        <label htmlFor="Fruits" className='text-[1.3vw]'>Dolfe</label>
                    </li>
                </ul>
            </div>

        </div>

        <div className=' pr-10'>
            <img src={Gif} alt="" />

        </div>

    </div>
  )
}

export default Filter