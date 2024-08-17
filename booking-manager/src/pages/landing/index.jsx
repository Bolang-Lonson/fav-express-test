import React from 'react'
import logo from '../../assets/VERSION 1.png'

const Landing = () => {
    return (
        <div
            className='w-full flex flex-col h-[100vh] relative'
        >
            <div className='flex flex-col items-center justify-center h-[80%]'>
                <img
                    src={logo} alt="logo" 
                    className='w-60'
                />
                <h1 className="text-4xl font-semibold text-favblue">FAVOUR EXPRESS ®</h1>
                <h1 className="text-[2.5rem] mt-4 font-semibold">BOOKING MANAGER</h1>
            </div>
            <div className="flex flex-row justify-between px-8 absolute w-full bottom-20">
                <div></div>
                <div>...</div>
                <a 
                    className='text-favbluelight'
                    href='/home'
                >
                    START
                </a>
            </div>
        </div>
    )
}

export default Landing