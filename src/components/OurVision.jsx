import React from 'react'
import DecComponent from './common/DecComponent'
import OurVisionImg from './ImagesStyleCompontns/OurVisionImg'
import CompontnsLayout from './responsiveLayout/CompontnsLayout'

const OurVision = () => {
    return (
        <CompontnsLayout>
            <div className="flex-1 p-4 ">
                <DecComponent BrownTitle={"Our Reality"} greenTitle={"Your Vision,"} title={"Our Vision"} desc={"We at UC Development Company seek to be a leader in building integrated and sustainable communities, characterized by innovative design and meticulous details that reflect luxury and comfort. We strive to achieve the highest levels of quality and excellence in every project we develop, and we believe that innovation and creativity represent the foundation of our success."} noWrapTitle slider />
            </div>
            <div className="flex-1 p-4 ">

                <OurVisionImg />
            </div>
        </CompontnsLayout>
    )
}

export default OurVision