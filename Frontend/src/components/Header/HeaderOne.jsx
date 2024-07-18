import React from "react";
import {Link,NavLink} from "react-router-dom"
import { RiSecurePaymentLine } from "react-icons/ri";


function HeaderOne() {
  return (
    <div className="w-full h-10 shadow-md flex gap-5 px-12 items-center justify-between">
      <nav className="flex gap-3 fontFamily text-[1.1vw] text-gray-600">
       <NavLink to="/about-us" className="hover:text-blue-500">
            About us
       </NavLink>
       <NavLink to="/my-account" className="hover:text-blue-500">
            My account
       </NavLink>
       <NavLink to="/wishlist" className="hover:text-blue-500">
           Wishlist
       </NavLink>
       <NavLink to="/order-tracking" className="hover:text-blue-500">
          Order Tracking
       </NavLink>

      </nav>
      <div className="flex gap-2 items-center ml-[10%] text-[1.1vw] text-gray-600">
      <RiSecurePaymentLine size="1.5vw" />
      <span>100% Secure delivery without contacting the courier</span>

      </div>
      <div className=" w-[] h-full flex items-center ml-5 border-l-[1px] px-5 border-r-[1px] text-[1.1vw] text-gray-600">
       Need help? call us 
        <span className="text-blue-500">+90909999</span>

      </div>
      <div>
        <select name="language" id="" className=" border-[2px] text-[1.1vw] text-gray-600 rounded-sm">
            <option value="English">Eng</option>
            <option value="spanish">Span</option>
            <option value="Hindi">Hindi</option>
        </select>

      </div>
    </div>
  );
}

export default HeaderOne;
