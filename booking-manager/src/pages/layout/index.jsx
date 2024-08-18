import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {

    const baseClass = 'font-bold text-center';
  return (
    <div className='w-full'>
        
        <div className='bg-slate-100 min-h-[100dvh]'><Outlet/></div>
        <div className="fixed w-full py-3 sm:py-5  bottom-0 bg-white flex flex-row items-center justify-around px-1">
            <NavLink 
                to='/home' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favbluelight': baseClass+' text-gray-400')}
            >
                <i className="bi bi-house-door text-2xl"></i>
                <p className='text-sm font-normal'>Home</p>
            </NavLink>
            <NavLink 
                to='/tickets' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favbluelight': baseClass+' text-gray-400')}

            >
                <i className="bi bi-ticket-perforated text-2xl"></i>
                <p className='text-sm font-normal'>Tickets</p>
            </NavLink>
            <NavLink 
                to='/profile' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favbluelight': baseClass+' text-gray-400')}
            >
                <i className="bi bi-person text-2xl"></i>
                <p className='text-sm font-normal'>Profile</p>
            </NavLink>
            <NavLink 
                to='/wallet' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favbluelight': baseClass+' text-gray-400')}
            >
                <i className="bi bi-wallet2 text-2xl"></i>
                <p className='text-sm font-normal'>Wallet</p>
            </NavLink>
            <NavLink 
                to='/settings' exact='true'
                className={({isActive}) => (isActive? baseClass+' text-favbluelight': baseClass+' text-gray-400')}
            >
                <i className="bi bi-gear text-2xl"></i>
                <p className='text-sm font-normal'>Settings</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Layout