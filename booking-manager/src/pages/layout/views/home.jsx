import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import {useMediaQuery} from 'react-responsive';

const Home = () => {
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});

    // react date-picker logic
    const [travelDate, setTravelDate] = useState(null);

    // agency locations
    const options = [
        {value: 'Buea', label: 'Buea'},
        {value: 'Limbe', label: 'Limbe'},
        {value: 'Douala', label: 'Douala'},
        {value: 'Yaounde', label: 'Yaounde'},
    ]

    // departure time logic
    const [departureTime, setDepartureTime] = useState(null);
    const times = ['07:00', '10:00', '13:00', '16:00', '7 pm', '10 pm' ] // these times will be changed through the admin and fetched from the backend

  return (
    <div className='pb-32 pt-[5.5rem] md:pt-28'>
        <form action="">
            <div className="w-[90%] mx-auto bg-white py-3 md:py-10 px-6 md:px-24 mb-10 md:mb-16 md:w-3/5 md:mx-auto rounded-xl md:shadow">
                <div className="form-group flex flex-col mb-3">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-2'>From</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px] basis-[10%] ps-1"></i>
                        <Select 
                            options={options} className='w-10/12 basis-[85%]'
                            defaultValue={{value: 'Select Departure', label: 'Select Departure City'}}
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="desti" className='text-sm font-semibold font-roboto float-start mb-2'>To <button className='bi bi-arrow-down-up float-end px-2 py-1 hover:text-favblue hover:bg-blue-100 rounded-md'></button></label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px] basis-[10%] ps-1"></i>
                        <Select 
                            options={options} className='w-10/12 basis-[85%]'
                            defaultValue={{value: 'Enter Destination', label: 'Select Desitination City'}}
                        />
                    </div>
                </div>
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
                <div className="form-group flex flex-col w-full mb-4">
                    <label htmlFor="" className='text-sm font-semibold font-roboto float-start mb-2'>Time</label>
                    <div className="flex px-0 items-center justify-between">
                        <i className="bi bi-clock text-xl text-favblue ps-1 basis-[10%]"></i>
                        <div className="basis-[85%] flex overflow-x-scroll items-center gap-[5%]">
                            {times.map((time, idx) => 
                                (
                                    <div 
                                        onClick={()=>setDepartureTime(time)} key={idx} 
                                        className={`${departureTime === time? 'border-4 bg-[#2C3B6A1A]': ''} border rounded-lg border-favblue h-14 basis-[30%] grow shrink-0 flex flex-col justify-evenly`}
                                    >
                                        <div 
                                            className='flex gap-2 items-center justify-center text-center'
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
