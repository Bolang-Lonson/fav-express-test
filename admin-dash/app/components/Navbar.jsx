"use client"

import React, { useState } from 'react';
import ukflag from '../assets/ukflag.png';
import profilepic from '../assets/profilepic.png'
import Image from 'next/image';

import Dropdown, { DropdownButton, DropdownContent } from './Dropdown';

const Navbar = () => {
  const hasNotif = true;

  const [language, setLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const currTime = new Date();
  return (
    <nav className='bg-white w-full h-16 flex items-center px-4 justify-between'>
      <div className='bg-[#F5F6F7] h-10 flex items-center px-4 py-2 rounded-[10px] basis-[30%]'>
        <input Dropdown
          type="search" placeholder='Search here...' 
          className='bg-transparent h-full w-full outline-none'
        />
        <button className="bi bi-search"></button>
      </div>
      <div className='bg-favblue h-10 rounded-x flex items-center gap-3 px-6'>
        <p className="font-poppins font-bold text-white">{currTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        <div className="border-[0.5px] border-white h-5"></div>
        <p 
          className="font-poppins font-bold text-white"
        >
          {currTime.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric'})}
        </p>
      </div>
      <div className='flex items-center basis-1/3 justify-between'>
        <div id="language" className="flex items-center gap-3">
          <button className="bg-slate-200 bi bi-bell text-black h-10 w-10 rounded-md relative">
            {hasNotif && <span className="absolute bg-[#F57600] w-2 h-2 rounded-full border-2 border-white -translate-x-2 translate-y-1"></span>}
          </button>
          <Image src={ukflag} alt="" className='h-[25px] w-auto'/>
          <select name="language" id="language-selector" className='outline-none'>
            <option value="en">ENG</option>
            <option value="fr">FRE</option>
          </select>
        </div>
        <Dropdown className={'basis-[60%]'}>
          <DropdownButton className="w-full flex items-center justify-between active:bg-slate-100 hover:bg-slate-100 p-1 rounded-md px-2" onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={profilepic}
              alt='profile'
              width={40} height={40}
              placeholder='blur'
            />
            <div className='flex-col'>
              <p className="font-poppins font-medium text-sm text-[#333333]">Peter Parker</p>
              <p className="font-poppins font-medium text-sm text-[#333333B2]">Admin</p>
            </div>
            <i className="bi bi-chevron-down"></i>
          </DropdownButton>
          <DropdownContent className={`right-0 ${isOpen ? '': 'hidden'} bg-white border-t rounded-md mt-2`} style={{transition: 'display ease-in-out 5s'}}>
            <div className="py-2 px-4 hover:bg-slate-50"><i className="bi bi-person-circle me-3"></i> Profile</div>
            <div className="py-2 px-4 hover:bg-slate-50"><i className="bi bi-gear me-3"></i> Settings</div>
            <div className="py-2 px-4 hover:bg-slate-50"><i className="bi bi-box-arrow-right me-3"></i> Logout</div>
          </DropdownContent>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Navbar;