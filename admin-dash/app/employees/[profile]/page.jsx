"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Dropdown, DropdownButton, DropdownContent, Modal } from '@/app/components';

import profilePic from '../../assets/profilePic2.jpg';
import logo1 from '../../assets/VERSION 1.png';

const AccountProfile = ({ params }) => {
	const EditEmployeeModalRef = useRef(null);
	const SuspendEmployeeModalRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-full">
      <nav className='mt-6 font-poppins text-xs' aria-label='Breadcrumb'>
        <ul className='flex'>
          <li>
            <a href="/employees" className='underline me-3'>Employees </a>
          </li>
          <li>/</li>
          <li>
            <a href={`/employees/${params['profile']}`} className='ms-3'>View Employee</a>
          </li>
        </ul>
      </nav>
      {/* top part with profile image */}
      <div className="mt-10 flex items-center justify-between px-4" id='top'>
        <div className='flex items-center gap-6'>
          <Image 
            src={profilePic} alt='Employee profile image'
            placeholder='blur' width={150} height={150}
            className='rounded-full'
          />
          <div className='flex flex-col gap-3'>
            <button className="bg-favblue py-2 px-10 w-full text-white rounded-lg">Change Picture</button>
            <button className="bg-favredlight py-2 px-10 w-full text-favred rounded-lg">Delete Picture</button>
          </div>
        </div>
        <Image src={logo1} alt='Favour logo' width={200} height={200}/>
      </div>
      {/* divider */}
      <div className="border border-dashed border-gray-300 mt-8"></div>
      {/* middle grid */}
      <button 
        className="block ms-auto border border-green-600 text-green-600 font-poppins font-medium text-sm my-4 py-1 px-4 rounded-lg me-8 hover:bg-green-600 hover:text-white active:shadow-inner active:shadow-emerald-900 active:translate-y-[2px]"
        style={{transition: 'background-color ease-out 0.2s, color ease-out 0.2s'}}
        onClick={() => EditEmployeeModalRef.current.showModal()}
      ><i className="bi bi-pencil"></i> Edit</button>
      <div className="grid grid-cols-3 gap-y-10 font-poppins text-base font-normal px-10 justify-items-center" id='profiledetails'>
        <div className="flex flex-col">
          <p>First Name</p>
          <p>Bolang-Lonson</p>
        </div>
        <div className="flex flex-col">
          <p>Last Name</p>
          <p>LePro</p>
        </div>
        <div className="flex flex-col">
          <p>Phone Number</p>
          <p>677213421</p>
        </div>
        <div className="flex flex-col">
          <p>Email</p>
          <p>lonsonlepro@gmail.com</p>
        </div>
        <div className="flex flex-col">
          <p>ID/Passport Number</p>
          <p>00001123453765</p>
        </div>
        <div className="flex flex-col">
          <p>Employee Role</p>
          <p>Driver</p>
        </div>
        <div className="flex flex-col">
          <p>Gender</p>
          <p>Male</p>
        </div>
        <div className="flex flex-col">
          <p>Address</p>
          <p>Buea</p>
        </div>
      </div>
      {/* divider */}
      <div className="border border-dashed border-gray-300 my-8"></div>
      {/* bottom: assign and suspend */}
      <div className='p-8 flex gap-4'>
        <Dropdown className={'relative'}>
          <DropdownButton className={'text-favblue border border-favblue rounded-lg py-1 ps-8 pe-3'} onClick={() => setIsOpen(!isOpen)}>Assign Role <i className={`bi bi-${isOpen? 'caret-up-fill': 'caret-down-fill'} ms-4`}></i></DropdownButton>
          <DropdownContent className={`${isOpen ? '': 'hidden'} bg-white border-t rounded-md mt-2`}>
            <div className="hover:bg-slate-200 p-2">Driver</div>
            <div className="hover:bg-slate-200 p-2">Manager</div>
            <div className="hover:bg-slate-200 p-2">Secretary</div>
            <div className="hover:bg-slate-200 p-2">Admin</div>
          </DropdownContent>
        </Dropdown>
        <button 
          className="border border-favred text-favred py-1 px-8 rounded-lg hover:bg-favred hover:text-white active:shadow-inner active:shadow-rose-700 active:translate-y-[2px]"
          style={{transition: 'background-color ease-out 0.2s, color ease-out 0.2s'}}
          onClick={() => SuspendEmployeeModalRef.current.showModal()}
        >Suspend Lonson</button>
      </div>
      <Modal reference={EditEmployeeModalRef} className={'min-w-[50vw] rounded-xl py-8 px-20'}>
				{/* Logo and close button */}
        <div className="flex items-start justify-between">
          <Image src={logo1} alt='favour colour logo' width={100} className='aspect-square'/>
          <button className="bi bi-x text-gray-400 text-4xl translate-x-10 hover:text-black" onClick={() => EditEmployeeModalRef.current.close()}></button>
        </div>
				{/* Instruction */}
        <div className="flex items-start justify-between mt-4">
          <p className="font-poppins text-[54px] font-bold text-[#42505C] leading-[68px]">Edit<br/>Employee</p>
          <p className="font-poppins text-sm">Please fill in the information of your<br/> employee below carefully</p>
        </div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-4"></div>
				{/* Input field */}
				<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-4">
					<div className='flex flex-col gap-1'>
						<label htmlFor="firstName" className='font-poppins text-xs'>First Name</label>
						<input type='text' id="firstName" className='w-full outline-none border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="lastName" className='font-poppins text-xs'>Last Name</label>
						<input type='text' id="lastName" className='w-full outline-none border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="phoneNum" className='font-poppins text-xs'>Phone Number</label>
						<input type="tel" id="phoneNum" className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="email" className='font-poppins text-xs'>Email (optional)</label>
						<input type='email' id="email" className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="idNum" className='font-poppins text-xs'>ID/Passport Number</label>
						<input type='text' id="idNum" className='w-full border p-2'/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="role" className='font-poppins text-xs'>Employee Role</label>
						<select id="role" className="w-full border p-2">
							<option value="">Driver</option>
							<option value="">Admin</option>
						</select>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="gender" className='font-poppins text-xs'>Gender</label>
						<select id="gender" className="w-full border p-2">
							<option value="">Male</option>
							<option value="">Female</option>
						</select>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="address" className='font-poppins text-xs'>Adress</label>
						<select id="address" className="w-full border p-2">
							<option value="">Buea</option>
							<option value="">Douala</option>
							<option value="">Yaounde</option>
						</select>
					</div>
				</div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-8"></div>
				{/* add button */}
				<button className="bg-favblue text-white rounded-3xl py-2 w-1/3 block mx-auto my-3">Update</button>
      </Modal>
      <Modal reference={SuspendEmployeeModalRef} className={'w-96 rounded-xl p-3'}>
				<button className="block ms-auto bi bi-x text-3xl text-gray-400 hover:text-black" onClick={() => SuspendEmployeeModalRef.current.close()}></button>
        <div className="flex flex-col items-center py-2 px-4 gap-4">
          <span className="bi bi-slash-circle text-4xl text-[#E22134] bg-[#E221344B] w-20 aspect-square rounded-full flex items-center justify-center"></span>
          <p className="font-poppins text-xl font-semibold">Suspend User</p>
          <p className="font-poppins text-base font-normal">Enter reasons for suspending user </p>
          <textarea id="suspension-reason" placeholder='Enter text here...' className='w-full border p-2 rounded-md'></textarea>
          <div className='w-full mt-8 flex gap-4'>
            <button className="bg-favblue text-white grow py-2 rounded-lg" onClick={() => SuspendEmployeeModalRef.current.close()}>Cancel</button>
            <button className={`bg-[#E221344B] text-[#E22134] grow py-2 rounded-lg`}>Submit</button>
          </div>
        </div>
			</Modal>
    </main>
  )
}

export default AccountProfile;