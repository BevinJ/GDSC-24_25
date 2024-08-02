import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Popularinternal from "./Popularinternal";

const Navbar = () => {
  const [search, setSearch] = useState("false");
  const searchHandler = () => {
    setSearch(!search);
  };
  function theme(){
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className="w-full h-16  flex justify-center items-center bg-[#02A28F] dark:bg-[#3B3B3B] text-white">
      <div className="w-4/5 h-14  flex justify-between items-center">
        <h1 className="text-3xl w-2/4 font-bold">Kang Tutor</h1>
        <button  onClick={theme} className="lg:hidden absolute right-20 sm:right-40 top-2 bg-[#02A28F] dark:bg-white dark:text-black border text-white px-5 py-3 rounded text-sm">Theme Toggle</button>
        <div onClick={searchHandler} className="block lg:hidden text-white">
        
          {!search ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineClose size={30} className="hidden" />
          )}
          <div
            className={
              !search
                ? "fixed left-[-100%]"
                : "fixed left-0 top-0 w-[100%] border-r border-r-gray-800 h-full ease-in-out duration-500 bg-[#02A28F] dark:bg-black items-center flex justify-center"
            }
          >
            <AiOutlineClose
              size={30}
              className="absolute top-4 right-12"
              onClick={searchHandler}
            />
            <div className="w-4/5 h-4/5 flex flex-col">
              <div>
                <div>
                  <div className="flex flex-row h-12 w-full">
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full text-center  bg-[#D9D9D9] dark:bg-[#3B3B3B] rounded-l-lg"
                    />
                    <AiOutlineSearch className="text-3xl bg-[#D9D9D9] dark:bg-[#3B3B3B] text-[#02A28F] dark:text-[#2C2C2C] h-full rounded-r-lg" />
                  </div>
                  <div>
                    <ul className="text-left text-base font-semibold items-center">
                      <li className="mt-2 text-xl font-bold">Home</li>
                      <li className="mt-2 text-xl font-bold">Tutorial</li>
                      <li className="mt-2 text-xl font-bold">Programming</li>
                      <li className="mt-2 text-xl font-bold">Technology</li>
                    </ul>
                  </div>
                </div>
                <div className=" w-full  h-fit">
                  <div className="h-full mt-4   w-full  flex justify-between flex-col">
                    <div className="w-full h-12 text-left rounded-lg  content-center font-bold text-xl text-white">
                      Popular
                    </div>
                    <Popularinternal />
                    <Popularinternal />
                    <Popularinternal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-2/6 hidden lg:block ">
          <ul className=" flex flex-row justify-between text-base font-semibold items-center">
            <li>Home</li>
            <li>Tutorial</li>
            <li>Programming</li>
            <li>Technology</li>
            <AiOutlineSearch className="text-base" />
          </ul>
        </div>
      </div>
      <button  onClick={theme} className="hidden lg:block absolute right-2 top-2 bg-[#02A28F] dark:bg-white dark:text-black border text-white px-5 py-3 rounded text-sm">Theme Toggle</button>
    </div>
  );
};

export default Navbar;
