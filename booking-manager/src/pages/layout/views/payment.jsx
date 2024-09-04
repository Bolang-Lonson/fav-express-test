import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hostess from '../../../assets/bus_hostess-removebg-preview 1.png';
import freeWifi from '../../../assets/Free_WIFI-removebg-preview 1.png';
import meal from '../../../assets/bread vector 1.png'
import mtn from '../../../assets/mtn_logo-removebg-preview 1.png';
import orange from '../../../assets/orange_money-removebg-preview 1.png';
import confetti from '../../../assets/festive confetti.png';

const Payment = ({payHandle}) => {
	const [payMthd, setPayMethod] = useState('');
	const [momoNum, setMomoNum] = useState('');

	function launchPayment() {
		if(payMthd === 'mtn'){
			// Launch mtn momo payment
			payHandle({number: momoNum, mthd: 'mtn'});
		}
		else if(payMthd === 'orange'){
			// launch orange money payment
			payHandle({number: momoNum, mthd: 'orange'});
		}
	}

	return (
		<div className="py-3 md:py-10 px-8 md:px-24 flex flex-col gap-6 lg:gap-14">
			<p className="text-x text-center text-favblue font-roboto">Select Payment Method</p>
			<div className="flex items-center justify-between md:justify-evenly">
				<div 
					className={`${payMthd === 'mtn'? 'border-[3px]': 'border'} border-yellow-400 h-24 w-32 rounded-lg flex items-center justify-center`}
					onClick={() => setPayMethod('mtn')}
				>
					<img src={mtn} alt="" />
				</div>
				<div 
					className={`${payMthd === 'orange'? 'border-[3px]': 'border'} border-orange-500 h-24 w-32 rounded-lg flex items-center justify-center`}
					onClick={() => setPayMethod('orange')}
				>
					<img src={orange} alt="" />
				</div>
			</div>
			<input 
				type="text" placeholder='Enter your mobile transaction number' value={momoNum}
				className='w-full md:w-1/2 mx-auto border border-black rounded-lg h-10 text-center max-sm:text-sm'
				onChange={(e) => setMomoNum(e.target.value)}
			/>
			<button 
                className='text-center w-full md:w-1/2 mx-auto rounded-lg text-sm max-sm:text-[1rem] text-white bg-favblue py-3 font-roboto'
                onClick={launchPayment}
            >Make Payment</button>
		</div>
	)
}

export default Payment;

export const Benefits = () => {
  return (
	<div className='w-[90%] bg-white rounded-lg p-3 md:p-6 lg:py-6 lg:px-24 mx-auto md:w-3/5'>
		<p className="text-x text-favblue font-roboto">Benefits</p>
		<div className="flex gap-[3.5%] mt-3 lg:mt-6">
			<div className="basis-[31%] bg-favbluelight flex items-center justify-center rounded-lg">
				<img src={hostess} alt="" />
			</div>
			<div className="basis-[31%] bg-favbluelight flex items-center justify-center rounded-lg">
				<img src={freeWifi} alt="" />
			</div>
			<div className="basis-[31%] bg-favbluelight flex items-center justify-center rounded-lg">
				<img src={meal} alt="" />
			</div>
		</div>
	</div>
  )
}


export const PaymentComplete = () => {
	const navigate = useNavigate();

  return (
	<div className="py-10 md:py-24 px-8 md:px-24 flex flex-col gap-10 lg:gap-14">
		<div className="flex justify-center relative flex-wrap gap-4 lg:gap-6">
			<img src={confetti} alt="" className='w-[150px] h-[150px] lg:w-48 lg:h-48 absolute' id='confetti'/>
			<div className="rounded-[50%] bg-favblue w-[100px] h-[100px] lg:w-32 lg:h-32 translate-y-[35px] lg:translate-y-12 relative">
				<i className="bi bi-check-lg text-white text-6xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></i>
			</div>
			<p className="basis-full shrink-0 font-roboto text-16 mt-14 lg:text-3xl text-center">Your payment was made successfully </p>
			<button 
				className='basis-full shrink-0 text-center w-full md:basis-1/2 mx-auto rounded-lg text-[1rem] text-white bg-favblue py-3 font-roboto'
				onClick={() => navigate('/tickets')}
			>Download Ticket</button>
		</div>
		
		<hr style={{borderColor: 'rgba(0, 0, 0, 0.5'}}/>
		<div className="flex flex-col gap-3 items-center">
			<p className="font-roboto text-16 lg:text-x font-medium">Payment amount</p>
			<p className="text-xl lg:text-2xl text-favblue font-roboto font-medium">XAF 7,500</p>
			<p className="text-md lg:text-x">{(new Date()).toUTCString()}</p>
		</div>
	</div>
  )
}

export const PaymentFailed = ({tryAgain}) => {
  return (
	<div className="pt-10 h-[75vh] md:py-24 px-8 md:px-24 flex flex-col gap-20 text-center">
		<div className="flex justify-center">
			<div className="bg-[#D70040] w-[100px] h-[100px] lg:w-32 lg:h-32 translate-y-[35px] lg:translate-y-12 rounded-[50%] relative">
				<i className="bi bi-x-lg text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-6xl"></i>
			</div>
		</div>
		<p className="font-roboto text-16">Sorry we couldn't process your payment</p>
		<button className="font-medium text-favblue" onClick={tryAgain}>Try again</button>
	</div>
  )
}
