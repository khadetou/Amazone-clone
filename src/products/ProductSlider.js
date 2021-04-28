import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Scrollbar} from 'swiper';
import {AiOutlineGlobal } from "react-icons/ai";
import { FaMoneyBillAlt} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgImport } from "react-icons/cg";
import { MdMyLocation } from "react-icons/md";
import { BiMessageRoundedDots} from "react-icons/bi";
import 'swiper/swiper-bundle.css';

SwiperCore.use([ Scrollbar, Navigation]);
const ProductSlider = () => {

    const icons=[
       <AiOutlineGlobal className="m-auto"/>,
        <FaMoneyBillAlt className="m-auto text-red-500"/>,
        <RiSecurePaymentLine className="m-auto"/>,
        <CgImport className="m-auto"/>,
        <MdMyLocation className="m-auto"/>,
        <BiMessageRoundedDots className="m-auto"/>,
    ]
    const title = [
        <div className="bg-white h-11 mb-5 text-center flex justify-center items-center"><h1 className="font-bold text-lg">Shop in <br/> 8 languages</h1></div>,
        <div className="bg-white h-11 mb-5 text-center flex justify-center items-center"><h1 className="font-bold text-lg">Shop in <br/>60+ currencies</h1></div>,
        <div className="bg-white h-11 mb-5 text-center flex justify-center items-center"><h1 className="font-bold text-lg">Secure <br/> payments</h1></div>,
        <div className="bg-white h-11 mb-5 text-center flex justify-center items-center"><h1 className="font-bold text-lg">Estimated <br/> import fees</h1></div>,
        <div className="bg-white h-11 mb-5 text-center flex justify-center items-center"><h1 className="font-bold text-lg">Track your <br/> package</h1></div>,
        <div className="bg-white h-11 mb-5 text-center flex justify-center items-center"><h1 className="font-bold text-lg">24/7 <br/> Customer Service</h1></div>
    ]


    const slides =[];
    for (let i=0; i<icons.length; i++ ){
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <div className="bg-gray-100 flex rounded-full text-8xl text-center m-auto h-48 w-48 text-red-500 leading-5">{icons[i]}</div>{title[i]}
            </SwiperSlide>
        )
    }
    return (
        <div className="bg-white w-full px-10" style={{width:'1457px'}}>
            <h1 className="font-semibold text-2xl mx-3 py-5 text-gray-700">Discover Amazone <span className="text-lg text-blue-800 font-medium ">click to learn more</span></h1>
            <Swiper scrollbar navigation slidesPerView={6}>
                {slides}
            </Swiper>
        </div>
    )
}

export default ProductSlider
