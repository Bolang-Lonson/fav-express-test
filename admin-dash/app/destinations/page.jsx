"use client"
import Image from "next/image"

import seaImg from '../assets/sea.png';
import mtnImg from '../assets/Mountain.png';
import ydeImg from '../assets/YDE.png'

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-xl bg-white shadow-md ${className}`}>
      {children}
    </div>
  )
}

const Destinations = () => {
  return (
    <div className="min-h-full">
      <section className="flex items-center justify-between mt-6">
        <p className="font-poppins text-[26px] font-semibold">Destinations</p>
        <div className='bg-white rounded-lg p-2 basis-[10%]'>
          <select name="period" id="period" className='bg-transparent outline-none font-poppins text-xs font-medium w-full'>
            <option value="Today">This Week</option>
          </select>
        </div>
      </section>
      <section className="flex mt-6 border flex-wrap gap-[2%]">
        <div id="left" className='basis-[38%]'>
          <Card className={'w-full px-4 py-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-poppins font-medium text-x">Scheduled Destinations</p>
              <button className="text-favgold border-b border-favgold px-1">Add</button>
            </div>
            {/* destinations list */}
            <div className='mt-4'>
              <div className='flex items-center gap-4 py-2 border-b border-[#00000033]'>
                <Image src={seaImg} width={70} height={70}/>
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
                <Image src={mtnImg} width={70} height={70}/>
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
                <Image src={ydeImg} width={70} height={70}/>
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
            <div className="flex mt-4"><button className="ms-auto text-favgold border-b border-favgold px-1">View All</button></div>
          </Card>
          <Card className={'w-full px-4 py-6 mt-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-poppins font-medium text-x">Number of Trips</p>
              <button className="text-favgold border-b border-favgold px-1">View All</button>
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
          <Card className={'w-full px-4 py-6 mt-6'}>
            {/* header */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 font-poppins font-medium text-x">Ongoing Trips</p>
              <button className="bi bi-search bg-favblue text-white text-x px-2 rounded-md aspect-square me-3"></button>
            </div>
            {/* inputs */}
          </Card>
        </div>
      </section>
    </div>
  )
}
  
  export default Destinations;