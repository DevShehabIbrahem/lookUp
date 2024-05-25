import React, { useEffect } from 'react'
import VideoLazyLoadImage from "../assets/images/whyChooseUs.jpeg"
import Vcyrcle from "../assets/images/SVG/icons/playCyrcle.svg"
import playIcon from "../assets/images/SVG/icons/playIcon.svg"
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const VideoSection = () => {
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
            transition={{ duration: 2 }} className='md:mt-44'>
            <div className='  max-w-[100%] max-auto md:max-w-[1375px] md:h-[550px] relative'>
                <LazyLoadImage src={VideoLazyLoadImage} alt="VideoLazyLoadImage" className='w-full h-full object-cover' />
                <div className='absolute top-0 left-6 leading-[60px] uppercase -mt-[2.7rem] md:-mt-[3.9rem]'>
                    <h3 className=' text-grrenColor text-[30px]  md:text-[79px]'>Where every life </h3>
                    <h3 className=' text-white  text-[30px] md:text-[79px]'> tells a story.</h3>
                </div>
                <div className='absolute inset-0 flex justify-center items-center ' >
                    <div className='relative cursor-pointer'>
                        <LazyLoadImage src={Vcyrcle} alt="Vcyrcle" className='animate-pulse ' />

                        <div className='absolute inset-0 flex justify-center items-center '>
                            <LazyLoadImage src={playIcon} alt="playIcon" />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default VideoSection