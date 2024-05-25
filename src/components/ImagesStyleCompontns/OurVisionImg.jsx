import React from 'react'
import backG from "../../assets/images/OurVision.jpeg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const OurVisionImg = () => {
    return (
        <div className='relative  lg:w-[547.92px] h-[600.11px] scale-75 lg:scale-100'>
            <div class="relative lg:w-[547.92px] h-[600.11px]  overflow-hidden z-0">
                {/* main BG Img */}
                <LazyLoadImage src={backG} alt="backG" class="w-full h-full object-cover" />
                {/*  /main BG Img */}

                <div class="absolute inset-0 left-20 flex items-center justify-center w-[38rem]">
                    {/* text Div */}
                    <div className='-rotate-90 font-Astegra mix-blend-overlay  h-[149px]  w-full bg-sectionTitle'>
                        <div class="text-[#FFFFFF]  flex justify-center items-center text-3xl text-[64px] text-center w-full h-full ">
                            <span className=''>Our Vision</span>
                        </div>
                        <div className='absolute top-0 right-0 border-2 border-white w-1/2 '></div>
                        <div className='absolute bottom-0 left-0 border-2 border-white w-1/2 '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVisionImg