import React, { useState } from 'react'
import SilderArrows from './SilderArrows'

const DecComponent = ({ title, greenTitle, BrownTitle, desc, noWrapTitle, slider, whyChooseSection }) => {

    const [fullphara, setFullphara] = useState(false);

    const ShowSliderArrows = slider && <SilderArrows />

    const whyChooseSectionss = whyChooseSection ? (<p> <span className='text-grrenColor'>{greenTitle}</span>
        <span className='text-sectionTitle'>{BrownTitle}</span>
    </p>) : (<>
        <h3 className='text-grrenColor'>{greenTitle}</h3>
        <h3 className='text-sectionTitle'>{BrownTitle}</h3>
    </>)


    return (
        <div className='container mx-auto'>
            <span className='uppercase text-sectionTitle font-bold   font-sans'>{title}</span>
            <div className={`text-[30px] flex-wrap  lg:text-[48px] font-Astegra flex ${noWrapTitle ? "flex-row" : "flex-col"} leading-10 my-5 text-[30px]`}>
                {whyChooseSectionss}
            </div>

            <p className={`leading-7 lg:line-clamp-none  ${!fullphara ? "line-clamp-5" : "line-clamp-0"} max-w-[581px]  font-semibold`}>{desc}</p>

            <span onClick={() => setFullphara(!fullphara)} className={`rounded-full lg:hidden cursor-pointer  bg-[#488d9944] p-1 px-3 text-[14px] outline-none`}> {!fullphara ? "Show More" : "show less"}</span>

            {ShowSliderArrows}

        </div >
    )
}

export default DecComponent