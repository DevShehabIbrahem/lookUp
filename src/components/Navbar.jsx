import React, { useState } from 'react'
import MenuIcon from "../assets/images/SVG/icons/hamburrgerIcon.svg"
import langIcon from "../assets/images/SVG/icons/langIcon.svg"
import teleIcon from "../assets/images/SVG/icons/tele.svg"
import logo from "../assets/images/SVG/logo.svg"
import MobileMenu from './MobileMenu'

const Navbar = () => {
    const [toogle, setToogle] = useState(false);

    // 👇 Display the Mobile menu In mobile Screen
    const ToggleMobileMenu = () => {
        setToogle((state) => !state)
    }

    return (
        <nav className=' w-full  md:px-32  my-5 '>
            <div className='flex justify-between items-center px-5 md:px-0'>
                <div className='cursor-pointer w-[20px] md:w-[34.67px] h-lg md:h-[26px]  duration-300 hover:-rotate-90 hover:mt-1 md:hover:mt-0' onClick={ToggleMobileMenu}>
                    <img src={MenuIcon} alt="MenuIcon" className='w-full h-full' />
                </div>
                <div className='w-[180.03px] h-[90px] hidden md:flex'>
                    <img src={logo} alt="langIcon" className='w-full h-full' />
                </div>

                <div className='flex items-center justify-center gap-5 text-grrenColor font-semibold'>
                    <div className='flex items-center space-x-3'>
                        <div className='cursor-pointer'> <img src={teleIcon} alt="langIcon" /></div>
                        <div className="w-[1px] h-[19px] rotate-0 bg-grrenColor"></div>
                        <span className='font-Astegra text-[18px] '>19667</span>
                    </div>

                    <div className='flex items-center space-x-3 cursor-pointer'>
                        <div>اللغة العربية</div>
                        <div><img src={langIcon} alt="langIcon" /></div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu 👇 */}
            {toogle && <MobileMenu ToggleMobileMenu={ToggleMobileMenu} />}
        </nav>
    )
}

export default Navbar