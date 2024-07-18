import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import HeaderOne from "./components/Header/HeaderOne";
import HeaderTwo from "./components/Header/HeaderTwo";
import HeaderThree from "./components/Header/HeaderThree";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const url = String(import.meta.env.VITE_APP_API_URL);
    fetch(`${url}/user/get-current-user`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
       <div className="w-full">
        
        <HeaderOne />
        <div className=" w-full shadow-md">
          <HeaderTwo/>
          <HeaderThree/>
        </div>
        <div className="w-full ">
           <Outlet/>
        </div>

        </div>
    </>
  );
}

export default App;
