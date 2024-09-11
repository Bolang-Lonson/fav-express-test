
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import white_bus_pic from '../assets/VERSION 2.png';
import { useEffect } from "react";

const Sidebar = () => {

    const pathname = usePathname();

    async function signOut () {};

  return (
    <aside className='basis-64 max-h-screen bg-favblue flex flex-col items-center py-5 pb-[5.75rem] gap-8'>
        <div className="sidebar-header flex justify-center items-center">
            <Image
                src={white_bus_pic}
                alt='fav express logo'
                width={150}
            />
        </div>
        <ul className="sidebar-links">
            <li>
                <Link href='/' className={`side-link ${(pathname === '/')? 'active': ''}`}><i className="bi bi-columns-gap text-xl"></i> Dashboard</Link>
            </li>
            <li>
                <Link href='/payments' className={`side-link ${(pathname === '/payments') && 'active'}`}><i className="bi bi-bar-chart-line-fill text-xl"></i>Payments</Link>
            </li>
            <li>
                <Link href='/bookings' className={`side-link ${(pathname === '/bookings') && 'active'}`}><i className="bi bi-star-fill text-xl"></i>Bookings</Link>
            </li>
            <li>
                <Link href='/schedules' className={`side-link ${(pathname === '/schedules') && 'active'}`}><i className="bi bi-calendar text-xl"></i>Schedules</Link>
            </li>
            <li>
                <Link href='/destinations' className={`side-link ${(pathname === '/destinations') && 'active'}`}><i className="bi bi-crosshair text-xl"></i>Desitinations</Link>
            </li>
            <li>
                <Link href='/settings' className={`side-link ${(pathname === '/settings') && 'active'}`}><i className="bi bi-gear-fill text-xl"></i>Settings</Link>
            </li>
        </ul>
        <button 
            className="logout"
            onClick={signOut}
        >
            Log Out
        </button>
    </aside>
  )
}

export default Sidebar;