import React from 'react'
import whyChooseImg from "../../assets/images/whychooseusOffice.jpeg"
import wooden from "../../assets/images/woodenDoor.jpeg"
import textSvg from "../../assets/images/TestExp.png"
import BorderSvg from "../../assets/images/SVG/26svgImg.svg"
import NumberSVG from "../../assets/images/SVG/numberSvg.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhyChooseUs = () => {
    return (
        <div>

            <div className='md:w-[581px] h-[600px] md:h-[652px] relative mx-auto scale-75 md:scale-100'>
                <LazyLoadImage src={whyChooseImg} alt="whyChooseImg" className='w-full h-full object-cover' />
                <div className='w-[350px] h-[365.71px] absolute bottom-14 right-0 -mr-24  clip-top-left '>
                    <LazyLoadImage src={wooden} alt="wooden" className='w-full h-full object-cover' />

                </div>
                <div className='relative'>
                    <LazyLoadImage src={textSvg} alt="textSvg" className=' absolute  w-[120px] md:w-[211px] md:h-[90px] bottom-7 z-10 right-32' />
                    <LazyLoadImage src={BorderSvg} alt="BorderSvg" className=' absolute  w-[120px] md:w-[117px] md:h-[204px] bottom-7 z-10 left-14' />
                    <LazyLoadImage src={NumberSVG} alt="NumberSVG" className=' absolute  w-[120px] md:w-[100px] md:h-[77px] bottom-7 z-10 left-28' />
                </div>
            </div>


        </div>
    )
}

export default WhyChooseUs