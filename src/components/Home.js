import React from 'react';
import Slider from './Slider';
import '../App.css';
import Product from '../products/Product';
import ProductSlider from '../products/ProductSlider';
const Home = () => {
    const images=[
        "https://www.numerama.com/content/uploads/2017/05/microsoft-surface-laptop-10.jpg",

        "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
        "https://www.homewareexpress.com/wp-content/uploads/2017/12/71AQdj-aJfL._AC_SL1500_.jpg",
        "https://post.healthline.com/wp-content/uploads/2020/09/631237-The-Best-Baby-Breathing-Monitors-732x549-Feature-732x549.jpg"
    ]
    return (
        // {/** Home */ }
        <div>
            {/* Home container */}
            <div className="relative flex justify-center">
                <Slider/>

                {/* Home row products */}
                <div className="flex w-full max absolute top-64 z-10">
                    <Product id="1" title="Shop by Category" marge="mx-5" button={false} image={images}/>

                    <Product id="2" title="Computers & Accesorries" marge="mr-5" button={false} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg" />


                    <Product id="3" title="Get fit at home" marge="mr-5" button={false} image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>

                    <Product id="4" button={true} marge="mr-5"/>
                </div>


                <div className="flex w-full max absolute tp z-10">
                    <Product id="5" title="Shop top Category" marge="mx-5" button={false} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"/>
                    {/* products */}
                    <Product id="6" title="AmazoneBasics" marge="mr-5" button={false} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" />

                    <Product id="7" title="Find your ideals" marge="mr-5" button={false} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg" />

                    <Product id="8" title="Beauty picks" marge="mr-5" button={false} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" />
                    {/* products */}
                    {/* products */}
                </div>

                <div  className="flex justify-center w-full max absolute tp1">
                    {/* Discover amazon */}
                    <ProductSlider/>
                </div>

                <div>
                    {/* top beaut care products */}
                </div>
                
                <div>
                    {/* Amazone top sales */}
                </div>

                <div>
                    {/* products */}
                    {/* products */}
                    {/* products */}
                    {/* products */}
                </div>

                <div>
                    {/* Must have wireless product*/}
                </div>

                <div>
                    {/* Best sellers in baby*/}
                </div>

                <div>
                    {/* Our favorite toys*/}
                </div>

                <div>
                    {/* Men dress under $30*/}
                </div>

                <div>
                    {/* Best seller in kitchen*/}
                </div>
            </div>
        </div>
    )
}

export default Home
