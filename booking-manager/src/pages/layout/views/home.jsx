import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../../../assets/VERSION 1.png'

const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    let day = startDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const options = [
        {value: 'Buea', label: 'Buea'},
        {value: 'Limbe', label: 'Limbe'},
        {value: 'Kumba', label: 'Kumba'},
        {value: 'Douala', label: 'Douala'},
        {value: 'Yaounde', label: 'Yaounde'},
    ]

    const [departureTime, setDepartureTime] = useState(null);

  return (
    <div className='h-1/2 pb-32 pt-28 md:pt-32'>
        <div className="fixed top-0  w-full bg-white flex flex-row items-center justify-between drop-shadow-md">
            <img 
                src={logo} alt="logo"
                className=' h-16'
            />
            <p className=' text-gray-500 font-semibold max-md:text-sm'>Bus Schedules & Destinations</p>
            <div className='w-16'></div>
        </div>
        <form action="">
            <div className="w-full bg-white py-2 px-14 mb-10 md:mb-16">
                <div className="form-group flex flex-col mb-3">
                    <label htmlFor="depart" className='text-sm text-gray-400 float-start mb-2'>From</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px]"></i>
                        <select name="depart" id="depart" className='h-10 w-10/12'>
                            <option value="" selected>Enter Departure</option>
                            {options.map((op) => (
                                <option value={op.value}>{op.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="desti" className='text-sm text-gray-400 float-start mb-2'>To</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px]"></i>
                        <Select 
                            options={options} className=' w-10/12 focus:border-0'
                            defaultValue={{value: 'Enter Destination', label: 'Enter Desitination'}}
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="depart" className='text-sm text-gray-400 float-start mb-2'>Date</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-calendar4-event text-xl text-favbluelight font-bold"></i>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd  MMMM yyyy"/>
                        <p className="font-bold">{daysOfWeek[day]}</p>
                    </div>
                </div>
                <div className="form-group flex flex-col">
                    <label htmlFor="depart" className='text-sm text-gray-400 float-start mb-2'>Time</label>
                    <div className="flex flex-row justify-between px-0 items-center gap-10">
                        <i className="bi bi-clock text-xl text-favbluelight font-bold"></i>
                        <div className="gap-1 flex flex-row flex-wrap hho">
                            <p className={(departureTime === '7am')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('7am')}>7 AM |</p>
                            <p className={(departureTime === '10am')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('10am')}>10 AM |</p>
                            <p className={(departureTime === '1pm')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('1pm')}>1 PM |</p>
                            <p className={(departureTime === '4pm')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('4pm')}>4 PM |</p>
                            <p className={(departureTime === '4pm')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('4pm')}>4 PM |</p>
                            <p className={(departureTime === '4pm')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('4pm')}>4 PM |</p>
                            <p className={(departureTime === '4pm')? 'text-blue-600 font-bold text-xl': 'text-gray-400 font-bold text-xl'} onClick={()=>setDepartureTime('4pm')}>4 PM |</p>
                        </div>
                        
                        <div></div>
                    </div>
                </div>
            </div>

            <button className='rounded-md text-sm text-white bg-violet-500 py-3 w-3/5 mx-auto shadow-xl block'>BOOK/RESERVE NOW</button>
        </form>
        <p className="mt-10 md:mt-24 px-12 md:px-16 text-gray-500 font-semibold text-center">Please remember to be at our agency 45 mins before travel time!</p>
    </div>
  )
}

export default Home