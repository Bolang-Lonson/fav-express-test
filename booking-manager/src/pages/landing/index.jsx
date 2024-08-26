import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/VERSION 1.png';
import buspic from '../../assets/landpic.jpg';
import './splash.css';

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
            // calculating horizontal position of slider center
            const rect = container.getBoundingClientRect();
            const centX = rect.left + rect.width / 2;

            Object.entries(slides).forEach(slide => {
                const sld = slide[1].current;
                if (sld) { 
                    // calculating horizontal position of current slide center
                    const rect2 = sld.getBoundingClientRect();
                    const cent2X = rect2.left + rect2.width / 2;

                    if (Math.abs(cent2X - centX) <= (rect2.width / 2)) {setSlide(slide[0])}
                }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isScrolled]);
    
    return (
        <div
            className='w-full flex flex-col h-[100vh] relative'
        >
            <div 
                className="slider basis-[85%] flex overflow-x-scroll lg:max-w-[70%] w-full mx-auto" 
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
                    <div className='flex flex-col gap-2 lg:gap-3 pt-0'>
                        <h1 className="md:text-4xl text-[28px] font-roboto text-favblue">Our Services</h1>
                        <p className="text-[14px] font-roboto lg:text-[21px] text-center px-16">Bus transportation first class and classic buses across center region(Yaounde) & South West Region <br />(Buea, Limbe & Kumba).</p>
                        <p className="text-[14px] font-roboto lg:text-[21px] text-center">More <a href="/about-us" className=' underline'>about us</a></p>
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
                    {/* Start Slide */}
                <div 
                    className='flex flex-col text-center items-center justify-around h-full slide'
                    ref={slides.slide_3}
                >
                    <h1 className="text-favblue font-roboto md:text-4xl text-[1.75rem] mt-8">Let's get you started</h1>
                    {/* Buttons */}
                    <div className="flex flex-col gap-8 items-center justify-between w-full lg:w-2/3">
                        <a 
                            className='text-white font-semibold bg-favblue w-2/3 py-2 rounded-lg hover:opacity-90'
                            href='/home'
                        >
                            Book Ticket
                            <i className="bi bi-ticket-perforated-fill ms-2"></i>
                        </a>
                        <a
                            className='text-favblue font-roboto border border-favblue py-[7px] w-2/3 rounded-lg hover:bg-favblue hover:text-white'
                            href='/mail'
                        >
                            Track Parcel
                            <i className="bi bi-box-seam ms-2"></i>
                        </a>
                        <a href="/reschedule" className="w-1/3 border-b border-favblue pb-[2px] text-favblue">
                            Reschedule
                            <i className="bi bi-pencil ms-2"></i>
                        </a>
                    </div>
                    {/* Customer service */}
                    <div className="flex flex-wrap gap-y-8">
                        <h1 className='text-favblue font-roboto md:text-4xl text-[20px] basis-full'>CUSTOMER SERVICE</h1>
                        <p className='font-roboto basis-1/2 lg:basis-1/4 text-md'><span className='text-favblue'>YDE</span> +237 673348251</p>
                        <p className='font-roboto basis-1/2 lg:basis-1/4 text-md'><span className="text-favblue">BUEA</span> +237 678137452</p>
                        <p className='font-roboto basis-1/2 lg:basis-1/4 text-md'><span className="text-favblue">DLA</span> +237 675475486</p>
                        <p className='font-roboto basis-1/2 lg:basis-1/4 text-md'><span className="text-favblue">LIMBE</span> +237 678137452</p>
                    </div>
                    <a href="/faqs" className="text-favblue text-x font-roboto -mb-4">FAQ</a>
                </div>
            </div>
            
            {/* Bottom navigation */}
            <div className="px-8 w-full basis-[15%]">
                <div className='flex items-center justify-between lg:justify-around h-full'>
                    {// Prev button shows up as from 2nd page. Skip shows on first page
                    (slide !== 'slide_1')?
                    <button 
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
                    <button onClick={() => setSlide('slide_3')}>Skip</button>
                    }
                    <div className='z-[1] flex gap-2' id='slider-nav'>
                        <button onClick={() => setSlide('slide_1')} className={slide === 'slide_1'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_2')} className={slide === 'slide_2'? 'opacity-100': 'opacity-50'}></button>
                        <button onClick={() => setSlide('slide_3')} className={slide === 'slide_3'? 'opacity-100': 'opacity-50'}></button>
                    </div>
                    {// Next shows only on first 2 pages
                    (slide !== 'slide_3' )?
                    <button 
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