import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
    const [startDate, setStartDate] = useState(new Date);
    let day = startDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className='bg-slate-100 h-full pt-16'>
        <form action="">
            <div className="w-full bg-white py-2 px-14 mb-16">
                <div className="form-group flex flex-col mb-3">
                    <label htmlFor="depart" className='text-sm text-gray-400 float-start mb-2'>From</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px]"></i>
                        <select name="depart" id="depart">
                            <option value="">Enter Boarding e.g Limbe, Buea, Kumba, Yde</option>
                        </select>
                    </div>
                </div>
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="desti" className='text-sm text-gray-400 float-start mb-2'>To</label>
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px]"></i>
                        <select name="desti" id="desti">
                            <option value="">Enter Destination e.g Yaounde, Limbe, Buea</option>
                        </select>
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
                    <div className="flex flex-row justify-between px-0 items-center">
                        <i className="bi bi-clock text-xl text-favbluelight font-bold"></i>
                        <p className=' text-gray-400 font-bold text-xl'>7 AM | 10 AM | 1 PM | 4 PM</p>
                        <div></div>
                    </div>
                </div>
            </div>

            <button className=' rounded-sm text-sm text-white bg-violet-500 py-3 w-3/5 mx-auto shadow-lg block'>BOOK/RESERVE NOW</button>
        </form>
        <p className="mt-24 px-16 text-gray-500 font-semibold">Please remember to be at our agency 45 mins before travel time!</p>
    </div>
  )
}

export default Home