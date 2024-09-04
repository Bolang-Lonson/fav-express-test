/* eslint-disable */
import Image from "next/image"
import Link from "next/link"
import white_bus_pic from '../assets/VERSION 2.png'

const Sidebar = () => {
  return (
    <aside className='basis-64 bg-favblue min-h- flex flex-col py-5 gap-8'>
        <div className="sidebar-header flex justify-center items-center">
            <Image
                src={white_bus_pic}
                alt='fav express logo'
                width={150}
            />
        </div>
        <ul className="sidebar-links w-full flex flex-col items-center text-white gap-3 border">
            <li className='text-x w-10/12 border p-2 hover:bg-[#00000040]'>
                <Link href='/' className='w-full flex justify-between items-center'><i className="bi bi-columns-gap text-xl"></i> Dashboard <span></span></Link>
            </li>
            <li>
                <Link href='/payments'>Payments</Link>
            </li>
            <li>
                <Link href='/bookings'>Bookings</Link>
            </li>
            <li>
                <Link href='/schedules'>Schedules</Link>
            </li>
            <li>
                <Link href='/destinations'>Desitinations</Link>
            </li>
            <li>
                <Link href='/settings'>Settings</Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar