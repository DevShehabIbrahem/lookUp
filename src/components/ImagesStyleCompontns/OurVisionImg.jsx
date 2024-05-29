import React from 'react'
import backG from "../../assets/images/OurVision.jpeg"

const OurVisionImg = () => {
    return (
        <div className='relative w-full h-[600.11px] mx-auto'>
            <div class="relative w-full h-full  overflow-hidden z-0 mx-auto">
                {/* main BG Img */}
                <img src={backG} alt="backG" class="w-full h-full object-cover" />
                {/*  /main BG Img */}
                <div class="absolute inset-0 ml-[-91px] md:ml-[-40px] lg:ml-auto flex items-center justify-center w-[38rem]">
                    {/* text Div */}
                    <div className='-rotate-90 font-Astegra mix-blend-overlay h-[149px] w-full bg-sectionTitle'>
                        <div class="text-[#FFFFFF]  flex justify-center items-center text-3xl text-[64px] text-center w-full h-full ">
                            <span>Our Vision</span>
                        </div>
                        <div className='absolute top-0 right-0 border-2 border-white w-1/2'></div>
                        <div className='absolute bottom-0 left-0 border-2 border-white w-1/2'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurVisionImg