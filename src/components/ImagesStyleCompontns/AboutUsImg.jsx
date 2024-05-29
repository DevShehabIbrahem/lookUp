import backG from "../../assets/images/aboutUs.jpeg"
import Vendor from "../../assets/images/SVG/Vendor.svg"

const AboutUsImg = () => (
    <div className='relative'>
        {/* outLine Border Div */}
        <div className='text-[50rem] text-red-500 absolute w-full h-full top-8 z-20 border-4 border-[#A8513A]'></div>
        {/* /outLine Border Div */}

        <div className='relative w-full md:w-full md:h-[500.11px] lg:h-[600px] left-5 md:left-7 overflow-hidden z-0'>
            {/* main BG Img */}
            <img src={backG} alt="backG" className='w-full h-full object-cover' />
            {/*  /main BG Img */}

            <div className='absolute inset-0 flex items-center justify-end  lg:justify-end w-4/5 md:mx-auto'>
                {/* Vendor Div */}
                <img src={Vendor} alt="Vendor" className='md:pt-36 mix-blend-plus-lighter h-full' />
                {/* / Vendor Div */}

                {/* text Div */}
                <div className='flex flex-col -rotate-90 font-Astegra mix-blend-overlay gap-7 mr-[-2rem] lg:mr-[-9rem]'>
                    <p className='text-[#FFFFFF] text-3xl md:text-[50px] text-left'>Designing</p>
                    <div className='text-[#FFFFFF] text-3xl md:text-[50px] text-left'>
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