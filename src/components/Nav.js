import React from 'react';
import { BiMenu } from "react-icons/bi";
import '../App.css';
const Nav = () => {
    return (
        // Main container
        <div className=" bg-gray-700 flex items-center text-white font-medium text-sm p-1">
            {/* Button list */}
           <div className="w-12 ml-3 flex items-center border border-transparent hover:border-white cursor-pointer">
                <BiMenu className=" font-bold text-2xl"/>
                <span>All</span>
           </div>
           
            <div className="flex items-center justify-between w-full mx-2">
                      {/*  */}
                <div>
                        <span className="mx-1 p-1 border border-transparent hover:border-white cursor-pointer">Today's deal</span>
                        <span className="mx-1 p-1 border border-transparent hover:border-white cursor-pointer">Customer service</span>
                        <span className="mx-1 p-1 border border-transparent hover:border-white cursor-pointer">Gift Cards</span>
                        <span className="mx-1 p-1 border border-transparent hover:border-white cursor-pointer">Sell</span>
                        <span className="mx-1 p-1 border border-transparent hover:border-white cursor-pointer">Registry</span>
                </div>

                {/* Covid 19 */}
                <div className="mx-2 p-1 border border-transparent hover:border-white cursor-pointer">
                        <span className="mr-1">Amazon's reponse to</span>
                        <span className="font-bold">COVID-19</span>
                </div>
        
            </div>
        </div>
    )
}

export default Nav
