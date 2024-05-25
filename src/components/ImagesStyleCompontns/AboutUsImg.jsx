import { LazyLoadImage } from "react-lazy-load-image-component"
import backG from "../../assets/images/aboutUs.jpeg"
import Vendor from "../../assets/images/SVG/Vendor.svg"

const AboutUsImg = () => (
    <div className='relative max-w-[100%] h-full mx-auto scale-75 md:scale-100 '>
        {/* outLine Border Div */}
        <div className='text-[50rem] text-red-500 absolute w-full h-full top-8 z-20 border-4  border-[#A8513A]'></div>
        {/* /outLine Border Div */}

        <div className='relative w-full md:w-[547.92px] h-[600.11px] left-8 md:left-16 overflow-hidden z-0'>
            {/* main BG Img */}
            <LazyLoadImage src={backG} alt="backG" className='w-full h-full object-cover' />
            {/*  /main BG Img */}

            <div className='absolute inset-0 flex items-center justify-end'>
                {/* Vendor Div */}
                <img src={Vendor} alt="Vendor" className='md:pt-36 mix-blend-plus-lighter' />
                {/* / Vendor Div */}

                {/* text Div */}
                <div className='flex flex-col -rotate-90 font-Astegra mix-blend-overlay gap-7 md:mr-[-9rem]'>
                    <p className='text-[#FFFFFF] text-3xl md:text-[64px] text-left'>Designing</p>
                    <div className='text-[#FFFFFF] text-3xl md:text-[64px] text-left'>
                        <span>Tomorrow,</span>
                        <span>Today.</span>
                    </div>
                </div>
                {/* / text Div */}
            </div>
        </div>
    </div>

)


export default AboutUsImg