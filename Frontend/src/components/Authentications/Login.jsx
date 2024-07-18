import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from './Button'

function Login() {
  return (
    <div
      className={` flex h-screen w-full mt-10 justify-center backdrop-blur-[3px]`}
    >
      <div
        className={`login mx-auto h-fit flex w-full max-w-lg flex-col rounded-xl border border-black/10  p-5`}
      >
        {/* <div
        className={`absolute left-1/2 top-1/2 h-8 w-8  animate-spin rounded-full border-[5px] border-t-blue-400 ${
          loader ? "" : "hidden"
        }`}
      >
      </div> */}
        {/* 
      <div className=" w-full justify-center items-center hidden">

        <span className="flex justify-center w-full">
          <Logo width="100%" />
        </span>

      </div> */}


        <h2 className="text-center text-2xl font-bold leading-tight">
          Login
        </h2>

        <p className="text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link to="/signup"
            className="text-primary font-medium transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* {error && <p className="mt-8 text-center text-red-600">{error}</p>} */}
        <form>
          <div className="flex flex-col">
            
            <Input
              label="Email:"
              type="email"
              className="h-10 w-[75%] rounded-md text-black placeholder:px-2"
              placeholder="Enter your email"
            />

            <Input
              label="Password:"
              type="password"
              className="h-10 w-[75%] rounded-md text-black placeholder:px-2"
              placeholder="Enter your password"
            />
          
     
            <Button
              children="Sign In"
              classname="rouded-lg w-full bg-green-500 h-10 rounded-md mt-6"
            />
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login