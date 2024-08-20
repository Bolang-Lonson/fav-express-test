import React from 'react'
import logo from '../../assets/VERSION 1.png'
import './splash.css';

const Landing = () => {
    return (
        <div
            className='w-full flex flex-col h-[100vh] relative'
        >
            <div className="slider h-full flex overflow-x-scroll scroll-smooth">
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    id='slide-1'
                >
                    <img
                        src={logo} alt="logo" 
                        className='w-60'
                    />
                    <h1 className="md:text-4xl text-3xl font-semibold text-favblue">FAVOUR EXPRESS ®</h1>
                    <h1 className="md:text-[2.5rem] text-[2.5rem] mt-4 font-semibold">BOOKING MANAGER</h1>
                </div>
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    id='slide-2'
                >
                    <p className='px-8 text-center md:max-w-[40%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa minus aliquam molestiae, voluptatem illum voluptates nulla, delectus eius maiores obcaecati similique rerum! Pariatur architecto autem, tempora sapiente saepe debitis nam.</p>
                </div>
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    id='slide-3'
                >
                    <p className='px-8 text-center md:max-w-[40%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa minus aliquam molestiae, voluptatem illum voluptates nulla, delectus eius maiores obcaecati similique rerum! Pariatur architecto autem, tempora sapiente saepe debitis nam.</p>
                </div>
            </div>
            
            <div className="px-8 absolute w-full bottom-20">
                <div className='flex flex-row items-center justify-between relative'>
                    <a
                        className='text-favbluelight font-semibold'
                        href='/mail'
                    >
                        TRACK MAIL
                    </a>
                    <div className='absolute left-1/2 translate-x-[-50%] z-[1] flex gap-4' id='slider-nav'>
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                    <a 
                        className='text-favbluelight font-semibold'
                        href='/home'
                    >
                        START
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Landing