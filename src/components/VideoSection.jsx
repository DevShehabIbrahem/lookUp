import React from 'react'
import VideoImg from "../assets/images/whyChooseUs.jpeg"
import Vcyrcle from "../assets/images/SVG/icons/playCyrcle.svg"
import playIcon from "../assets/images/SVG/icons/playIcon.svg"

const VideoSection = () => {
    return (
        <div className='mt-44'>
            <div className='w-[1375px] h-[550px] relative'>
                <img src={VideoImg} alt="VideoImg" className='w-full h-full object-cover' />
                <div className='absolute top-0 left-6 leading-[60px] uppercase -mt-[3.9rem]'>
                    <h3 className=' text-grrenColor text-[79px]'>Where every life </h3>
                    <h3 className=' text-white text-[79px]'> tells a story.</h3>
                </div>
                <div className='absolute inset-0 flex justify-center items-center ' >
                    <div className='relative cursor-pointer'>
                        <img src={Vcyrcle} alt="Vcyrcle" className='animate-pulse ' />

                        <div className='absolute inset-0 flex justify-center items-center '>
                            <img src={playIcon} alt="playIcon" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VideoSection