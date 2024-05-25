import React from 'react'
import whyChooseImg from "../../assets/images/whychooseusOffice.jpeg"
import wooden from "../../assets/images/woodenDoor.jpeg"
import textSvg from "../../assets/images/TestExp.png"
import BorderSvg from "../../assets/images/SVG/26svgImg.svg"
import NumberSVG from "../../assets/images/SVG/numberSvg.svg"
const WhyChooseUs = () => {
    return (
        <div>

            <div className='w-[581px] h-[652px] relative'>
                <img src={whyChooseImg} alt="whyChooseImg" className='w-full h-full object-cover' />
                <div className='w-[350px] h-[365.71px] absolute bottom-14 right-0 -mr-24  clip-top-left '>
                    <img src={wooden} alt="wooden" className='w-full h-full object-cover' />

                </div>
                <div className='relative'>
                    <img src={textSvg} alt="textSvg" className=' absolute w-[211px] h-[90px] bottom-7 z-10 right-32' />
                    <img src={BorderSvg} alt="BorderSvg" className=' absolute w-[117px] h-[204px] bottom-7 z-10 left-14' />
                    <img src={NumberSVG} alt="NumberSVG" className=' absolute w-[100px] h-[77px] bottom-7 z-10 left-28' />
                </div>
            </div>


        </div>
    )
}

export default WhyChooseUs