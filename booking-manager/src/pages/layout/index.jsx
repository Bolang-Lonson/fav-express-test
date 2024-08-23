import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import faqIcon from './faq.svg'
import logo from '../../assets/VERSION 1.png'

const Layout = () => {

    const baseClass = 'font-bold text-center';

  return (
    <div className='w-full'>
        <div className="fixed top-0  w-full bg-white flex flex-row items-center justify-between drop-shadow-md lg:px-6 z-30">
            <a href="/">
                <img 
                    src={logo} alt="logo"
                    className='h-16'
                />
            </a>
            <p className=' text-gray-500 font-semibold max-md:text-sm'>Bus Schedules & Destinations</p>
            <div className='w-16'></div>
        </div>
        <div className='bg-favbluelight min-h-[100dvh]'><Outlet/></div>
        <div className="fixed w-full py-3 sm:py-5  bottom-0 bg-white flex flex-row items-center lg:justify-center justify-around lg:gap-16 px-1">
            <NavLink 
                to='/home' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favblue': baseClass+' text-gray-400')}
            >
                <i className="bi bi-house-door text-2xl"></i>
                <p className='text-sm font-normal'>Home</p>
            </NavLink>
            <NavLink 
                to='/tickets' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favblue': baseClass+' text-gray-400')}

            >
                <i className="bi bi-ticket-perforated text-2xl"></i>
                <p className='text-sm font-normal'>Tickets</p>
            </NavLink>
            <NavLink 
                to='/faqs' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favblue': baseClass+' text-gray-400')}
            >
                <i className="bi bi-wechat text-2xl"></i>
                <p className='text-sm font-normal'>FAQ</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Layout