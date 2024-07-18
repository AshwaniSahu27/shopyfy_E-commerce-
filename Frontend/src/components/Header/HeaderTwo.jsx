import React, { useEffect } from 'react'
import HomeLogo from '../HomeLogo'
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'


function HeaderTwo() {

   function handleclick(){
      // const url = String(import.meta.env.VITE_APP_API_URL);
      //  useEffect(()=>{
      //    fetch(`${url}/user/get-current-user`)
      //    .then((res)=res.json())
      //    .then((data)=>{
      //          console.log(data)
      //    })
      //  },[])
   }


  return (
    <div className='flex gap-8 items-center w-full h-[20vh] px-10 pt-5'>
     <div className=' cursor-pointer shrink-0'>
        <div className='flex gap-1 items-end'>
           <HomeLogo className="w-12"/>
            <h1 className='text-2xl lilita mb-1'>ShopSmart</h1>
        </div>
        <p className='text-[1.1vw] text-gray-500 ml-2'>Online Grocery Shopping Center</p>
     </div>

     <div className=' shrink-0 cursor-pointer w-42 h-16 border-[1px] border-zinc-300 rounded-md flex flex-col px-4 items-start justify-center'> 
        <p className='text-[0.8vw] text-gray-500  '>Your Location</p>
        <div className='flex gap-2 text-[#223994]'>Select a location <span><IoIosArrowDown /></span></div>
     </div>
     <div className=' cursor-pointer flex items-center bg-[#f3f4f7] w-[50%] h-16  rounded-lg pl-4'>
        <input type="text" placeholder='Search products....' className="bg-[#f3f4f7]   outline-none  w-full h-full  rounded-lg"/>
        <div className='w-10 text-gray-500'>

        <BsSearch size="1.8vw"   />
        </div>
     </div>

     <div className='flex gap-5'>
   
        <Link to="/login" className='cursor-pointer w-12 h-12 border-[1px] rounded-full flex items-center justify-center bg-gray-200 text-gray-600' onClick={handleclick}>
        <FaUser />
        </Link>


        <div className=' cursor-pointer w-12 h-12 border-[1px] rounded-full flex items-center justify-center bg-gray-200 text-gray-600' >
        <FaShoppingCart />
        </div>
     </div>

    </div>
  )
}

export default HeaderTwo