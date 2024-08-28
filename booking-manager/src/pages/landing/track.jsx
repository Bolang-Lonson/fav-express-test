import React from 'react';
import { useParams } from 'react-router-dom';
import map from '../../assets/map.png';
import driver from '../../assets/Ellipse.png'

const Track = () => {
	const date = (() => {
		let date = new Date();
		const day = date.getDay();
		const mon = date.getMonth();
		const dat = date.getDate();

		return `${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]}, ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][mon]} ${dat}`
	})();

    const {number} = useParams();

	return (
		<div className='bg-slate-100 overflow-clip'>
			<div className='bg-favbluelight h-dvh lg:w-3/5 mx-auto'>
				<div>
					<img src={map} alt="" className='w-full lg:h-80 lg:object-cover'/>
				</div>
				<div className='bg-white h-full rounded-t-[30px] py-6 px-5 lg:p-16 overflow-y-auto flex flex-col gap-7 pb-10'>
					<div className="flex items-center justify-between">
						<p className="text-gray-400 text-16 font-roboto">Tracking Number: <span className='text-black'>{number}</span></p>
						<span className='text-center bg-[#1F75FE26] text-favblue text-16 font-roboto font-medium px-6 py-2 rounded-lg'>Transit</span>
					</div>
					<div className="flex justify-between">
						<div className="grid items-center gap-x-4" style={{gridTemplateColumns: 'repeat(2, max-content)'}}>
							<i className="bi bi-circle text-xs"></i>
							<div className="flex flex-col">
								<span className="text-md text-red font-roboto">Parcel From</span>
								<span className="text-md font-roboto">Yaounde (677-324-561)</span>
							</div>
							<div className="grid grid-cols-subgrid col-span-2 justify-items-center">
								<div className="col-start-1 border border-dashed border-black w-0 h-10"></div>
							</div>
							<i className="bi bi-circle-fill text-xs"></i>
							<div className="flex flex-col">
								<span className="text-md text-favblue font-medium font-roboto">Parcel To</span>
								<span className="text-md font-roboto">Yaounde (677-324-561)</span>
							</div>
						</div>
						<div className="flex flex-col justify-around">
							<p className="text-gray-400 font-roboto text-md">{date}</p>
							<p className="text-gray-400 font-roboto text-md">{date}</p>
						</div>
					</div>
					<div className="w-full flex justify-between flex-wrap">
						<div>
							<p className="text-md font-roboto">Sender</p>
							<p className="text-16 text-favblue font-roboto">Lonson</p>
						</div>
						<div>
							<p className="text-md font-roboto">Receiver</p>
							<p className="text-16 text-favblue font-roboto">Fabien</p>
						</div>
						<div>
							<p className="text-md font-roboto">Cost</p>
							<p className="text-16 text-favblue font-roboto">XAF 1000</p>
						</div>
					</div>
					<div className="flex justify-between">
						<div className='flex gap-2 lg:gap-4'>
							<img src={driver} alt="" className='h-10 w-10'/>
							<div>
								<p className='font-roboto text-16'>Jean Bet</p>
								<p className="text-gray-400 font-roboto text-md">Driver</p>
							</div>
						</div>
						<div className="flex gap-2 lg:gap-4 items-center">
							<div className="w-[39px] h-[39px] rounded-[50%] border border-favblue text-favblue relative"><i className="bi bi-chat-left-dots absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i></div>
							<div className="w-10 h-10 rounded-[50%] bg-favblue text-white relative"><i className="bi bi-telephone absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i></div>
						</div>
					</div>
					<div className="text-center fixed bottom-[7%] left-0 w-full">
						<a href={`/track/${number}/status`} className="bg-favblue text-16 font-roboto text-white py-3 px-28 rounded-lg">Parcel Status</a>
					</div>
				</div>
			</div>
		</div>
		
	);
}

export default Track;


export const TrackStatus = () => {
	const date = (() => {
		let date = new Date();
		const day = date.getDay();
		const mon = date.getMonth();
		const dat = date.getDate();

		return `${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]}, ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][mon]} ${dat}`
	})();

    const {number} = useParams();

	return (
		<div className='bg-slate-100 overflow-clip'>
			<div className='bg-favbluelight h-dvh lg:w-3/5 mx-auto'>
				<div>
					<img src={map} alt="" className='w-full lg:h-80 lg:object-cover'/>
				</div>
				<div className='bg-white h-full rounded-t-[30px] py-6 px-5 lg:p-16 overflow-y-auto flex flex-col gap-10 pb-10'>
					<div className="flex items-center justify-between">
						<p className="text-gray-400 text-16 font-roboto">Tracking Number: <span className='text-black'>{number}</span></p>
						<span className='text-center bg-[#1F75FE26] text-favblue text-16 font-roboto font-medium px-6 py-2 rounded-lg'>Transit</span>
					</div>
					<div className="flex justify-between">
						<div className="grid items-center gap-x-4" style={{gridTemplateColumns: 'repeat(2, max-content)'}}>
							<i className="bi bi-circle-fill text-xs"></i>
							<div className="flex flex-col">
								<span className="text-md text-favblue font-roboto">Delivery</span>
								<span className="text-md font-roboto">Yaounde ({(new Date()).toLocaleTimeString()})</span>
							</div>
							<div className="grid grid-cols-subgrid col-span-2 justify-items-center">
								<div className="col-start-1 border border-dashed border-black w-0 h-10"></div>
							</div>
							<i className="bi bi-circle-fill text-xs"></i>
							<div className="flex flex-col">
								<span className="text-md text-favblue font-medium font-roboto">In Transit</span>
								<span className="text-md font-roboto">Douala ({(new Date()).toLocaleTimeString()})</span>
							</div>
							<div className="grid grid-cols-subgrid col-span-2 justify-items-center">
								<div className="col-start-1 border border-dashed border-black w-0 h-10"></div>
							</div>
							<i className="bi bi-circle text-xs"></i>
							<div className="flex flex-col">
								<span className="text-md text-favblue font-medium font-roboto">Arrived</span>
								<span className="text-md font-roboto">Buea ({(new Date()).toLocaleTimeString()})</span>
							</div>
						</div>
						<div className="flex flex-col justify-around">
							<p className="text-gray-400 font-roboto text-md">{date}</p>
							<p className="text-gray-400 font-roboto text-md">{date}</p>
							<p className="text-gray-400 font-roboto text-md">{date}</p>
						</div>
					</div>
					<div className="flex justify-between">
						<div className='flex gap-2 lg:gap-4'>
							<img src={driver} alt="" className='h-10 w-10'/>
							<div>
								<p className='font-roboto text-16'>Jean Bet</p>
								<p className="text-gray-400 font-roboto text-md">Driver</p>
							</div>
						</div>
						<div className="flex gap-2 lg:gap-4 items-center">
							<div className="w-[39px] h-[39px] rounded-[50%] border border-favblue text-favblue relative"><i className="bi bi-chat-left-dots absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i></div>
							<div className="w-10 h-10 rounded-[50%] bg-favblue text-white relative"><i className="bi bi-telephone absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
