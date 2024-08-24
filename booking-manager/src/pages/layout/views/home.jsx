import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import {useMediaQuery} from 'react-responsive';

const Home = () => {
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});
    const [timeSet, setTimeSet] = useState(0);

    // react date-picker logic
    const [travelDate, setTravelDate] = useState(null);

    // agency locations
    const options = [
        {value: 'Buea', label: 'Buea'},
        {value: 'Limbe', label: 'Limbe'},
        {value: 'Douala', label: 'Douala'},
        {value: 'Yaounde', label: 'Yaounde'},
    ]

    const [departure, setDeparture] = useState({value: 'Select Departure', label: 'Select Departure City'});
    const [destination, setDestination] = useState({value: 'Enter Destination', label: 'Select Desitination City'});

    // departure time logic
    const [departureTime, setDepartureTime] = useState(null);
    const times = ['07:00', '10:00', '13:00', '16:00', '19:00', '22:00'] // these times will be changed through the admin and fetched from the backend


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

  return (
    <div className='pb-32 pt-[5.5rem] md:pt-28'>
        <form action="">
            <div className="w-[90%] mx-auto bg-white py-3 md:py-10 px-6 md:px-24 mb-10 md:mb-16 md:w-3/5 md:mx-auto rounded-xl md:shadow">
                {/* Departure */}
                <div className="form-group flex flex-col mb-3">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-2'>From</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px] basis-[10%] ps-1"></i>
                        <Select 
                            options={options} className='w-10/12 basis-[85%] z-20'
                            value={departure} onChange={(dep) => setDeparture(dep)}
                        />
                    </div>
                </div>
                {/* Destination */}
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="desti" className='text-sm font-semibold font-roboto float-start mb-2'>
                        To
                        <button 
                            className='bi bi-arrow-down-up float-end px-2 py-1 hover:text-favblue hover:bg-blue-100 rounded-md'
                            onClick={(e) => {
                                // Swapping departure and destination values
                                e.preventDefault();
                                setDeparture(destination);
                                setDestination(departure);
                            }}
                        ></button>
                    </label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px] basis-[10%] ps-1"></i>
                        <Select 
                            options={options} className='w-10/12 basis-[85%] z-10'
                            value={destination} onChange={(des) => setDestination(des)}
                        />
                    </div>
                </div>
                {/* Date */}
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-2'>Date</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-calendar4-event text-xl text-favblue basis-[10%] ps-1"></i>
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
                {/* Time */}
                <div className="form-group flex flex-col w-full mb-4">
                    <label htmlFor="" className='text-sm font-semibold font-roboto float-start mb-2'>Time</label>
                    <div className="flex px-0 items-center justify-between">
                        <i className="bi bi-clock text-xl text-favblue ps-1 basis-[10%]"></i>
                        <div className="basis-[85%] relative flex items-center">
                            {
                            timeSet !== 0
                            &&
                            <button id="scroll-left" className='bi bi-chevron-left rounded-[50%] text-favblue bg-favbluelight px-1 absolute left-0 translate-x-[-50%]'
                                onClick={scrollLeft}
                            ></button>
                            }
                            <div className="flex overflow-x-scroll items-center gap-[5%] w-full h-full" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none'}} id='timeCase'>
                            {times.map((time, idx) => 
                                (
                                    <div 
                                        onClick={()=>setDepartureTime(time)} key={idx} id={`time${idx}`} style={{scrollSnapType: 'x mandatory',scrollSnapAlign: 'start'}}
                                        className={`${departureTime === time? 'border-4 bg-[#2C3B6A1A]': ''} border rounded-lg border-favblue h-14 lg:h-16 basis-[30%] grow shrink-0 flex flex-col justify-evenly`}
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
                            <button id="scroll-right" className='bi bi-chevron-right rounded-[50%] text-favblue bg-favbluelight px-1 absolute right-0 translate-x-[50%]'
                                onClick={scrollRight}
                            ></button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <button href='/wallet' className='text-center rounded-md text-sm max-sm:text-[1rem] text-white bg-favblue py-3 w-3/4 md:w-1/5 mx-auto shadow-xl block font-roboto'>Next</button>
        </form>
        <p className="mt-10 md:mt-24 px-12 font-roboto text-[16px] md:px-16 text-[#ff0000] text-center">Please remember to be at our agency 45 mins before travel time!</p>
        <a href="/terms-n-conditions" className="text-favblue underline text-16 font-roboto mt-5 block text-center">Terms and Conditions</a>
    </div>
  )
}

export default Home;
