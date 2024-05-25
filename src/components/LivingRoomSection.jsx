import React, { useEffect } from 'react'
import livingRoom from "../assets/images/living_room.jpeg"
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LivingRoomSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 2 }} className=' mt-8 md:mt-12 flex justify-center'>
            <div className='relative max-w-[100%] mx-auto overflow-hidden'>
                <img src={livingRoom} alt="livingRoom" className='w-full h-full object-cover' />
                <div className='absolute font-Astegra bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center md:justify-normal px-5 gap-0 bg-white max-w-[90%] md:max-w-[545px] h-[123px]'>
                    <div className='lg:text-[48px] md:h-[4.1rem] text-sectionTitle text-center uppercase'>Who we are</div>
                    <div className='lg:text-[24px] text-center font-semibold'>
                        <span className='text-grrenColor'>Building Better Futures,</span>
                        <span className='text-sectionTitle'> One Home at a Time</span>
                    </div>
                </div>
            </div>
        </motion.div>


    )
}

export default LivingRoomSection