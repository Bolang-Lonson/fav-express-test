import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/VERSION 1.png';
import buspic from '../../assets/landpic.jpg';
import './splash.css';
import faqs from './faqs.json';

const Landing = () => {
    const [slide, setSlide] = useState('slide_1');  // slide currently displayed
    const [isScrolled, setIsScrolled] = useState(false);

    const slides = {
        slide_1: useRef(null),
        slide_2: useRef(null),
        slide_3: useRef(null)
    };

    // scrolls to slide when slide value is set by slider nav
    useEffect(() => {
        if(slide) {
            slides[slide].current.scrollIntoView({behavior: 'smooth'});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide]);

    // Detecting scroll activity to find which slide is in view by calculating slide center distance to slide container center
    const containerRef = useRef(null);
    const container = containerRef.current;
    useEffect(() => {
        if (container) {
            const rect = container.getBoundingClientRect();
            const centX = rect.left + rect.width / 2;

            Object.entries(slides).forEach(slide => {
                const sld = slide[1].current;
                if (sld) { 
                    const rect2 = sld.getBoundingClientRect();
                    const cent2X = rect2.left + rect2.width / 2;

                    if (Math.abs(cent2X - centX) <= (rect2.width / 2)) {setSlide(slide[0])}
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isScrolled]);

    const [isOpen, setIsOpen] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    });

    const toggleOpen = (idx) => {
        setIsOpen({...isOpen, [idx]: !isOpen[idx]})
    }
    
    return (
        <div
            className='w-full flex flex-col h-[100vh] relative'
        >
            <div 
                className="slider basis-[90%] flex overflow-x-scroll lg:max-w-[70%] w-full mx-auto" 
                ref={containerRef} onScroll={() => setTimeout(() => setIsScrolled(!isScrolled), 500)}
            >
                    {/* Logo slide */}
                <div 
                    className='flex flex-col text-center items-center justify-around h-full slide'
                    ref={slides.slide_1} id='splash'
                >
                    <img
                        src={logo} alt="logo" 
                        className='w-60'
                    />
                    <div>
                        <h1 className="md:text-4xl text-[1.75rem] font-roboto text-favblue">FAVOUR EXPRESS ®</h1>
                        <h1 className="md:text-[2.5rem] text-[1.75rem] mt-4 font-semibold">BOOKING MANAGER</h1>
                        <p className="text-[14px] font-roboto lg:text-[21px] mt-4">Yaounde - Douala - Buea - Limbe</p>
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center justify-evenly lg:justify-between w-full">
                        <a
                            className='text-favblue font-roboto border border-favblue py-2 px-3 rounded-lg hover:bg-favblue hover:text-white'
                            href='/mail'
                        >
                            Track Parcel
                            <i className="bi bi-box-seam ms-2"></i>
                        </a>
                        <a 
                        className='text-white font-semibold bg-favblue py-2 px-3 rounded-lg hover:opacity-90 flex'
                        href='/home'
                        >
                            Book Ticket
                            <i className="bi bi-ticket-perforated-fill ms-2"></i>
                        </a>
                    </div>
                </div>
                    {/* Services Info Slide */}
                <div 
                    className='flex flex-col text-center items-center justify-evenly h-full slide'
                    ref={slides.slide_2}
                >
                    <img 
                        src={buspic} alt="bus"
                        className='w-72 h-[283px] md:w-[70%] md:h-[50%] rounded-xl object-cover'
                    />
                    <div className='flex flex-col gap-3 pt-0'>
                        <h1 className="md:text-4xl text-[2rem] font-roboto text-favblue">What we offer</h1>
                        <p className="text-[16px] font-roboto lg:text-[21px] text-center px-16">Bus transportation first class and classic buses across center region(Yaounde) & South West Region <br />(Buea, Limbe & Kumba).</p>
                        <p className="text-[16px] font-roboto lg:text-[21px] text-center">More <a href="/about-us" className=' underline'>about us</a></p>
                    </div>
                    <div className="flex items-center justify-evenly lg:justify-between w-full">
                        <a
                            className='text-favblue font-roboto border border-favblue py-2 px-3 rounded-lg hover:bg-favblue hover:text-white'
                            href='/mail'
                        >
                            Track Parcel
                            <i className="bi bi-box-seam ms-2"></i>
                        </a>
                        <a 
                        className='text-white font-semibold bg-favblue py-2 px-3 rounded-lg hover:opacity-90 flex'
                        href='/home'
                        >
                            Book Ticket
                            <i className="bi bi-ticket-perforated-fill ms-2"></i>
                        </a>
                    </div>
                </div>
                    {/* FAQ Slide */}
                <div 
                    className='flex flex-col text-center items-center justify-center h-full slide'
                    ref={slides.slide_3}
                >
                    <div className="w-full h-full faq-card py-6 lg:py-16 overflow-y-auto">
                        <h1 className='text-3xl font-bold'>FAQs</h1>
                        {/* Accordion */}
                        <div id="accordion-container" className='mx-4 lg:mx-16 mt-4 rounded-md'>
                            {faqs.slice(0, 5).map((faq, idx) => (
                                    <div className="w-full cursor-pointer" key={idx}>
                                        <div 
                                            className={`max-md:text-xs py-2 text-start px-2 lg:px-8 flex items-center justify-between border-b ${idx ===0? 'border-t': ''}`}
                                            onClick={() => toggleOpen(idx)}
                                        >
                                            {faq.question}
                                            <button 
                                                className={`bi ${isOpen[idx]? 'bi-dash': 'bi-plus'} text-xl lg:text-3xl hover:text-blue-600`} 
                                                id='plusbtn'
                                            ></button>
                                        </div>
                                        <div 
                                            className={`${isOpen[idx]? 'lg:max-h-52 max-h-28 overflow-y-scroll':'max-h-0'} bg-slate-100 overflow-hidden border-x`}
                                            style={{
                                                transition: 'max-height ease-in-out 0.5s',
                                            }}
                                        >
                                            <p className="p-4 max-md:text-xs">{faq.answer}</p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <form action="" className='mt-8 mx-4'>
                            <h1 className='text-2xl font-bold mb-6'>Submit Complaints</h1>
                            <div className="w-[90%] lg:w-1/2 h-10 my-5 mx-auto">
                                <input type="text" className="w-full h-full px-7 border-2 focus:outline-none focus:border-green-600 rounded-md" id="name" placeholder='Phone number'/>
                            </div>
                            <div className="w-[90%] lg:w-1/2 h-10 my-5 mx-auto">
                                <input type="text" className="w-full h-full px-7 border-2 focus:outline-none focus:border-green-600 rounded-md" id="name" placeholder='Enter your name(optional)'/>
                            </div>
                            <div className="w-[90%] lg:w-1/2 h-24 my-5 mx-auto">
                                <textarea name="issue" id="issue" className="w-full h-full px-7 py-2 border-2 focus:outline-none focus:border-green-600 rounded-md" placeholder='Type in your issue or complaint'></textarea>
                            </div>
                            <button type="submit" className='text-white font-semibold max-md:text-xs bg-favblue py-2 px-3 rounded-md hover:opacity-90'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Bottom navigation */}
            <div className="px-8 w-full basis-[10%]">
                <div className='flex items-center justify-between lg:justify-around h-full'>
                    {// Prev button shows up as from 2nd page. Skip shows on first page
                    (slide !== 'slide_1')?
                    <button 
                        className="text-favbluelight" 
                        onClick={
                            () => {
                                let slideNum = slide.charAt(6);
                                let prevSlide = `slide_${+slideNum - 1}`;
                                setSlide(prevSlide);
                            }
                        }
                    >
                        Prev
                    </button>
                    :
                    <button className="text-favbluelight" onClick={() => setSlide('slide_3')}>Skip</button>
                    }
                    <div className='z-[1] flex gap-2' id='slider-nav'>
                        <button onClick={() => setSlide('slide_1')} className={slide === 'slide_1'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_2')} className={slide === 'slide_2'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_3')} className={slide === 'slide_3'? 'opacity-100': 'opacity-50'}></button>
                    </div>
                    {// Next shows only on first 2 pages
                    (slide !== 'slide_3' )?
                    <button 
                        className="text-favbluelight"
                        onClick={
                            () => {
                                let slideNum = slide.charAt(6);
                                let nextSlide = `slide_${+slideNum + 1}`;
                                setSlide(nextSlide);
                            }
                        }
                    >
                        Next
                    </button>
                    :
                    <div className='text-transparent'>Next</div>}
                </div>
            </div>
        </div>
    );
}

export default Landing;