import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/VERSION 1.png';
import whiteLogo from '../../assets/VERSION 2.png'
import buspic from '../../assets/landpic.jpg';
import './splash.css';
import dayjs from 'dayjs';
import {useMediaQuery} from 'react-responsive';
import { DatePicker, MobileDatePicker } from '@mui/x-date-pickers';

dayjs.locale('en');

const Landing = () => {
    const navigate = useNavigate();
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

    const rescheduleModalRef = useRef(null);
    function reschedule(e) {
        e.preventDefault();
        const rescheduleModal = rescheduleModalRef.current;
        rescheduleModal.showModal();
    }

    const trackingModalRef = useRef(null);
    function track(e) {
        e.preventDefault();
        const trackingModal = trackingModalRef.current;
        trackingModal.showModal();
    }

    const rescheduleDialogContent = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (rescheduleDialogContent.current && !rescheduleDialogContent.current.contains(event.target)) {
              // Clicked outside
                rescheduleModalRef.current.close();
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);   
        };
    }, []);

    const trackingDialogContent = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (trackingDialogContent.current && !trackingDialogContent.current.contains(event.target)) {
              // Clicked outside
                trackingModalRef.current.close();
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);   
        };
    }, []);

    const [viewIndex, setViewIndex] = useState(0);
    const ContentSwitcher = ({className, children, id}) => {
        const [currentComponent, setCurrentComponent] = useState(children[viewIndex]);
        return (
            <div className={className} style={{transition: 'all ease 0.5s'}} ref={id}>
                {currentComponent}
            </div>
        );
    }
    
    const [travelDate, setTravelDate] = useState(new dayjs());
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});

    // departure time logic
    const [departureTime, setDepartureTime] = useState('');
    const times = ['07:00', '10:00', '13:00', '16:00', '19:00', '22:00'] // these times will be changed through the admin and fetched from the backend
    const [timeSet, setTimeSet] = useState(0);

    const scrollRight = (e) => {
        e.preventDefault();
        const newTimeSet = timeSet + 3;
        setTimeSet(newTimeSet);
        const newSet = document.getElementById(`time${newTimeSet}`);
        if (newSet) {
            newSet.scrollIntoView({behavior: 'smooth', inline: 'start'});
        }
    }
    const scrollLeft = (e) => {
        e.preventDefault();
        const newTimeSet = timeSet - 3;
        setTimeSet(newTimeSet);
        const newSet = document.getElementById(`time${newTimeSet}`);
        if (newSet) {
            newSet.scrollIntoView({behavior: 'smooth', inline: 'start'});
        }
    }

    const [trackingNumber, setTrackingNumber] = useState(null);
    const [trackingError, setTrackingError] = useState(false);

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
                        <button
                            className='text-favblue font-roboto border border-favblue py-2 px-3 rounded-lg hover:bg-favblue hover:text-white'
                            onClick={track}
                        >
                            Track Parcel
                            <i className="bi bi-box-seam ms-2"></i>
                        </button>
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
                        <button
                            className='text-favblue font-roboto border border-favblue py-2 px-3 rounded-lg hover:bg-favblue hover:text-white'
                            onClick={track}
                        >
                            Track Parcel
                            <i className="bi bi-box-seam ms-2"></i>
                        </button>
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
                        <button
                            className='text-favblue font-roboto border border-favblue py-[7px] w-2/3 rounded-lg hover:bg-favblue hover:text-white'
                            onClick={track}
                        >
                            Track Parcel
                            <i className="bi bi-box-seam ms-2"></i>
                        </button>
                        <button 
                            className="w-1/3 border-b border-favblue pb-[2px] text-favblue"
                            onClick={reschedule}
                        >
                            Reschedule
                            <i className="bi bi-pencil ms-2"></i>
                        </button>
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
                    <Modal className='w-[85vw] lg:w-[30vw] rounded-xl backdrop:bg-[#21212159]' reference={rescheduleModalRef}>
                        <ContentSwitcher id={rescheduleDialogContent}>
                            {/* Reference Code */}
                            <div className="flex flex-col items-center gap-8 py-10 px-6">
                                <p className="font-roboto text-favblue text-xl font-medium">REFERENCE CODE</p>
                                <p className="text-16 font-roboto">Please Enter your Reference Code</p>
                                <div className="w-full flex flex-col gap-4 md:w-2/3">
                                    <input type="text" className='w-full mx-auto border border-black rounded-lg h-10 text-center max-sm:text-sm' placeholder='Enter number'/>
                                    <button 
                                        className='text-center w-full mx-auto rounded-lg text-16 text-white bg-favblue py-3 font-roboto'
                                        onClick={(e) => {e.preventDefault();setViewIndex(1)}}
                                    >Submit</button>
                                </div>
                            </div>
                            {/* Ticket */}
                            <div className='pb-6'>
                                <div className="bg-favblue flex items-center justify-between px-3">
                                    <img src={whiteLogo} alt="" className='h-10'/>
                                    <p className='text-white font-roboto'>1234-3456-XXXX</p>
                                </div>
                                <div id="top" className='py-3 md:py-6 px-6 md:px-24 flex flex-wrap justify-between'>
                                    <div className="basis-3/5 grid gap-x-2 gap-y-1 items-center justify-items-stretch my-2" style={{gridTemplateColumns: 'repeat(3, min-content)'}}>
                                        <span className='text-md font-roboto'>FROM</span>
                                        <span className='bi bi-circle-fill text-gray-200 text-xs'></span>
                                        <span className='text-favblue font-semibold font-roboto'>Yaounde</span>
                                        <div className="grid grid-cols-subgrid col-span-3 justify-items-center">
                                            <div className="col-start-2 border border-[#DBB33C] w-0 h-6"></div>
                                        </div>
                                        <span className='text-md font-roboto'>TO</span>
                                        <span className='bi bi-circle-fill text-gray-200 text-xs'></span>
                                        <span className='text-favblue font-semibold font-roboto'>Buea</span>
                                    </div>
                                    <div className="basis-2/5 flex items-center justify-end my-2">
                                        <span className='bg-favblue rounded-lg text-white px-4 py-2 font-roboto text-md'>XAF 7500</span>
                                    </div>
                                </div>
                                <div id="middle" className="py-6 md:py-6 px-4 md:px-24 grid gap-y-6 justify-between border-t border-gray-300 border-dashed" style={{gridTemplateColumns: 'repeat(3, max-content)'}}>
                                    <div className="flex flex-col">
                                        <p className='text-md font-roboto'>CLASS</p>
                                        <p className='text-favblue font-semibold font-roboto'>VIP</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-md font-roboto'>TRAVEL TYPE</p>
                                        <p className='text-favblue font-semibold font-roboto'>One Way</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-md font-roboto'>TRAVEL DATE</p>
                                        <p className='text-favblue font-semibold font-roboto'>{(new Date()).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-md font-roboto'>TIME</p>
                                        <p className='text-favblue font-semibold font-roboto'>10:00</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-md font-roboto'>SEAT</p>
                                        <p className='text-favblue font-semibold font-roboto'>1 adult</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-md font-roboto'>TARIFF</p>
                                        <p className='text-favblue font-semibold font-roboto'>XAF 7,000</p>
                                    </div>
                                </div>
                                <div id="bottom" className='py-3 md:py-6 px-6 md:px-24 border-t border-gray-300 border-dashed'>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className='text-md font-roboto'>FEE</p>
                                        <p className='text-favblue font-semibold font-roboto'>500</p>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className='text-md font-roboto'>DISCOUNT</p>
                                        <p className='text-favblue font-semibold font-roboto'>N/A</p>
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className='text-md font-roboto'>TOTAL PAYMENT</p>
                                        <p className='text-favblue font-semibold font-roboto'>XAF 7500</p>
                                    </div>
                                    <div className="flex items-center justify-center mt-6">
                                        <button className='text-white font-semibold bg-favblue py-2 rounded-lg hover:opacity-90  basis-full'
                                            onClick={(e) => {e.preventDefault();setViewIndex(viewIndex + 1)}}
                                        >Reschedule</button>
                                    </div>
                                </div>
                            </div>
                            {/* Reschedule */}
                            <div>
                                <div className="bg-favblue flex items-center justify-between px-3">
                                    <img src={whiteLogo} alt="" className='h-10'/>
                                    <p className='text-white font-roboto'>1234-3456-XXXX</p>
                                </div>
                                <div className="px-6 py-8">
                                    <div className="form-group flex flex-col mb-8">
                                        <label htmlFor="depart" className='text-sm font-semibold font-roboto text-start mb-2'>Date</label>
                                        <div className="flex justify-between px-0 items-center">
                                            <i className="bi bi-calendar4-event text-xl basis-[10%]"></i>
                                            {
                                            mobileDisplay?
                                            <MobileDatePicker 
                                                value={travelDate} onChange={(newDate) => setTravelDate(newDate)}
                                                className='basis-[85%] text-center' label='Choose Date'
                                            />
                                            :
                                            <DatePicker 
                                                value={travelDate} onChange={(newDate) => setTravelDate(newDate)}
                                                className='basis-[85%] text-center' label='Choose Date'
                                            />
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group flex flex-col mb-12">
                                        <label htmlFor="" className='text-sm font-semibold font-roboto text-start mb-2'>Time</label>
                                        <div className="flex px-0 items-center justify-between w-full">
                                            <i className="bi bi-clock text-xl basis-[10%]"></i>
                                            <div className="basis-[85%] relative items-center">
                                                {
                                                timeSet !== 0
                                                &&
                                                <button id="scroll-left" className='bi bi-chevron-left rounded-[50%] text-favblue bg-favbluelight px-1 absolute left-0 translate-x-[-50%] top-1/2 translate-y-[-50%]'
                                                    onClick={scrollLeft}
                                                ></button>
                                                }
                                                <div className="flex overflow-x-hidden items-center gap-[5%] w-full h-full" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none'}} id='timeCase'>
                                                {times.map((time, idx) => 
                                                    (
                                                        <div 
                                                            onClick={()=>setDepartureTime(time)} key={idx} id={`time${idx}`}
                                                            className={`${departureTime === time? 'border-4 bg-[#2C3B6A1A]': ''} border rounded-lg border-favblue h-14 lg:h-16 basis-[30%] grow-0 shrink-0 flex flex-col`}
                                                        >
                                                            <div
                                                                className='flex items-center justify-center text-center'
                                                            >
                                                                <p 
                                                                    className={'text-favblue font-roboto font-semibold lg:text-2xl text-16'}
                                                                >
                                                                    {time}
                                                                </p>
                                                            </div>
                                                            <p className='text-sm max-sm:text-xs text-center'>{Math.round((Math.random() * 70) +1) /* randomizing number of seats left*/}plc left</p>
                                                        </div>
                                                    )
                                                )}
                                                </div>
                                                {
                                                times.length - timeSet > 3
                                                &&
                                                <button id="scroll-right" className='bi bi-chevron-right rounded-[50%] text-favblue bg-favbluelight px-1 absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2'
                                                    onClick={scrollRight}
                                                ></button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        className='text-center w-full mx-auto rounded-lg text-16 text-white bg-favblue py-3 font-roboto'
                                        onClick={(e) => {e.preventDefault();setViewIndex(viewIndex + 1)}}
                                    >Submit</button>
                                </div>
                            </div>
                            {/* Thanks */}
                            <div className='pb-8 px-4'>
                                <div className="flex flex-col items-center gap-10 lg:gap-16">
                                    <div className="bg-[#1F75FE26] w-[100px] h-[100px] lg:w-32 lg:h-32 translate-y-[35px] lg:translate-y-12 rounded-[50%] relative">
                                        <i className="bi bi-hand-thumbs-up text-favblue absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl"></i>
                                    </div>
                                    <p className="font-roboto text-xl text-favblue">Thank you</p>
                                    <p className="text-16 font-roboto font-light text-center">Your ticket has been rescheduled</p>
                                </div>
                            </div>
                        </ContentSwitcher>
                    </Modal>
                    <Modal className='w-[85vw] lg:w-[30vw] rounded-xl backdrop:bg-[#21212159]' reference={trackingModalRef}>
                        <ContentSwitcher id={trackingDialogContent}>
                            {/* Reference Code */}
                            <div className="flex flex-col items-center gap-8 py-10 px-6">
                                <p className="font-roboto text-favblue text-xl font-medium">TRACKING NUMBER</p>
                                <p className="text-16 font-roboto">Please Enter your Tracking Number</p>
                                <div className="w-full flex flex-col gap-4 md:w-2/3">
                                    <input 
                                        type="text" value={trackingNumber} onChange={(e) => {e.preventDefault();setTrackingNumber(e.target.value)}}
                                        className='w-full mx-auto border border-black rounded-lg h-10 text-center max-sm:text-sm' placeholder='Enter number'
                                    />
                                    {trackingError && <p className='text-red'>Enter a valid tracking number</p>}
                                    <button 
                                        className='text-center w-full mx-auto rounded-lg text-16 text-white bg-favblue py-3 font-roboto'
                                        onClick={() => {
                                            if(trackingNumber){navigate(`/track/${trackingNumber}`);}
                                            else {setTrackingError(true)}
                                        }}
                                    >Submit</button>
                                </div>
                            </div>
                            <div></div>
                        </ContentSwitcher>
                    </Modal>
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


export const Modal = ({reference, children, open, className}) => {

    return (
        <dialog ref={reference} open={open} className={className} id='dialog'>
            {children}
        </dialog>
    )
}
