import React from 'react'
import { BiMap } from "react-icons/bi";
import { GoSearch,GoTriangleDown } from "react-icons/go";
import { MdAddShoppingCart } from 'react-icons/md';
import Amazon from '../img/Amazon_logo.svg';
import Flag from '../img/senegal.svg';

const Header = () => {
  


    return (
        //Header
        <div className="bg-gray-900 h-16 flex items-center py-1 box-content top-0 z-50 ">

            <div className="flex justify-evently ml-3">
                           {/* Amazone logo */}
                    <div className=" border border: border-transparent hover:border-white mr-2 px-1 py-2">
                        <img className=" h-7 mt-1 object-contain cursor-pointer" src={Amazon} alt=""/>
                    </div>

                    {/* Select your Address */}
                    <div className="cursor-pointer flex items-center border border: border-transparent hover:border-white py-2">
                        <BiMap className="text-white mt-3 text-xl"/> 
                        <div className="flex flex-col justify-center w-20">
                            <span className="text-xs text-gray-300">Deliver to</span>
                            <span className="text-sm font-bold text-white pt-0 mt-0">Senegal</span>
                        </div>
                    </div>
            </div>

            {/* Header Search */}
            <div className="flex flex-1 items-center rounded-3xl mx-2 relative">
                        <button className=" absolute left-0 bg-gray-200 border-r-2 border-gray-300 px-2 h-10 font-medium text-xs text-gray-600 rounded-l-md hover:bg-gray-400 hover:text-gray-800">
                            <span className="mr-5">All </span>
                            <GoTriangleDown className="absolute right-2 top-4"/>
                        </button>

                        <input className="h-4 px-16 py-5 border-0 w-full outline-none max-w-5xl focus:ring-4 focus:ring-yellow-600 rounded-lg" type="text"/>

                        <GoSearch className="absolute right-0 text-5xl text-gray-900 h-10 p-2 rounded-r-md bg-yellow-300 hover:bg-yellow-500"/>
                    </div>

            {/* Header navigation */}
            <div className=" flex mr-2">

                  {/* Languages */}
            <div className=" flex flex-col mx-1 border border: border-transparent hover:border-white px-1 py-2 box-content ">
                <button className="relative p-3 hover:border hover:border-2 focus:outline-none">
                    <img className=" h-3" src= {Flag} alt=""/>
                    <GoTriangleDown className="absolute left-8 text-xs top-4 text-gray-500"/>
                </button>
            </div>

                {/* Sign-in */}
                <div className="flex flex-col mr-1 text-white cursor-pointer border border: border-transparent hover:border-white px-2 py-2">
                    <span className="text-xs text-gray-300">Hello, Sign in</span>
                    <span className="text-sm font-bold text-white">Account & List</span>
                </div>

                {/* Return orders */}
                <div className="flex flex-col mr-1 text-white cursor-pointer border border: border-transparent hover:border-white px-2 py-2">
                    <span className="text-xs text-gray-300">Returns</span>
                    <span className="text-sm font-bold text-white">& Orders</span>
                </div>

                {/* Your prime */}
                <div className="flex flex-col mr-1 px-2 py-2 text-white cursor-pointer border border: border-transparent hover:border-white">
                    <span className="text-xs text-gray-300">Your</span>
                    <span className="text-sm font-bold text-white">Prime</span>
                </div>

                {/* Cart items */}
                <div className="flex flex-row ml-1 text-white cursor-pointer relative border border: border-transparent hover:border-white px-2 py-2">
                    <span className="absolute right-13 bottom-7 z-50 text-yellow-600 font-bold ">0</span>
                    <div className="relative before:empty-content">
                         <MdAddShoppingCart className=" text-4xl" />
                    </div>
                    <span className="text-sm font-bold text-white mt-4">Cart</span>
                </div>
            </div>

        </div>
    )
}

export default Header
