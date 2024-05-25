import React from 'react'
import RightArrow from '../../assets/images/SVG/icons/sliderRightArrow.svg'
import LeftArrow from '../../assets/images/SVG/icons/leftArrow.svg'

const SilderArrows = () => {
    return (
        <div className='flex items-center gap-3  pt-[2rem] lg:pt-[15rem]'>
            <img src={LeftArrow} alt="LeftArrow" className='cursor-pointer' />
            <img src={RightArrow} alt="RightArrow" className='cursor-pointer' />
        </div>
    )
}

export default SilderArrows