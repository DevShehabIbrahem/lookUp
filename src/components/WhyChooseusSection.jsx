import React from 'react'
import DecComponent from './common/DecComponent'
import WhyChooseUs from './ImagesStyleCompontns/WhyChooseUs'
import CompontnsLayout from './responsiveLayout/CompontnsLayout'

const WhyChooseusSection = () => {
    return (
        <CompontnsLayout>
            <div className="flex-1 p-4 ">
                <WhyChooseUs />
            </div>
            <div className="flex-1 p-4 ">
                <DecComponent title={"why choose Us"} greenTitle={"Beyond Walls: "} BrownTitle={"We Build Lifestyles."} desc={"The investment in the New Administrative Capital came out of our belief that the New Capital will be the superior commercial city in the Middle East due to its advantages that make it a touristic, cultural, and entertainment dazzling capital, which makes the whole world eager to visit and invest in it especially after the tremendous signs of progress that have been achieved on ground and the great interest of the political leadership in this civilizational project."} slider whyChooseSection />
            </div>
        </CompontnsLayout>
    )
}

export default WhyChooseusSection