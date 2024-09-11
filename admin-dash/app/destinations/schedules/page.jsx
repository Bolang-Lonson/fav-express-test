"use client"

import React , { useState }from 'react'
import { Card } from '../page';

function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

const Schedules = () => {
	const [page, setPage] = useState(1);
	const schedules = [1,2,3,4,5];

	// Taking a maximum of 10 schedules being displayed
	const numOfPages = Math.floor(schedules.length / 10);

  return (
    <div className='min-h-full'>
      <nav className='mt-6 font-poppins text-xs' aria-label='Breadcrumb'><a href="/destinations" className='underline'>Destination</a> / <i>Add Schedule</i></nav>
			<Card className={"w-full mt-6 py-6 h-fit"}>
				<div className="flex px-6">
					<button className="ms-auto bg-favblue px-8 py-2 text-white font-poppins text-x font-semibold rounded-lg">Add Destination</button>
				</div>
				<div className="flex items-center justify-between py-8 px-6">
					<p className="font-poppins text-xl font-medium">Scheduled Destinations</p>
					<div className="border-b border-black pb-1"><span className="bi bi-search me-2"></span><input type="search" placeholder='Search' className='outline-none'/></div>
				</div>
				<table className="w-full border-collapse table-auto" id='schedule-table'>
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
										<button className="bi bi-pencil text-green-800"></button><button className="bi bi-trash text-red"></button>
										</div>
									</td>
								</tr>
							)
						)}
					</tbody>
					<tfoot>
						<tr>
							<td colspan={8}>
								<div className="w-full flex items-center justify-end">
									<button>previous</button>
									{range(1, 10).map((num) => {
										return (
											<div className="w-8 aspect-square bg-black rounded-md text-white">{num}</div>
										)
									})}
								</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</Card>
    </div>
  )
}

export default Schedules;