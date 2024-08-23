import React, { useState } from 'react';
import logo from '../../../assets/VERSION 2.png';
import mtn from '../../../assets/MobileMoney 2.jpg';
import orange from '../../../assets/orange-money-logo.png';

const Payment = () => {
	const [payMthd, setPayMethod] = useState('mtn');

	const table = {
		Price: 5000,
		Discount: 'N/A',
		Fee: '500Frs'
	};

	return (
		<div className=' h-full'>
			<div className="bg-favblue flex justify-between pb-10 px-5">
				<div className='flex items-center gap-1'>
					<a href="/">
					<img 
						src={logo} alt="logo" 
						className='h-14'
					/>
					</a>
					<p className="text-white">Ticket(s)</p>
				</div>
				<div className='flex items-center gap-6'>
					<p className="text-white">Price</p>
					<p className="bg-red-600 text-white text-sm py-1 px-2 rounded-md border border-black">5000 FRS</p>
				</div>
			</div>
			<div className="bg-white block max-md:w-[90%] md:max-lg:w-3/4 lg:max-xl:w-3/5 w-1/2 mx-auto rounded pt-3 translate-y-[-20px]">
				<div id="head" className='flex items-center justify-evenly border-b'>
					{/* Payment Method Picker */}
					<div 
						className={`flex gap-2 items-center ${payMthd === 'mtn'? 'border-favblue': 'border-white'} border-b-4 pb-2`} onClick={() => setPayMethod('mtn')}
						style={{transition: 'border-color ease 0.5s'}}
					>
						<img 
							src={mtn} alt="mtn"
							className=' h-8'
						/>
						<p>MTN Money</p>
					</div>
					<div 
						className={`flex gap-2 items-center ${payMthd === 'orange'? 'border-favblue': 'border-white'} border-b-4 pb-2`} onClick={() => setPayMethod('orange')}
						style={{transition: 'border-color ease 0.5s'}}
					>
						<img 
							src={orange} alt="orange"
							className=' h-8'
						/>
						<p>Orange Money</p>
					</div>
				</div>
				<div id="body" className=' py-4 px-8'>
					<table className='w-full table-auto'>
						<tbody>
							{Object.keys(table).map(key => (
								<tr>
									<td className='text-sm ps-2 font-medium'>{key}</td>
									<td className='w-1/12 text-start text-sm text-gray-400 font-semibold'>{table[key]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div id="foot" className='border-t flex items-center justify-between py-3 ps-10 pe-5'>
					<p className='text-sm font-medium'>Total Payment</p>
					<p className='text-sm font-semibold text-gray-500'>5500 FRS</p>
				</div>
			</div>
			<div 
				id="input-box"
				className='w-4/5 md:w-1/4 mx-auto h-14 border border-black rounded-lg mt-8'
			>
				<input 
					type="text" name="telephone" id="telephone" 
					placeholder='Input your telephone number +237'
					className='w-full h-full rounded-lg px-5 text-center bg-slate-200'
				/>

			</div>
			<button className="w-4/5 md:w-1/4 block text-white rounded-md mx-auto my-10 lg:my-16 p-2 bg-violet-500">Pay</button>
		</div>
	)
}

export default Payment;