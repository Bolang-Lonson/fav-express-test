import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/VERSION 1.png';
import Accordion from 'react-bootstrap/Accordion'
import './splash.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
    const [slide, setSlide] = useState('slide_1');  // slide currently displayed

    const slides = {
        slide_1: useRef(null),
        slide_2: useRef(null),
        slide_3: useRef(null)
    };

    // scrolls to slide when slide value is set by slider nav
    useEffect(() => {
        if(slide) {
            slides[slide].current.scrollIntoView({behavior: 'smooth'})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide]);
    
    return (
        <div
            className='w-full flex flex-col h-[100vh] relative'
        >
            <div className="slider h-full flex overflow-x-scroll scroll-smooth lg:max-w-[70%] w-full mx-auto">
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    ref={slides.slide_1}
                >
                    <img
                        src={logo} alt="logo" 
                        className='w-60'
                    />
                    <h1 className="md:text-4xl text-2xl font-semibold text-favblue">FAVOUR EXPRESS ®</h1>
                    <h1 className="md:text-[2.5rem] text-[2rem] mt-4 font-semibold">BOOKING MANAGER</h1>
                    <p className="text-[16px] lg:text-[20px] mt-4">Yaounde - Douala - Buea - Limbe - Kumba</p>
                </div>
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    ref={slides.slide_2}
                >
                    <div 
                        className="bus-card w-full h-full relative lg:w-4/5 lg:rounded-3xl"
                    >
                        <p className="text-amber-200 font-serif absolute bottom-[15%] text-center text-xl font-bold left-1/2 translate-x-[-50%]">We Offer First-Class Inter-Urban Road Travel</p>
                    </div>
                </div>
                <div 
                    className='flex flex-col text-center items-center justify-center h-[80%]'
                    ref={slides.slide_3}
                >
                    <div className="w-full h-full faq-card py-6 lg:py-16 overflow-y-auto">
                        <h1 className='text-3xl font-bold'>FAQ</h1>
                        <div id="accordion-container" className='mx-4 mt-4 border rounded'>
                            {[1, 2, 3, 4, 5].map(idx => (
                                <Accordion defaultActiveKey={0}>
                                    <Accordion.Item eventKey={idx}>
                                        <Accordion.Header className='accord-head'>Question {idx}</Accordion.Header>
                                        <Accordion.Body className=' bg-body-tertiary'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas facere sequi debitis blanditiis hic assumenda, corporis asperiores repellendus quod minus magni totam repellat dicta vero numquam unde cupiditate. Totam!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            ))}
                        </div>
                        <form action="" className='mt-4 mx-4'>
                            <h1 className='text-3xl font-bold'>Complaints</h1>
                            <div className="input-group mb-3 mt-3">
                                <input type="text" className="form-control" id="name" placeholder='Phone number'/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="name" placeholder='Enter your name(optional)'/>
                            </div>
                            <div className="input-group mb-3">
                                <textarea name="issue" id="issue" className="form-control h-[100px]" placeholder='Type in your issue or complaint'></textarea>
                            </div>
                            <button type="submit" className='text-white font-semibold max-md:text-xs bg-favbluelight py-2 px-3 rounded-md hover:opacity-80'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="px-8 absolute w-full bottom-14">
                <div className='flex flex-row items-center max-md:justify-between relative'>
                    <a
                        className='text-favbluelight font-semibold lg:absolute lg:left-[10%] max-md:text-xs max-md:translate-x-[-7%] border border-favbluelight py-2 px-3 rounded-md hover:bg-favbluelight hover:text-white'
                        href='/mail'
                    >
                        Track Parcels
                        <i className="bi bi-box-seam ms-1"></i>
                    </a>
                    <div className='absolute left-1/2 translate-x-[-50%] z-[1] flex gap-4' id='slider-nav'>
                        <button onClick={() => setSlide('slide_1')} className={slide === 'slide_1'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_2')} className={slide === 'slide_2'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_3')} className={slide === 'slide_3'? 'opacity-100': 'opacity-50'}></button>
                    </div>
                    <a 
                        className='text-white font-semibold lg:absolute lg:right-[10%] max-md:text-xs max-md:translate-x-[7%] bg-favbluelight py-2 px-3 rounded-md hover:opacity-80'
                        href='/home'
                    >
                        Book Ticket
                        <i className="bi bi-ticket-perforated-fill ms-1"></i>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;