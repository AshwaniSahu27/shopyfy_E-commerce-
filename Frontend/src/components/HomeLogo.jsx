import React from 'react'
import Logo from "../../public/favicon.png"

function HomeLogo({className= "w-10 "}) {
  return (
    <div>
        <img src={Logo} alt="" className={`${className}`}/>
    </div>
  )
}

export default HomeLogo