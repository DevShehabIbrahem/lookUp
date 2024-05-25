import React, { useEffect } from 'react'
import DecComponent from './common/DecComponent'
import WhyChooseUs from './ImagesStyleCompontns/WhyChooseUs'
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseusSection = () => {
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
            transition={{ duration: 2 }} className='md:mt-32 flex flex-col lg:flex-row md:gap-32 container mx-auto'>
            <WhyChooseUs />
            <DecComponent title={"why choose Us"} greenTitle={"Beyond Walls: "} BrownTitle={"We Build Lifestyles."} desc={"The investment in the New Administrative Capital came out of our belief that the New Capital will be the superior commercial city in the Middle East due to its advantages that make it a touristic, cultural, and entertainment dazzling capital, which makes the whole world eager to visit and invest in it especially after the tremendous signs of progress that have been achieved on ground and the great interest of the political leadership in this civilizational project."} slider whyChooseSection />
        </motion.div>
    )
}

export default WhyChooseusSection