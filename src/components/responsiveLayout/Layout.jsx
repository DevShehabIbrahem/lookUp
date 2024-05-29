import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <main className='flex-grow p-4'>
                <div className="container mx-auto">
                    {children}
                </div>
            </main>

        </div>
    )
}

export default Layout