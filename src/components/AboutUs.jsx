import React from 'react'

// 👇 Resusble Component for dynamc desc Side
import DecComponent from './common/DecComponent'
import AboutUsImg from './ImagesStyleCompontns/AboutUsImg'

const AboutUs = () => {
    return (
        <div className='md:mt-32  flex flex-col md:flex-row md:gap-32'>
            <AboutUsImg />

            <DecComponent BrownTitle={"One Home at a Time"} desc={"UC  Developments is a leading entity, boasting more than twenty years of extensive expertise in the field of construction and real estate investment. Founded through a strategic merger, combining numerous real estate companies across the engineering, architectural, marketing consultancy and project management fields, UC introduces a holistic vision of integrated excellence under one roof. Our elemental edge lies in an expert team of well-rounded professionals who control the entire development cycle from concept to impressive completion, transforming sites into dream-like realities where quality is unrivaled.Since its early origins, UC Development has been challenging the conventional boundaries of space through an innovative vision of integrated distinction that re-imagines contemporary lifestyles through landmark, mixed-use developments that enrich communities’ daily life. By partnering with leading names in every field, we grant our investors limitless opportunities to thrive in key locations across Egypt that fulfill modern-day needs, thanks to a cutting-edge administrative offices, luxury retail experiences and expansive residential units."} greenTitle={"Building Better Futures,"} title={"About Us"} />

        </div>
    )
}

export default AboutUs