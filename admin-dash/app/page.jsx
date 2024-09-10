// import Image from "next/image"

const TotalCard = ({ children, className}) => {
	return (
		<div className={className}>
			{children}
		</div>
	)
}

export default function Dashboard() {
	return (
		<div className="min-h-full">
			<section className="flex items-center justify-between mt-6 border">
				<p className="font-poppins text-[26px] font-semibold">Dashboard</p>
				<div className='bg-white rounded-lg p-2 basis-[10%]'>
					<select name="period" id="period" className='bg-transparent outline-none font-poppins text-xs font-medium w-full'>
						<option value="Today">Today</option>
					</select>
				</div>
			</section>
			<section className='mt-6 border'>

			</section>
		</div>
	);
}