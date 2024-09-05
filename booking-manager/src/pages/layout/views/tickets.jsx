import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../../../assets/VERSION 2.png';
import QR from '../../../assets/QR_Code-removebg-preview 1.png'
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import {useMediaQuery} from 'react-responsive';

const Tickets = ({tickets}) => {

	const navigate = useNavigate();

  return (
    <div className='pb-32 pt-[5.5rem] md:pt-28'>
		{
		tickets.length === 0?
		<div className='flex flex-col items-center h-[75vh] justify-center gap-6'>
			<p className="text-2xl font-roboto">No tickets available now</p>
			<a href="/home" className='underline text-favblue font-roboto'>Book Now</a>
		</div>
		:
		<div className='flex flex-col w-[90%] md:w-4/5 lg:w-3/5 mx-auto gap-5'>
			{tickets.map((ticket, idx) => (
				<div 
					className="ticket bg-white w-full rounded-xl flex flex-col cursor-pointer" key={idx}
					onClick={() => navigate(`/tickets/${idx + 1}`)}
				>
					<div className='py-3 px-5 md:py-6 md:px-24 flex'>
						<div className="basis-3/5 grid gap-x-2 gap-y-1 items-center justify-items-stretch my-2" style={{gridTemplateColumns: 'repeat(3, min-content)'}}>
							<span className='text-md font-roboto'>FROM</span>
							<span className='bi bi-circle-fill text-gray-200 text-xs'></span>
							<span className='text-favblue font-semibold font-roboto'>{ticket.from.name}</span>
							<div className="grid grid-cols-subgrid col-span-3 justify-items-center">
								<div className="col-start-2 border border-[#DBB33C] w-0 h-6"></div>
							</div>
							<span className='text-md font-roboto'>TO</span>
							<span className='bi bi-circle-fill text-gray-200 text-xs'></span>
							<span className='text-favblue font-semibold font-roboto'>{ticket.to.name}</span>
						</div>
						<div className="basis-2/5 flex items-center justify-end my-2">
							<span className='bg-favblue rounded-lg text-white px-4 py-2 font-roboto text-md'>XAF {ticket['amount']}</span>
						</div>
					</div>
					<div className="border-t border-dashed border-black py-3 px-5 md:py-6 md:px-24 flex items-center justify-between">
						<div>
							<i className="bi bi-calendar4-event text-[#DBB33C] me-3 lg:me-4"></i>
							<span className='text-md font-extralight font-roboto'>{(new Date(ticket['payment_time'])).toLocaleDateString()}</span>
						</div>
						<div>
							<i className="bi bi-clock text-[#DBB33C] me-3 lg:me-4"></i>
							<span className='text-md font-extralight font-roboto'>{(new Date(ticket['payment_time'])).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: false })}H</span>
						</div>
					</div>
				</div>
			))}
		</div>
		}
    </div>
  )
};

export default Tickets;


export const TicketView = ({tickets}) => {
	const {id} = useParams();
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});

	const currTicket = tickets[id - 1];

	const navigate = useNavigate();
	const thanksModal = useRef(null);

	function downloadTicket() {
		setTimeout(() => {
			thanksModal.current.showModal();
		}, 500);
	}

  return (
	<div className='pb-32 pt-[5.5rem] md:pt-28'>
		<div className='w-[90%] md:w-4/5 lg:w-3/5 bg-white mx-auto rounded-xl overflow-clip'>
			<div className="bg-favblue flex items-center justify-between px-3">
				<img src={logo} alt="" className='h-10'/>
				<p className='text-white font-roboto'>ID: {currTicket['id']}</p>
			</div>
			<div id="top" className='py-3 md:py-6 px-6 md:px-24 flex flex-wrap justify-between'>
				<div className="basis-3/5 grid gap-x-2 gap-y-1 items-center justify-items-stretch my-2" style={{gridTemplateColumns: 'repeat(3, min-content)'}}>
					<span className='text-md font-roboto'>FROM</span>
					<span className='bi bi-circle-fill text-gray-200 text-xs'></span>
					<span className='text-favblue font-semibold font-roboto'>{currTicket.from.name}</span>
					<div className="grid grid-cols-subgrid col-span-3 justify-items-center">
						<div className="col-start-2 border border-[#DBB33C] w-0 h-6"></div>
					</div>
					<span className='text-md font-roboto'>TO</span>
					<span className='bi bi-circle-fill text-gray-200 text-xs'></span>
					<span className='text-favblue font-semibold font-roboto'>{currTicket.to.name}</span>
				</div>
				<div className="basis-2/5 flex items-center justify-end my-2">
					<span className='bg-favblue rounded-lg text-white px-4 py-2 font-roboto text-md'>XAF {currTicket.amount}</span>
				</div>
			</div>
			<div id="middle" className="py-6 md:py-6 px-4 md:px-24 grid gap-y-6 justify-between border-t border-black border-dashed" style={{gridTemplateColumns: 'repeat(2, max-content)'}}>
				<div className="flex flex-col">
					<p className='text-md font-roboto'>TRAVEL DATE</p>
					<p className='text-favblue font-semibold font-roboto'>{(new dayjs(currTicket.trip_date)).format(`${mobileDisplay ? 'MMM': 'MMMM'} D, YYYY`)}</p>
				</div>
				<div className="flex flex-col">
					<p className='text-md font-roboto'>TIME</p>
					<p className='text-favblue font-semibold font-roboto'>{currTicket.trip_time.substring(0, 5)}</p>
				</div>
				<div className="flex flex-col">
					<p className='text-md font-roboto'>CLASS</p>
					<p className='text-favblue font-semibold font-roboto'>{currTicket.class}</p>
				</div>
				<div className="flex flex-col">
					<p className='text-md font-roboto'>SEAT</p>
					<p className='text-favblue font-semibold font-roboto'>{currTicket.seats} adult</p>
				</div>
			</div>
			<div id="bottom" className='py-4 md:py-6 px-4 md:px-24 border-t border-black border-dashed'>
				<div className="flex flex-col items-center justify-between mb-2 gap-3">
					<p className="text-favblue text-16 font-roboto font-medium">Scan Me</p>
					<img src={QR} alt="QR code" />
					<button 
						className='text-center w-full md:w-1/2 lg:w-1/3 mx-auto rounded-lg text-[1rem] text-white bg-favblue py-3 font-roboto'
						onClick={downloadTicket}
					>Download Ticket</button>
				</div>
			</div>
		</div>
		<dialog className='w-[80vw] lg:w-[30vw] rounded-2xl backdrop:bg-[#21212159]' ref={thanksModal}>
			<div className="pt-10 h-[75vh] md:py-24 px-8 md:px-24 flex flex-col gap-20 text-center">
				<div className="flex justify-center">
					<div className="bg-favblue w-[100px] h-[100px] lg:w-32 lg:h-32 translate-y-[35px] lg:translate-y-12 rounded-[50%] relative">
						<i className="bi bi-hand-thumbs-up text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl"></i>
					</div>
				</div>
				<p className="font-roboto text-16">Thank you for traveling with FAVOUR EXPRESS</p>
				<button 
					className="font-medium text-favblue underline"
					onClick={() => {
						thanksModal.current.close();
						navigate('/');
					}}
				>Go to home</button>
			</div>
		</dialog>
	</div>
  )
};
