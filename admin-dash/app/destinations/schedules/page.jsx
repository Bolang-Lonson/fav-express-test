"use client"

import React , { useState, useRef }from 'react';
import Image from "next/image"
import { Card } from '../page';
import Modal from '@/app/components/Modal';
import ContentSwitcher from '@/app/components/ContentSwitcher';

import logo1 from '../../assets/VERSION 1.png';

function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

const Schedules = () => {
	const AddDestinationModalRef = useRef(null);
	const EditDestinationModalRef = useRef(null);
	const DeleteDestinationModalRef = useRef(null);

	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [delPg, setDelPg] = useState(0);	// delete modal view index. 0 for delete action, 1 for delete complete

	const schedules = [1,2,3,4,5];

	// Taking a maximum of 10 schedules being displayed
	const numOfPages = Math.ceil(schedules.length / 10);

  return (
    <div className='min-h-full'>
      <nav className='mt-6 font-poppins text-xs' aria-label='Breadcrumb'><a href="/destinations" className='underline'>Destination</a> / <i>Add Schedule</i></nav>
			<Card className={"w-full mt-6 py-6 h-fit"}>
				<div className="flex px-6">
					<button 
						className="ms-auto bg-favblue px-8 py-2 text-white font-poppins text-x font-semibold rounded-lg"
						onClick={() => {
							const AddDestinationModal = AddDestinationModalRef.current;
							AddDestinationModal.showModal();
						}}
					>Add Destination</button>
				</div>
				<div className="flex items-center justify-between py-8 px-6">
					<p className="font-poppins text-xl font-medium">Scheduled Destinations</p>
					<div className="border-b border-black pb-1"><span className="bi bi-search me-2"></span><input type="search" placeholder='Search' className='outline-none'/></div>
				</div>
				<table className="fav-table w-full border-collapse table-auto">
					<thead className='border-t border-b'>
						<tr>
							<th>#</th>
							<th>DEPARTURE</th>
							<th>DESTINATION</th>
							<th>BASE PRICE</th>
							<th>VIP PRICE</th>
							<th>DISTANCE</th>
							<th>STATUS</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{schedules.map((el, idx) => 
							(
								<tr key={idx}>
									<td>{el}</td>
									<td>Yaounde</td>
									<td>Buea</td>
									<td>XAF 5000</td>
									<td>XAF 10000</td>
									<td>2000KM</td>
									<td><span className={`px-8 flex w-fit mx-auto items-center h-10 ${el !== 4? 'bg-[#0080004B] text-[#008000]': 'bg-[#E221344B] text-[#E22134]'} rounded-3xl font-poppins font-semibold`}>Active</span></td>
									<td>
										<div className='flex justify-center gap-4 text-x'>
											<button className="bi bi-pencil text-green-800" onClick={() => EditDestinationModalRef.current.showModal()}></button>
											<button className="bi bi-trash text-red" onClick={() => DeleteDestinationModalRef.current.showModal()}></button>
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
			<Modal reference={AddDestinationModalRef} className={'min-w-[50vw] rounded-xl py-8 px-20'}>
				{/* Logo and close button */}
        <div className="flex items-start justify-between">
          <Image src={logo1} alt='favour colour logo' width={100} className='aspect-square'/>
          <button className="bi bi-x text-gray-400 text-4xl translate-x-10 hover:text-black" onClick={() => AddDestinationModalRef.current.close()}></button>
        </div>
				{/* Instruction */}
        <div className="flex items-start justify-between mt-4">
          <p className="font-poppins text-[54px] font-bold text-[#42505C] leading-[68px]">Add<br/>Destination</p>
          <p className="font-poppins text-sm">Please fill in the information of your<br/> employee below carefully</p>
        </div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-4"></div>
				{/* Input field */}
				<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-4">
					<div className='flex flex-col gap-1'>
						<label htmlFor="depart" className='font-poppins text-xs'>Departure</label>
						<select id="depart" className='w-full outline-none border p-2'>
							<option value="">Yaounde</option>
						</select>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="desti" className='font-poppins text-xs'>Destination</label>
						<select id="desti" className='w-full outline-none border p-2'>
							<option value="">Buea</option>
						</select>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="base_price" className='font-poppins text-xs'>Base Price</label>
						<input type="text" id="base_price" value='XAF 5000' className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="vip_price" className='font-poppins text-xs'>VIP Price</label>
						<input type='number' id="vip_price" className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="dist" className='font-poppins text-xs'>Distance</label>
						<input type='text' id="dist" value='2000km' className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='font-poppins text-xs'>Status</label>
						<div className="flex p-2">
							<input type='radio' id="active" name='activeness' className='me-3'/>
							<label htmlFor="active" className='me-6'>Active</label>
							<input type='radio' id="inactive" name='activeness' className='me-3'/>
							<label htmlFor="inactive">Inactive</label>
						</div>
					</div>
				</div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-8"></div>
				{/* add button */}
				<button className="bg-favblue text-white rounded-3xl py-2 w-1/3 block mx-auto my-3">Add</button>
      </Modal>
			<Modal reference={EditDestinationModalRef} className={'min-w-[50vw] rounded-xl py-8 px-20'}>
				{/* Logo and close button */}
        <div className="flex items-start justify-between">
          <Image src={logo1} alt='favour colour logo' width={100} className='aspect-square'/>
          <button className="bi bi-x text-gray-400 text-4xl translate-x-10 hover:text-black" onClick={() => EditDestinationModalRef.current.close()}></button>
        </div>
				{/* Instruction */}
        <div className="flex items-start justify-between mt-4">
          <p className="font-poppins text-[54px] font-bold text-[#42505C] leading-[68px]">Edit<br/>Destination</p>
          <p className="font-poppins text-sm">Please fill in the information of your<br/> employee below carefully</p>
        </div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-4"></div>
				{/* Input field */}
				<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-4">
					<div className='flex flex-col gap-1'>
						<label htmlFor="depart" className='font-poppins text-xs'>Departure</label>
						<select id="depart" className='w-full outline-none border p-2'>
							<option value="">Yaounde</option>
						</select>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="desti" className='font-poppins text-xs'>Destination</label>
						<select id="desti" className='w-full outline-none border p-2'>
							<option value="">Buea</option>
						</select>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="base_price" className='font-poppins text-xs'>Base Price</label>
						<input type="text" id="base_price" value='XAF 5000' className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="vip_price" className='font-poppins text-xs'>VIP Price</label>
						<input type='number' id="vip_price" className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor="dist" className='font-poppins text-xs'>Distance</label>
						<input type='text' id="dist" value='2000km' className='w-full border p-2'/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='font-poppins text-xs'>Status</label>
						<div className="flex p-2">
							<input type='radio' id="active" name='activeness' className='me-3'/>
							<label htmlFor="active" className='me-6'>Active</label>
							<input type='radio' id="inactive" name='activeness' className='me-3'/>
							<label htmlFor="inactive">Inactive</label>
						</div>
					</div>
				</div>
				{/* divider */}
				<div className="border-dashed border-[0.5px] my-8"></div>
				{/* add button */}
				<button className="bg-favblue text-white rounded-3xl py-2 w-1/3 block mx-auto my-3">Update</button>
      </Modal>
			<Modal reference={DeleteDestinationModalRef} className={'w-96 rounded-xl p-3'}>
				<button className="block ms-auto bi bi-x text-3xl text-gray-400 hover:text-black" onClick={() => {DeleteDestinationModalRef.current.close(); setDelPg(0); setLoading(false)}}></button>
				<ContentSwitcher viewIndex={delPg} className={'pb-4'}>
					{/* Deleting */}
					<div className="flex flex-col items-center py-2 px-4 gap-4">
						<span className="bi bi-trash text-4xl text-[#E22134] bg-[#E221344B] w-20 aspect-square rounded-full flex items-center justify-center"></span>
						<p className="font-poppins text-xl font-semibold">Delete Destination</p>
						<p className="font-poppins text-base font-normal">This will permanently delete this destination from Favour Express and can’t be restored </p>
						<div className='w-full mt-8 flex gap-4'>
							<button className="bg-favblue text-white grow py-2 rounded-lg" onClick={() => DeleteDestinationModalRef.current.close()}>Cancel</button>
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
						<p className="font-poppins text-base font-normal">Destination deleted successfully</p>
					</div>
				</ContentSwitcher>
			</Modal>
    </div>
  )
}

export default Schedules;