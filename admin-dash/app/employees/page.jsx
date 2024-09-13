"use client";

import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Card, Modal, ContentSwitcher }from '../components';

import logo1 from '../assets/VERSION 1.png';

function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

const Schedules = () => {

	const AddEmployeeModalRef = useRef(null);
	const DeleteEmployeeModalRef = useRef(null);

	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [delPg, setDelPg] = useState(0);	// delete modal view index. 0 for delete action, 1 for delete complete

	const employees = [1, 2, 3, 4, 5];

	// Taking a maximum of 10 schedules being displayed
	const numOfPages = Math.ceil(employees.length / 10);

	return (
		<div className="min-h-full">
			<section className="flex items-center justify-between mt-6">
				<p className="font-poppins text-[26px] font-semibold">Employees</p>
				<div className="bg-white rounded-lg p-2 basis-[10%]">
					<select
						name="period"
						id="period"
						className="bg-transparent outline-none font-poppins text-xs font-medium w-full"
					>
						<option value="Today">This Week</option>
					</select>
				</div>
			</section>
			<section>
				<Card className={"w-full mt-6 py-6 h-fit"}>
					<div className="flex px-6">
						<button 
							className="ms-auto bg-favblue px-8 py-2 text-white font-poppins text-x font-semibold rounded-lg"
							onClick={() => AddEmployeeModalRef.current.showModal()}
						>Add Employee</button>
					</div>
					<div className="flex items-center justify-between py-8 px-6">
						<p className="font-poppins text-xl font-medium">Employee Listing</p>
						<div className="border-b border-black pb-1"><span className="bi bi-search me-2"></span><input type="search" placeholder='Search' className='outline-none'/></div>
					</div>
					<table className="fav-table w-full border-collapse table-auto">
						<thead className='border-t border-b'>
							<tr>
								<th>#</th>
								<th>NAME</th>
								<th>PHONE NUMBER</th>
								<th>EMAIL</th>
								<th>ROLE</th>
								<th>GENDER</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							{employees.map((el, idx) => 
								(
									<tr key={idx}>
										<td>{el}</td>
										<td>Lonson LePro</td>
										<td>677354211</td>
										<td>fexpress@gmail.com</td>
										<td>Admin</td>
										<td>Male</td>
										<td>
											<div className='flex justify-center gap-4 text-x'>
												<button className="bi bi-eye text-green-800" onClick={() => window.location.pathname = `${window.location.pathname}/lonson`}></button>
												<button className="bi bi-trash text-red" onClick={() => DeleteEmployeeModalRef.current.showModal()}></button>
											</div>
										</td>
									</tr>
								)
							)}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan={8}>
									<div className="w-full flex items-center justify-end mt-6 gap-4 pe-12">
										<button className='flex items-center'><i className="bi bi-arrow-left-short text-lg"></i>previous</button>
										{range(1, numOfPages).map((num, idx) => {
											return (
												<div key={idx} className="w-8 aspect-square bg-black rounded-md text-white justify-center flex items-center">{num}</div>
											)
										})}
										<button className='flex items-center'>next<i className="bi bi-arrow-right-short text-lg"></i></button>
									</div>
								</td>
							</tr>
						</tfoot>
					</table>
				</Card>
			</section>
			<Modal reference={AddEmployeeModalRef} className={'min-w-[50vw] rounded-xl py-8 px-20'}>
				{/* Logo and close button */}
        <div className="flex items-start justify-between">
          <Image src={logo1} alt='favour colour logo' width={100} className='aspect-square'/>
          <button className="bi bi-x text-gray-400 text-4xl translate-x-10 hover:text-black" onClick={() => AddEmployeeModalRef.current.close()}></button>
        </div>
				{/* Instruction */}
        <div className="flex items-start justify-between mt-4">
          <p className="font-poppins text-[54px] font-bold text-[#42505C] leading-[68px]">Add<br/>Employee</p>
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
				{/* photo uploader */}
				<div className="flex items-center gap-4">
					<label htmlFor="profileImg" className='font-poppins text-xs'>Profile Image</label>
					<input type="file" name="profileImage" id="profileImg" className='border'/>
				</div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-8"></div>
				{/* add button */}
				<button className="bg-favblue text-white rounded-3xl py-2 w-1/3 block mx-auto my-3">Add</button>
      </Modal>
			<Modal reference={DeleteEmployeeModalRef} className={'w-96 rounded-xl p-3'}>
				<button className="block ms-auto bi bi-x text-3xl text-gray-400 hover:text-black" onClick={() => {DeleteEmployeeModalRef.current.close(); setDelPg(0); setLoading(false)}}></button>
				<ContentSwitcher viewIndex={delPg} className={'pb-4'}>
					{/* Deleting */}
					<div className="flex flex-col items-center py-2 px-4 gap-4">
						<span className="bi bi-trash text-4xl text-[#E22134] bg-[#E221344B] w-20 aspect-square rounded-full flex items-center justify-center"></span>
						<p className="font-poppins text-xl font-semibold">Delete Account</p>
						<p className="font-poppins text-base font-normal">This will permanently delete Lonson from Favour Express and can’t be restored </p>
						<div className='w-full mt-8 flex gap-4'>
							<button className="bg-favblue text-white grow py-2 rounded-lg" onClick={() => DeleteEmployeeModalRef.current.close()}>Cancel</button>
							<button 
								className={`bg-[#E221344B] text-[#E22134] grow py-2 rounded-lg ${loading && 'opacity-50'}`}
								onClick={() => {
									// simulating deletion
									setLoading(true);
									setTimeout(() => setDelPg(1), 1000);
								}}
							>Delete</button>
						</div>
					</div>
					{/* Delete successful */}
					<div className="flex flex-col items-center py-6 px-4 gap-6">
						<span className="bi bi-check text-4xl text-white bg-favblue w-20 aspect-square rounded-full flex items-center justify-center"></span>
						<p className="font-poppins text-base font-normal">Account deleted successfully</p>
					</div>
				</ContentSwitcher>
			</Modal>
		</div>
	)
}
  
  export default Schedules;