import React, { Fragment } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, Navigation]);
const Slider = () => {
    const images =[
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/CurrencyConverter/2020/AMZ_Associates_ACC_Banner_Evergreen_1500x600_v2._CB415565312_.jpg"
    ];
    const slides = [];

    for(let i =0; i<images.length; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={`${images[i]}`} alt={`slide ${i}`} className="m-auto"/>
            </SwiperSlide>
        )
    }
    return (
        <Fragment>
            <Swiper navigation autoplay={{delay:5005}} spaceBetween={40} loop>
                {slides}
            </Swiper>
        </Fragment>
    )
}

export default Slider
