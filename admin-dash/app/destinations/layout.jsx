"use client"

import React from "react";
import { usePathname } from "next/navigation";

const DestinationLayout = ({ children }) => {

	const pathname = usePathname();

	return (
		<main className="min-h-full">
			<section className="flex items-center justify-between mt-6">
				<p className="font-poppins text-[26px] font-semibold">
					{(function (){
						let lastPath = pathname.split('/');
						let len = lastPath.length
						switch (lastPath[len - 1]) {
							case 'destinations':
							case 'schedules': return 'Destination';
							case 'trips': return 'Trips';
							case 'buses': return 'Buses';
							default: return
						}
					})()}
				</p>
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
			{children}
		</main>
	);
};

export default DestinationLayout;
