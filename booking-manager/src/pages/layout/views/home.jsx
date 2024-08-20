import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../../../assets/VERSION 1.png'

const Home = () => {
    // react date-picker logic
    const [startDate, setStartDate] = useState(new Date());
    let day = startDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // agency locations
    const options = [
        {value: 'Buea', label: 'Buea'},
        {value: 'Limbe', label: 'Limbe'},
        {value: 'Kumba', label: 'Kumba'},
        {value: 'Douala', label: 'Douala'},
        {value: 'Yaounde', label: 'Yaounde'},
    ]

    // departure time logic
    const [departureTime, setDepartureTime] = useState(null);
    const times = ['7 am', '10 am', '1 pm', '4 pm', '7 pm'] // these times will be changed through the admin and fetched from the backend

  return (
    <div className='h-1/2 pb-32 pt-28 md:pt-32'>
        <div className="fixed top-0  w-full bg-white flex flex-row items-center justify-between drop-shadow-md lg:px-6 z-20">
            <img 
                src={logo} alt="logo"
                className='h-16'
            />
            <p className=' text-gray-500 font-semibold max-md:text-sm'>Bus Schedules & Destinations</p>
            <div className='w-16'></div>
        </div>
        <form action="">
            <div className="w-full bg-white pt-2 md:py-10 px-8 md:px-24 mb-10 md:mb-16 pb-10 md:w-3/5 md:mx-auto md:rounded-md md:shadow">
                <div className="form-group flex flex-col mb-3">
                    <label htmlFor="depart" className='text-sm font-semibold text-gray-400 float-start mb-2'>From</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px]"></i>
                        {/* <select name="depart" id="depart" className='h-10 w-10/12'>
                            <option value="" selected>Enter Departure</option>
                            {options.map((op) => (
                                <option value={op.value}>{op.label}</option>
                            ))}
                        </select> */}
                        <Select 
                            options={options} className=' w-10/12'
                            defaultValue={{value: 'Enter Departure', label: 'Enter Departure'}}
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="desti" className='text-sm font-semibold text-gray-400 float-start mb-2'>To</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px]"></i>
                        <Select 
                            options={options} className=' w-10/12'
                            defaultValue={{value: 'Enter Destination', label: 'Enter Desitination'}}
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="depart" className='text-sm font-semibold text-gray-400 float-start mb-2'>Date</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-calendar4-event text-xl text-favbluelight"></i>
                        <DatePicker 
                            selected={startDate} dateFormat="dd  MMMM yyyy"
                            onChange={(date) => setStartDate(date)} 
                            className='text-gray-400 font-semibold translate-x-8 md:text-xl pe-0 focus:translate-x-14'
                        />
                        <p className="font-bold text-[18px] z-10">{daysOfWeek[day]}</p>
                    </div>
                </div>
                <div className="form-group flex flex-col w-full mb-4">
                    <label htmlFor="depart" className='text-sm font-semibold text-gray-400 float-start mb-2'>Time</label>
                    <div className="flex flex-row px-0 items-center w-full justify-stretch">
                        <i className="bi bi-clock text-xl text-favbluelight"></i>
                        <div 
                            className="grid gap-1 absolute left-1/2 translate-x-[-40%]"
                            style={{gridTemplateColumns: 'repeat(4, min-content)'}}
                        >
                            {times.map((time) => 
                                (
                                    <div>
                                        <div 
                                            className='flex gap-2 items-end border-e-2 border-gray-400 pe-2 text-center'
                                            onClick={()=>setDepartureTime(time)}
                                        >
                                            <p 
                                                className={(departureTime === time)? 'text-blue-600 font-bold lg:text-2xl text-xl': 'text-gray-400 font-bold lg:text-2xl text-xl'} 
                                            >
                                                {(time.toUpperCase().split(' '))[0]}
                                            </p>
                                            <p 
                                                className={(departureTime === time)? 'text-blue-600 font-bold lg:text-xl': 'text-gray-400 font-bold lg:text-xl'} 
                                            >
                                                {(time.toUpperCase().split(' '))[1]} 
                                            </p>
                                        </div>
                                        <p className='text-sm text-center'>{Math.round((Math.random() * 70) +1) /* randomizing number of seats left*/} seats</p>
                                    </div>
                                )
                            )}
                        </div>
                        
                        <div></div>
                    </div>
                </div>
            </div>

            <a href='/wallet' className='text-center rounded-md text-sm text-white bg-violet-500 py-3 w-3/5 md:w-1/5 mx-auto shadow-xl block'>BOOK/RESERVE NOW</a>
        </form>
        <p className="mt-10 md:mt-24 px-12 md:px-16 text-gray-500 font-semibold text-center">Please remember to be at our agency 45 mins before travel time!</p>
    </div>
  )
}

export default Home
