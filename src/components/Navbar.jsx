import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate  = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <img onClick={()=>{navigate(-1)}} src={assets.arrow_left} alt="" className="w-8 bg-black p-2 cursor-pointer rounded-2xl" />
            <img onClick={()=>{navigate(1)}} src={assets.arrow_right} alt="" className="w-8 bg-black p-2 cursor-pointer rounded-2xl" />
        </div>

        <div className="flex items-center gap-4">
            <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
            <p className="bg-black py-1 px-4 rounded-2xl text-[15px] text-white cursor-pointer">Install App</p>
            <p className="bg-blue-500 text-black w-8 h-8 rounded-full flex items-center justify-center">U</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="text-black bg-white rounded-2xl px-4 py-1 font-semibold cursor-pointer">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
