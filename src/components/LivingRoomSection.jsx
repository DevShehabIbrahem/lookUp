import React from 'react'
import livingRoom from "../assets/images/living_room.jpeg"

const LivingRoomSection = () => {
    return (
        <div className='mt-12'>
            <div div className=' relative w-[1375px] h-[500px] mx-auto mt-10 overflow-hidden' >
                <img src={livingRoom} alt="livingRoom" className='w-full h-full object-cover ' />
                <div className=' absolute font-Astegra  bottom-0 left-[30.333333%] flex flex-col gap-0 bg-white w-[545px] h-[123px]'>
                    <div className='text-[48px] h-[4.1rem]  text-sectionTitle text-center uppercase'>Who we are </div>
                    <div className='text-[24px] text-center font-semibold'>
                        <span className='text-grrenColor'>Building Better Futures,</span>
                        <span className='text-sectionTitle'> One Home at a Time</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default LivingRoomSection