import React from 'react'
import contactUs from "../assets/images/cintactUs.jpeg"

const ContactusSection = () => {
    return (
        <div className='mt-32'>
            <div className='w-full h-[700px] relative'>
                <img src={contactUs} alt="contactUs" className='w-full h-full object-cover' />
                <div className='absolute top-0 bg-gradient-to-b from-[#06535b] to-[#06535b71] opacity-[.7] w-full h-full' ></div>

                <div className='absolute inset-0 text-center top-24'>
                    <h3>shehab</h3>
                </div>

            </div>

        </div >
    )
}

export default ContactusSection