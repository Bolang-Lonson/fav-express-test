import React, { useState } from 'react';
import hostess from '../../../assets/bus_hostess-removebg-preview 1.png';
import freeWifi from '../../../assets/Free_WIFI-removebg-preview 1.png';
import meal from '../../../assets/bread vector 1.png'
import mtn from '../../../assets/mtn_logo-removebg-preview 1.png';
import orange from '../../../assets/orange_money-removebg-preview 1.png';
import confetti from '../../../assets/festive confetti.png';
import './views.css'

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
  return (
	<div className="py-10 md:py-24 px-8 md:px-24 flex flex-col gap-6 lg:gap-14">
		<div className="flex justify-center relative">
			<img src={confetti} alt="" className='w-[150px] h-[150px] absolute' id='confetti'/>
			<div className="rounded-[50%] bg-favblue w-[100px] h-[100px] translate-y-[35px] relative">
				<i className="bi bi-check-lg text-white text-6xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></i>
			</div>
		</div>
		<p className="font-roboto text-16 mt-14 lg:text-3xl text-center">Your payment was made successfully </p>
		<button 
            className='text-center w-full md:w-1/2 mx-auto rounded-lg text-sm max-sm:text-[1rem] text-white bg-favblue py-3 font-roboto'
        >Download Ticket</button>
	</div>
  )
}
