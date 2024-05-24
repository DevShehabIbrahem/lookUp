import React from 'react'
import backG from "../assets/images/aboutUs.jpeg"
import Vendor from "../assets/images/SVG/Vendor.svg"
import RightSide from './RightSide'
const AboutUs = () => {
    return (
        <div className=' mt-32 flex gap-40'>


            <div className='relative  w-[547.92px] h-[600.11px]'>
                {/* outLine Border Div */}
                <div className='text-[50rem] text-red-500 absolute w-full h-full top-8  z-20 border-4 border-[#A8513A]'></div>
                {/* /outLine Border Div */}

                <div class="relative w-[547.92px] h-[600.11px] left-16 overflow-hidden z-0">
                    {/* main BG Img */}
                    <img src={backG} alt="backG" class="w-full h-full object-cover" />
                    {/*  /main BG Img */}

                    <div class="absolute inset-0 flex items-center justify-end">
                        {/* Vendor Div */}
                        <img src={Vendor} alt="Vendor" className='mix-blend-plus-lighter pt-36' />
                        {/* / Vendor Div */}

                        {/* text Div */}
                        <div className='flex flex-col -rotate-90 font-Astegra mix-blend-overlay gap-7 mr-[-9rem]'>
                            <p class="text-[#FFFFFF] text-3xl text-[64px] text-left ">Designing</p>
                            <div class="text-[#FFFFFF] text-3xl text-[64px] text-left ">
                                <span>Tomorrow,</span>
                                <span>Today.</span>
                            </div>
                        </div>
                        {/* / text Div */}


                    </div>
                </div>
            </div>

            <div className=''>
                <RightSide />
            </div>

        </div>
    )
}

export default AboutUs