import React from 'react'
import livingRoom from "../assets/images/living_room.jpeg"

const LivingRoomSection = () => {
    return (
        <div className='md:mt-12 flex justify-center'>
            <div className='relative max-w-[90%] mx-auto overflow-hidden'>
                <img src={livingRoom} alt="livingRoom" className='w-full h-full object-cover' />
                <div className='absolute font-Astegra bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center md:justify-normal px-5 gap-0 bg-white max-w-[90%] md:max-w-[545px] h-[123px]'>
                    <div className='md:text-[48px] md:h-[4.1rem] text-sectionTitle text-center uppercase'>Who we are</div>
                    <div className='md:text-[24px] text-center font-semibold'>
                        <span className='text-grrenColor'>Building Better Futures,</span>
                        <span className='text-sectionTitle'> One Home at a Time</span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default LivingRoomSection