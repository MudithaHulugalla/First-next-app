import React from "react";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className=" h-20 border-b-[1px] border-gray-500 text-white lg:text-white bg-blue-900 lg:bg-blue-900">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
      
        
        <ul className=" lg:inline-flex items-center gap-8 uppercase text-sm font-semibold pl-96 flex space-x-20  ">
          <li> <Link href="/">HOME</Link></li>
          <li> <Link href="/About">ABOUT US</Link></li>
          <li> <Link href="/Course">COURSE</Link></li>
          <li> <Link href="/Contact">CONTACT</Link></li>
          
        </ul>
        <div className="pr-10">
          <button className="py-3 px-4 bg-blue-700 text-white uppercase text-sm font-semibold rectangle-md  hover:text-white  duration-290 duration-300 transition-all ease-in-out hover:bg-black hover:shadow-lg ">
            APPLY NOW
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;

