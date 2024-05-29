import React from 'react'

const CompontnsLayout = ({ children }) => {
    return (
        <div className='flex flex-col md:flex-row between mt-8 md:mt-40 gap-8 md:items-center'>{children}</div>
    )
}

export default CompontnsLayout