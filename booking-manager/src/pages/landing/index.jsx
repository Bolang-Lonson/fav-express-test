import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/VERSION 1.png';
import './splash.css';

const Landing = () => {
    const [slide, setSlide] = useState('slide_1');

    const slides = {
        slide_1: useRef(null),
        slide_2: useRef(null),
        slide_3: useRef(null)
    };

    useEffect(() => {
        if(slide) {
            slides[slide].current.scrollIntoView({behavior: 'smooth'})
        }
    }, [slide]);
    return (
        <div
            className='w-full flex flex-col h-[100vh] relative'
        >
            <div className="slider h-full flex overflow-x-scroll scroll-smooth">
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    ref={slides.slide_1}
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
                    ref={slides.slide_2}
                >
                    <p className='px-8 text-center md:max-w-[40%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa minus aliquam molestiae, voluptatem illum voluptates nulla, delectus eius maiores obcaecati similique rerum! Pariatur architecto autem, tempora sapiente saepe debitis nam.</p>
                </div>
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    ref={slides.slide_3}
                >
                    <p className='px-8 text-center md:max-w-[40%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa minus aliquam molestiae, voluptatem illum voluptates nulla, delectus eius maiores obcaecati similique rerum! Pariatur architecto autem, tempora sapiente saepe debitis nam.</p>
                </div>
            </div>
            
            <div className="px-8 absolute w-full bottom-20">
                <div className='flex flex-row items-center max-md:justify-between relative'>
                    <a
                        className='text-favbluelight font-semibold lg:absolute lg:left-[10%]'
                        href='/mail'
                    >
                        TRACK MAIL
                    </a>
                    <div className='absolute left-1/2 translate-x-[-50%] z-[1] flex gap-4' id='slider-nav'>
                        <button onClick={() => setSlide('slide_1')} className={slide === 'slide_1'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_2')} className={slide === 'slide_2'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_3')} className={slide === 'slide_3'? 'opacity-100': 'opacity-50'}></button>
                    </div>
                    <a 
                        className='text-favbluelight font-semibold lg:absolute lg:right-[10%]'
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