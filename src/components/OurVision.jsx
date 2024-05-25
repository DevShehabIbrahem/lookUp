import React, { useEffect } from 'react'
import DecComponent from './common/DecComponent'
import OurVisionImg from './ImagesStyleCompontns/OurVisionImg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurVision = () => {
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
            transition={{ duration: 2 }}
            className='md:mt-32 flex flex-col lg:flex-row md:gap-32 container mx-auto'>
            <DecComponent BrownTitle={"Our Reality"} greenTitle={"Your Vision,"} title={"Our Vision"} desc={"We at UC Development Company seek to be a leader in building integrated and sustainable communities, characterized by innovative design and meticulous details that reflect luxury and comfort. We strive to achieve the highest levels of quality and excellence in every project we develop, and we believe that innovation and creativity represent the foundation of our success."} noWrapTitle slider />

            <OurVisionImg />

        </motion.div>
    )
}

export default OurVision