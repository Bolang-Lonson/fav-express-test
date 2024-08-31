import React, { useState } from 'react';
import faqs from '../../landing/faqs.json';


const Faq = () => {

	const [isOpen, setIsOpen] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    });

    const toggleOpen = (idx) => {
        setIsOpen({...isOpen, [idx]: !isOpen[idx]})
    }

	return (
		<div className="bg-white w-full lg:w-3/4 mx-auto h-fit faq-card pb-32">
			{/* FAQs */}
			<div className='text-center pt-20 pb-4 mx-auto rounded-b-md'>
				<h1 className='text-3xl font-bold'>FAQs</h1>
				{/* Accordion */}
				<div id="accordion-container" className='mx-4 lg:mx-16 mt-4 rounded-md'>
					{faqs.slice(0, 5).map(
						(faq, idx) => (
							<div className="w-full cursor-pointer" key={idx}>
								<div 
									className={`max-md:text-xs py-2 text-start px-2 lg:px-8 flex items-center justify-between border-b text-blue-600 ${idx ===0? 'border-t': ''}`}
									onClick={() => toggleOpen(idx)}
								>
									{faq.question}
									<button 
										className={`bi ${isOpen[idx]? 'bi-dash': 'bi-plus'} text-xl lg:text-3xl hover:text-blue-600`} 
										id='plusbtn'
									></button>
								</div>
								<div 
									className={`${isOpen[idx]? 'lg:max-h-52 max-h-28 overflow-y-scroll':'max-h-0'} bg-slate-100 overflow-hidden border-x`}
									style={{
										transition: 'max-height ease-in-out 0.5s',
									}}
								>
									<p className="p-4 max-md:text-xs">{faq.answer}</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
			{/* Complaints */}
			<form action="" className='mt-8 mx-4 text-center overflow-y-auto'>
				<h1 className='text-2xl font-bold mb-6'>Submit Complaints</h1>
				<div className="w-[90%] lg:w-1/2 h-10 my-5 mx-auto">
					<input type="text" className="w-full h-full px-7 border-2 bg-favbluelight focus:outline-none focus:border-green-600 rounded-md" id="name" placeholder='Phone number'/>
				</div>
				<div className="w-[90%] lg:w-1/2 h-10 my-5 mx-auto">
					<input type="text" className="w-full h-full px-7 border-2 bg-favbluelight focus:outline-none focus:border-green-600 rounded-md" id="name" placeholder='Enter your name(optional)'/>
				</div>
				<div className="w-[90%] lg:w-1/2 h-24 my-5 mx-auto">
					<textarea name="issue" id="issue" className="w-full h-full px-7 py-2 border-2 bg-favbluelight focus:outline-none focus:border-green-600 rounded-md" placeholder='Type in your issue or complaint'></textarea>
				</div>
				<button type="submit" className='text-white font-semibold max-md:text-xs bg-favblue py-2 px-3 rounded-md hover:opacity-90'>Submit</button>
			</form>
		</div>
	)
}

export default Faq;