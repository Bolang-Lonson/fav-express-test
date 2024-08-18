import React from 'react';
import logo from '../../../assets/VERSION 2.png';

const Wallet = () => {
	return (
		<div className=' h-full'>
			<div className="bg-favblue flex justify-between pb-10 px-5">
				<div className='flex items-center gap-1'>
					<img 
						src={logo} alt="logo" 
						className='h-14'
					/>
					<p className="text-white">Ticket(s)</p>
				</div>
				<div className='flex items-center gap-6'>
					<p className="text-white">Price</p>
					<p className="bg-red-600 text-white text-sm py-1 px-2 rounded-md border border-black">5000 FRS</p>
				</div>
			</div>
			<div className="bg-white block max-md:w-[90%] md:max-lg:w-3/4 lg:max-xl:w-3/5 w-1/2 mx-auto rounded-md pt-3 translate-y-[-20px]">
				<div id="head" className='flex items-center justify-evenly border-b'>
					<div>MTN Money</div>
					<div>Orange Money</div>
				</div>
				<div id="body">
					<table className=' table'>
						<tbody>
							<tr className=' table-row'>
								<td className=' table-column'>Price</td>
								<td>5000</td>
							</tr>
							<tr>
								<td>Discount</td>
								<td>N/A</td>
							</tr>
							<tr>
								<td>Fee</td>
								<td>500Frs</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
	)
}

export default Wallet