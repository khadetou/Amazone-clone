import React from 'react'
const Product = ({id, title, image, marge, button}) => {
    return (
        <div className={!button?`bg-white w-full ${marge} p-5`:`bg-white w-full ${marge} p-5 h-40`}>
            <div className="px-4 mb-3">
                <h1 className="font-bold text-xl">{title}</h1>
            </div>
              {!button?  (<div className={Array.isArray(image)?` grid grid-cols-2 gap-1`:``}>
                    {Array.isArray(image)? (image.map((img,idx)=>(
                        <img src={img} key={image[idx]} alt="img p" className=" h-28"/>)
                    )): (<img src={image} className=" h-3/4 px-3" alt="img p"/>)}

                    <div className={Array.isArray(image)?`mt-28 text-base text-blue-600`:`mt-10 text-base text-blue-600`}>
                        <a href="https://">Shop now</a>
                    </div>
                </div>
                
         
                ): <div className="m-auto"><h1 className="font-bold text-center text-xl mb-5">Sign in for the best experience</h1><button className="block m-auto bg-yellow-400 px-5 w-full shadow-xl outline-none border border-yellow-600 text-center">Sign in securely</button>
                </div>}
           

        </div>
    )
}

export default Product
