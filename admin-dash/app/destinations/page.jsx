"use client"
import Image from "next/image"
import Modal from "../components/Modal";
import { useRef } from 'react';

import seaImg from '../assets/sea.png';
import mtnImg from '../assets/Mountain.png';
import ydeImg from '../assets/YDE.png';
import driverImg from '../assets/Ellipse.png';
import logo1 from '../assets/VERSION 1.png';

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-xl bg-white shadow-sm ${className}`}>
      {children}
    </div>
  )
}

const Destinations = () => {

  const AddDestinationModalRef = useRef(null);
  return (
    <div className="min-h-full">
      <section className="flex mt-6 flex-wrap gap-[2%]">
        <div id="left" className='basis-[38%]'>
          <Card className={'w-full px-4 py-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-poppins font-medium text-x">Scheduled Destinations</p>
              <button 
                className="text-favgold border-b border-favgold px-1"
                onClick={() => {
                  const AddDestinationModal = AddDestinationModalRef.current;
                  AddDestinationModal.showModal();
                }}
              >Add</button>
            </div>
            {/* destinations list */}
            <div className='mt-4'>
              <div className='flex items-center gap-4 py-2 border-b border-[#00000033]'>
                <Image src={seaImg} alt='favour colour logo' width={70} height={70}/>
                <div className="me-auto flex flex-col items-center justify-around h-14">
                  <p className="font-poppins text-sm font-medium">Yaounde - Limbe</p>
                  <p className="font-poppins text-gray-400 text-xs">Distance - 2000km</p>
                </div>
                <div className="flex flex-col items-end justify-around h-14">
                  <button className="bi bi-pencil"></button>
                  <p className="font-poppins text-gray-400 text-xs">XAF 8000</p>
                </div>
              </div>
              <div className='flex items-center gap-4 py-2 border-b border-[#00000033]'>
                <Image src={mtnImg} alt='favour colour logo' width={70} height={70}/>
                <div className="me-auto flex flex-col items-center justify-around h-14">
                  <p className="font-poppins text-sm font-medium">Buea - Yaounde</p>
                  <p className="font-poppins text-gray-400 text-xs">Distance - 2000km</p>
                </div>
                <div className="flex flex-col items-end justify-around h-14">
                  <button className="bi bi-pencil"></button>
                  <p className="font-poppins text-gray-400 text-xs">XAF 8000</p>
                </div>
              </div>
              <div className='flex items-center gap-4 py-2 border-b border-[#00000033]'>
                <Image src={ydeImg} alt='favour colour logo' width={70} height={70}/>
                <div className="me-auto flex flex-col items-center justify-around h-14">
                  <p className="font-poppins text-sm font-medium">Yaounde - Buea</p>
                  <p className="font-poppins text-gray-400 text-xs">Distance - 2000km</p>
                </div>
                <div className="flex flex-col items-end justify-around h-14">
                  <button className="bi bi-pencil"></button>
                  <p className="font-poppins text-gray-400 text-xs">XAF 8000</p>
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="flex mt-4"><a href='/destinations/schedules' className="ms-auto text-favgold border-b border-favgold px-1">View All</a></div>
          </Card>
          <Card className={'w-full px-4 py-6 mt-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-poppins font-medium text-x">Number of Trips</p>
              <a href='/destinations/trips' className="text-favgold border-b border-favgold px-1">View All</a>
            </div>
            {/* Trip indicators */}
            <div className="grid grid-cols-2 gap-y-4 justify-items-center mt-4">
              <div className="bg-favblue h-36 w-36 rounded-full flex flex-col items-center justify-center gap-3">
                <p className='text-gray-50 font-poppins text-xl font-medium'>16</p>
                <p className='text-gray-50 font-poppins text-x font-normal'>Trips</p>
              </div>
              <div className="bg-[#6B7697] h-36 w-36 rounded-full flex flex-col items-center justify-center gap-3">
                <p className='text-gray-50 font-poppins text-xl font-medium'>10</p>
                <p className='text-gray-50 font-poppins text-x font-normal'>Trips</p>
              </div>
              <div className="bg-[#ABB1C3] h-36 w-36 rounded-full flex flex-col items-center justify-center gap-3">
                <p className='text-gray-50 font-poppins text-xl font-medium'>7</p>
                <p className='text-gray-50 font-poppins text-x font-normal'>Trips</p>
              </div>
              <div className="bg-[#6b7697] h-36 w-36 rounded-full flex flex-col items-center justify-center gap-3">
                <p className='text-gray-50 font-poppins text-xl font-medium'>4</p>
                <p className='text-gray-50 font-poppins text-x font-normal'>Trips</p>
              </div>
            </div>
          </Card>
        </div>
        <div id="right" className='basis-3/5'>
          <Card className={'w-full p-2 h-96'}>
            
          </Card>
          <Card className={'w-full p-6 mt-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-poppins font-medium text-x">Ongoing Trips</p>
              <button className="bi bi-search bg-favblue text-white text-x px-2 rounded-md aspect-square me-3"></button>
            </div>
            {/* inputs */}
            <div className="grid grid-cols-2 gap-x-5">
              {/* Departure */}
              <div className="form-group flex flex-col mb-3">
                <label htmlFor="depart" className='text-sm font-poppins float-start mb-2'>From</label>
                <div className="flex justify-between px-0 items-center">
                  <i className="bi bi-circle-fill text-[8px] basis-[10%] ps-1"></i>
                  <select name="departure" id="depart" required className='basis-4/5 outline-none border p-2 rounded-lg'>
                    <option value="" disabled selected>Select Departure City</option>
                  </select>
                </div>
              </div>
              {/* Destination */}
              <div className="form-group flex flex-col mb-8">
                <label htmlFor="desti" className='text-sm font-poppins float-start mb-2'>To</label>
                <div className="flex justify-between px-0 items-center">
                  <i className="bi bi-circle text-[8px] basis-[10%] ps-1"></i>
                  <select name="destination" id="desti" required className='basis-4/5 outline-none border p-2 rounded-lg'>
                    <option value="" disabled selected>Select Destination City</option>
                  </select>
                </div>
              </div>
              {/* Class */}
              <div className="form-group flex flex-col mb-8">
                <label htmlFor="desti" className='text-sm font-poppins float-start mb-2'>Class</label>
                <div className="flex justify-between px-0 items-center">
                  <i className="bi bi-stars text-xl basis-[10%] ps-1"></i>
                  <select name="class" id="class" required className='basis-4/5 outline-none border p-2 rounded-lg'>
                    <option value="" disabled selected>Select Class Type</option>
                  </select>
                </div>
              </div>
              {/* Date */}
              <div className="form-group flex flex-col mb-8">
                <label htmlFor="desti" className='text-sm font-poppins float-start mb-2'>Date</label>
                <div className="flex justify-between px-0 items-center">
                  <i className="bi bi-calendar4-event text-xl basis-[10%] ps-1"></i>
                  <input type="date" name='traveldate' id='traveldate' title='Choose Date' required className='outline-none basis-4/5 border p-2 rounded-lg'/>
                </div>
              </div>
            </div>
            {/* divider line */}
            <div className="border"></div>
            {/* results */}
            <div className="rounded-md p-4 bg-[#ABB1C328] mt-5">
              <div id="item1" className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className='flex gap-3 items-center'>
                    <span className="bi bi-bus-front flex items-center justify-center text-white bg-black w-12 aspect-square rounded-full"></span>
                    <div>
                      <p className="font-poppins text-sm">Limbe - Yaounde</p>
                      <p className="font-poppins text-xs text-favgray mt-2">7:00AM, 08/28/2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src={driverImg} alt='favour colour logo' quality={100} width={50} className='border aspect-square rounded-full border-black'/>
                    <div>
                      <p className='font-poppins text-x'>Jean Bet</p>
                      <p className="font-poppins text-xs text-favgray">Driver</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-[#566288] px-4 py-1 rounded-x text-white text-center font-poppins text-xl">VIP</div>
                  <div className="flex gap-1">
                    <span className="bi bi-envelope flex items-center justify-center w-10 aspect-square rounded-full text-black border border-black"></span>
                    <span className="bi bi-telephone-fill flex items-center justify-center text-white bg-favblue w-10 aspect-square rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Modal reference={AddDestinationModalRef} className={'min-w-[50vw] rounded-xl py-8 px-20'}>
        <div className="flex items-start justify-between">
          <Image src={logo1} alt='favour colour logo' width={100} className='aspect-square'/>
          <button className="bi bi-x text-gray-400 text-3xl" onClick={() => AddDestinationModalRef.current.close()}></button>
        </div>
        <div className="flex items-start justify-between mt-4">
          <p className="font-poppins text-[54px] font-bold text-[#42505C] leading-[68px]">Add<br/>Destination</p>
          <p className="font-poppins text-sm">Please fill in the information of your<br/> employee below carefully</p>
        </div>
      </Modal>
    </div>
  )
}
  
  export default Destinations;