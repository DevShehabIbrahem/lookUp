import React from 'react'
import SilderArrows from './SilderArrows'

const DecComponent = ({ title, greenTitle, BrownTitle, desc, noWrapTitle, slider }) => {

    const ShowSliderArrows = slider && <SilderArrows />

    return (
        <div>
            <span className='uppercase text-sectionTitle font-bold'>{title}</span>
            <div className={`text-[48px] font-Astegra flex ${noWrapTitle ? "flex-row" : "flex-col"} leading-10 my-5`}>
                <h3 className='text-grrenColor'>{greenTitle}</h3>
                <h3 className='text-sectionTitle'>{BrownTitle}</h3>
            </div>
            <p className='leading-7 font-semibold'>{desc}</p>

            {ShowSliderArrows}

        </div>
    )
}

export default DecComponent