"use client"

import Image from "next/image";
import dynamic from "next/dynamic";

import { InfoCard, data, options } from "./bookings/page";

import bluedwg from './assets/bluevector.png';
import reddwg from './assets/redvector.png';

const Chart = dynamic(() => import('react-google-charts'), {
	ssr: false
});

const TotalCard = ({ children, className}) => {
	return (
		<div className={`shadow-sm bg-white rounded-xl ${className}`}>
			{children}
		</div>
	)
}

export default function Dashboard() {
	const info = [
    {title: 'Total Bookings', drawing: bluedwg, value: '1,597', delta: '+3', delta_color: 'text-[#009303]'},
    {title: 'Total Travelers', drawing: reddwg, value: '100', delta: '-3', delta_color: 'text-[#E22134]'},
    {title: 'Total Rescheduled', drawing: reddwg, value: '37', delta: '-3', delta_color: 'text-[#E22134]'},
  ];

	const visitorsStats = [
		['Day', 'Visitor'],
		['Mon', 40],
		['Tue', 60],
		['Wed', 30],
		['Thu', 10],
		['Fri', 50],
		['Sat', 27],
		['Sun', 90],
	]

	return (
		<div className="min-h-full">
			<section className="flex items-center justify-between mt-6">
				<p className="font-poppins text-[26px] font-semibold">Dashboard</p>
				<div className='bg-white rounded-lg p-2 basis-[10%]'>
					<select name="period" id="period" className='bg-transparent outline-none font-poppins text-xs font-medium w-full'>
						<option value="Today">Today</option>
					</select>
				</div>
			</section>
			<section className='mt-6 grid grid-cols-3 gap-x-8'>
				{info.map((item, idx) => (
					<TotalCard key={idx} className='py-3 px-5 relative flex flex-col gap-4 overflow-clip'>
						<p className="font-poppins font-medium text-base text-favgray">{item.title}</p>
						<p className="font-poppins font-medium text-3xl">{item.value}</p>
						<p className="font-poppins font-medium text-xs text-favgray"><span className={item.delta_color}>{item.delta}</span> than last month</p>
						<Image src={item.drawing} className=' absolute right-0 bottom-0'/>
					</TotalCard>
				))}
			</section>
			<section className="flex gap-8 mt-6">
				<InfoCard className='w-full py-4 px-6'>
					<p className="font-poppins font-medium text-base text-favgray">Payment Amount <span className="float-end">Total: <span className='text-black text-xl'>XAF 200.00M</span></span></p>
          <Chart 
            chartType='LineChart'
            width='100%'
            height='340px'
            data={data}
            options={options}
          />
				</InfoCard>
				<InfoCard className='w-full py-4 px-6'>
					<p className="font-poppins font-medium text-base text-favgray">Visitors Statistics</p>
					<Chart 
            chartType='ColumnChart'
            width='100%'
            height='360px'
            data={visitorsStats}
						option={{legend: false}}
          />
				</InfoCard>
			</section>
		</div>
	);
}