import React from 'react'
import logo from "../assets/images/SVG/logo.svg"
import closeIcon from "../assets/images/SVG/icons/closeIcon.svg"

const MobileMenu = ({ ToggleMobileMenu }) => {
    return (
        <div className="fixed top-0 left-0 z-30 min-h-screen bg-grrenColor">
            <div className="p-4 relative z-20">
                <img src={logo} alt="Logo" />
                <button
                    onClick={ToggleMobileMenu}
                    className="text-black focus:outline-none absolute top-0 right-0"
                >
                    <img src={closeIcon} alt="Close Icon" className="w-6 h-6" />
                </button>
            </div>
            <ul className="mt-2 space-y-2">
                <li><a href="/" className="block text-sectionTitle py-2 px-4">Home</a></li>
                <li><a href="/about" className="block text-sectionTitle py-2 px-4">About Us</a></li>
                <li><a href="/contact" className="block text-sectionTitle py-2 px-4">Contact</a></li>
            </ul>
        </div>
    )
}

export default MobileMenu