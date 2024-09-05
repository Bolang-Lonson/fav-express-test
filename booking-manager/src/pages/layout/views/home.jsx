import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios'
import logo from '../../../assets/VERSION 2.png';
import { DatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import {useMediaQuery} from 'react-responsive';
import Payment, { Benefits, PaymentComplete, PaymentFailed } from './payment';

dayjs.locale('en');

const Home = () => {
    const [networkError, setNetworkError] = useState(false);
    // Loading locations for departure and desination
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get('https://valiant-wholeness-production.up.railway.app/api/v1/towns/');
                const locationArray = resp.data.results;
                const active = locationArray.filter((loc) => loc.is_active);
                setNetworkError(false);
                setLocations(active.map((loc) => {
                    return {name: loc.slug, label: loc.name, id: loc.id}
                }));
            } catch (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code outside the 2xx range
                  console.error('Error Response:', error.response.data);
                } else if (error.request) {
                  // The request was made but no response was received (network error)
                  setNetworkError(true);
                  console.error('Network Error:', error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.error('Error:', error.message);
                }
            }
        })()     
    }, []);

	const modalRef = useRef(null);
    const mobileDisplay = useMediaQuery({ query : '(max-width: 767.99px)'});
    const [timeSet, setTimeSet] = useState(0);

    // react date-picker logic
    const [payAmt, setPayAmt] = useState(0);

    // agency locations
    const [locations, setLocations] = useState([]);

    // Value states to eventually post to backend
    const [travelData, setTravelData] = useState({
        departure: {value: 'Select Departure', label: 'Select Departure City'},
        destination: {value: 'Enter Destination', label: 'Select Desitination City'},
        trip: {departure_time: '', route: {base_price: 7000}},
        travelDate: new dayjs(),
        seats: {value: 1, label: 1},
        travelType: {value: 'One Way', label: 'One-way'},
        travelClass: {value: 'standard', label: 'Classic'},
    })

    // user details
    const [userDetails, setUserDetails] = useState({
        surname: '',
        givenName: '',
        id_number: null,
        mobile_number: null
    });

    // departure time logic
    const [trips, setTrips] = useState([]); // these times will be changed through the admin and fetched from the backend
    useEffect(() => {
        (async () => {
            try {
                const resp = await axios.get(
                    'https://valiant-wholeness-production.up.railway.app/api/v1/trips/filter/',
                    {
                        params: {
                            origin: travelData.departure.id,
                            destination: travelData.destination.id,
                            date: travelData.travelDate.format('YYYY-MM-DD'),
                        }
                    }
                );
                setNetworkError(false);
                setTrips(resp.data);
            } catch (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code outside the 2xx range
                  console.error('Error Response:', error.response.data);
                } else if (error.request) {
                  // The request was made but no response was received (network error)
                setNetworkError(true);
                  console.error('Network Error:', error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.error('Error:', error.message);
                }
            }
        })();
    },[travelData.departure, travelData.destination, travelData.travelDate])

    const scrollRight = (e) => {
        e.preventDefault();
        const newTimeSet = timeSet + 3;
        setTimeSet(newTimeSet);
        const newSet = document.getElementById(`time${newTimeSet}`);
        if (newSet) {
            newSet.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }
    const scrollLeft = (e) => {
        e.preventDefault();
        const newTimeSet = timeSet - 3;
        setTimeSet(newTimeSet);
        const newSet = document.getElementById(`time${newTimeSet}`);
        if (newSet) {
            newSet.scrollIntoView({behavior: 'smooth', inline: 'start'});
        }
    }

    async function payHandle({...info}) {
        console.log(`${info.number} through ${info.mthd}`)
        const modal = modalRef.current;
        modal.showModal();

        let finalPage;
        try {
            const resp = await axios.post('https://valiant-wholeness-production.up.railway.app/api/v1/booking-with-payment/',
            {
                "customer_info": {
                    "identification": userDetails.id_number,
                    "phone_number": userDetails.mobile_number,
                    "username": `${userDetails.givenName.replace(' ', '')}${userDetails.surname.replace(' ', '')}`
                },
                "payment": {
                    "amount": payAmt,
                    "provider": info.mthd,
                    "payer_name": "Saadiq",
                    "payer_phone": info.number
                },
                "seats": travelData.seats.value,
                "status": "confirmed",
                "is_round_trip": (travelData.travelType.value === 'round-trip'),
                "service_type": travelData.travelClass.value,
                "trip": travelData.trip['id']
            }
            , 
            {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            // saving ticket data in local storage
            const payDetails = resp.data.payment;
            const ticketData = {
                "from": travelData.trip.route['origin'],
                "to": travelData.trip.route['destination'],
                "trip_date": travelData.travelDate,
                "trip_time": travelData.trip.departure_time,
                "id": payDetails['transaction_id'],
                "amount": payDetails['amount'],
                "payment_time": payDetails['payment_time'],
                "class": travelData.travelClass.label,
                "seats": travelData.seats.value,
            }
            let tickets = localStorage.getItem("tickets");
            // checking if tickets already exist in local storage
            if (tickets){
                const ticketArr = JSON.parse(tickets);
                ticketArr.push(ticketData);
                localStorage.setItem("tickets", JSON.stringify(tickets));
            } else {
                tickets = JSON.stringify([ticketData]);
                localStorage.setItem("tickets", tickets);
            }
            
            finalPage = 5;  // Payment complete
        } catch (error) {
            finalPage = 6;  //  Payment failed
            if (error.response) {
              // The request was made and the server responded with a status code outside the 2xx range
              console.error('Error Response:', error.response.data);
            } else if (error.request) {
              // The request was made but no response was received (network error)
              console.error('Network Error:', error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error:', error.message);
            }
        } finally {
            setTimeout(() => {
                modal.close();
                setViewIndex(finalPage);
            }, 3000);
        }
    }

    const [viewIndex, setViewIndex] = useState(sessionStorage.getItem("viewIndex") || 0);
    const ContentSwitcher = ({className, children}) => {
        const [currentComponent, setCurrentComponent] = useState(children[viewIndex]);
        return (
            <div className={className} style={{transition: 'all ease 0.5s'}}>
                {currentComponent}
            </div>
        );
    };

    useEffect(() => sessionStorage.setItem("viewIndex", viewIndex.toString()), [viewIndex]);

  return (
    <div className='pb-32 pt-[5.5rem] md:pt-28'>
        <ContentSwitcher className={`w-[90%] ${viewIndex === 3 && 'overflow-hidden'} mx-auto bg-white rounded-xl md:shadow mb-10 md:mb-16 md:w-3/5`}>
            {/* Home View 1 */}
            <div className="py-3 md:py-10 px-6 md:px-24">
                {/* Departure */}
                <div className="form-group flex flex-col mb-3">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-2'>From</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px] basis-[10%] ps-1"></i>
                        <Select 
                            options={locations} className='w-10/12 basis-[85%] z-20'
                            value={travelData.departure} onChange={(dep) => setTravelData({...travelData, departure: dep})}
                        />
                    </div>
                </div>
                {/* Destination */}
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="desti" className='text-sm font-semibold font-roboto float-start mb-2'>
                        To
                        <button 
                            className='bi bi-arrow-down-up float-end px-2 py-1 hover:text-favblue hover:bg-blue-100 rounded-md'
                            onClick={(e) => {
                                // Swapping departure and destination values
                                e.preventDefault();
                                const des = travelData.destination;
                                const dep = travelData.departure;
                                setTravelData({...travelData, departure: des, destination: dep})
                            }}
                        ></button>
                    </label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px] basis-[10%] ps-1"></i>
                        <Select 
                            options={locations} className='w-10/12 basis-[85%] z-10'
                            value={travelData.destination} onChange={(des) => setTravelData({...travelData, destination: des})}
                        />
                    </div>
                </div>
                {/* Date */}
                <div className="form-group flex flex-col mb-8">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-2'>Date</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-calendar4-event text-xl basis-[10%] ps-1"></i>
                        {
                        mobileDisplay?
                        <MobileDatePicker 
                            value={travelData.travelDate} onChange={(newDate) => setTravelData({...travelData, travelDate: newDate})}
                            className='basis-[85%] text-center' label='Choose Date'
                        />
                        :
                        <DatePicker 
                            value={travelData.travelDate} onChange={(newDate) => setTravelData({...travelData, travelDate: newDate})}
                            className='basis-[85%] text-center' label='Choose Date'
                        />
                        }
                    </div>
                </div>
                {/* Time */}
                <div className="form-group flex flex-col w-full mb-4">
                    <label htmlFor="" className='text-sm font-semibold font-roboto float-start mb-2'>Time {networkError && <span className="float-end text-red">Network Error!. Please make sure you're connected to the internet</span>}</label>
                    <div className="flex px-0 items-center justify-between w-full">
                        <i className="bi bi-clock text-xl ps-1 basis-[10%]"></i>
                        <div className="basis-[85%] relative items-center">
                            {
                            timeSet !== 0
                            &&
                            <button id="scroll-left" className='bi bi-chevron-left rounded-[50%] text-favblue bg-favbluelight px-1 absolute left-0 translate-x-[-50%] top-1/2 translate-y-[-50%]'
                                onClick={scrollLeft}
                            ></button>
                            }
                            <div className="flex overflow-x-auto items-center gap-[5%] w-full h-full" style={{scrollbarColor: 'transparent', scrollbarWidth: 'none', scrollSnapType: 'x mandatory'}}>
                            {trips.map((trip, idx) => 
                                (
                                    <div 
                                        onClick={(event)=> {event.stopPropagation();setTravelData({...travelData, trip: trip})}} key={trip.id} id={`time${idx}`}
                                        className={`${travelData.trip["departure_time"] === trip["departure_time"]? 'border-4 bg-[#2C3B6A1A]': ''} border rounded-lg border-favblue h-14 lg:h-16 basis-[30%] grow-0 shrink-0 flex flex-col justify-center items-center`} style={{scrollSnapAlign: 'start'}}
                                    >
                                        <p 
                                            className={'text-favblue font-roboto font-semibold lg:text-2xl text-16'}
                                        >
                                            {trip["departure_time"].substring(0, 5)}
                                        </p>
                                        <p className='text-sm max-sm:text-xs text-center'>{trip["available_seats"]}plc left</p>
                                    </div>
                                )
                            )}
                            </div>
                            {
                            trips.length - timeSet > 3
                            &&
                            <button id="scroll-right" className='bi bi-chevron-right rounded-[50%] text-favblue bg-favbluelight px-1 absolute right-0 translate-x-[50%] top-1/2 -translate-y-1/2'
                                onClick={scrollRight}
                            ></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Home View 2 */}
            <div className="py-3 md:py-10 px-6 md:px-24">
                {/* Seats */}
                <div className="form-group flex flex-col mb-7">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-3'>Seats</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-people text-xl basis-[10%] ps-1"></i>
                        <Select 
                            options={[
                                {value: 1, label: 1},
                                {value: 2, label: 2},
                                {value: 3, label: 3},
                            ]} className='w-10/12 basis-[85%] z-20'
                            value={travelData.seats} onChange={(num) => setTravelData({...travelData, seats: num})}
                        />
                    </div>
                </div>
                {/* Travel Type */}
                <div className="form-group flex flex-col mb-7">
                    <label htmlFor="desti" className='text-sm font-semibold font-roboto float-start mb-3'>Travel Type</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-bus-front text-xl basis-[10%] ps-1"></i>
                        <Select 
                            options={[
                                {value: 'One Way', label: 'One-way'},
                                {value: 'round-trip', label: 'Round-trip'}
                            ]} className='w-10/12 basis-[85%] z-10'
                            value={travelData.travelType} onChange={(type) => setTravelData({...travelData, travelType: type})}
                        />
                    </div>
                </div>
                {/* Travel Class */}
                <div className="form-group flex flex-col mb-7">
                    <label htmlFor="depart" className='text-sm font-semibold font-roboto float-start mb-3'>Class</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-stars text-xl basis-[10%] ps-1"></i>
                        <Select 
                            options={[
                                {value: 'standard', label: 'Classic'},
                                {value: 'vip', label: 'VIP'},
                            ]} className='w-10/12 basis-[85%]'
                            value={travelData.travelClass} onChange={(cl) => setTravelData({...travelData, travelClass: cl})}
                        />
                    </div>
                </div>
            </div>
            {/* Home View 3 */}
            <div className="py-3 md:py-10 px-6 md:px-24">
                <div className="flex flex-col gap-2 mb-4">
                    <p className="text-x text-center text-favblue font-roboto">Input Your Details</p>
                    <p className="text-16 text-red font-roboto text-center">As on NIC or Passport</p>
                </div>
                <div className="form-group flex flex-col mb-4">
                    <label htmlFor="surname" className='text-sm font-semibold font-roboto float-start mb-2'>Surname<span className='text-red'>*</span></label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px] basis-[10%] ps-1"></i>
                        <input 
                            type="text" placeholder='Surname' id='surname' defaultValue={userDetails.surname}
                            className='border-2 border-gray-200 w-full basis-[90%] h-10 rounded-lg ps-4'
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-4">
                    <label htmlFor="givenName" className='text-sm font-semibold font-roboto float-start mb-2'>Given Names</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px] basis-[10%] ps-1"></i>
                        <input 
                            type="text" placeholder='Given Names' id='givenName' defaultValue={userDetails.givenName}
                            className='border-2 border-gray-200 w-full basis-[90%] h-10 rounded-lg ps-4'
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-4">
                    <label htmlFor="identity" className='text-sm font-semibold font-roboto float-start mb-2'>NIC/Passport N<sup>o</sup><span className='text-red'>*</span></label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle-fill text-[8px] basis-[10%] ps-1"></i>
                        <input 
                            type="text" placeholder='Identity' id='identity' defaultValue={userDetails.id_number}
                            className='border-2 border-gray-200 w-full basis-[90%] h-10 rounded-lg ps-4'
                        />
                    </div>
                </div>
                <div className="form-group flex flex-col mb-4">
                    <label htmlFor="number" className='text-sm font-semibold font-roboto float-start mb-2'>Mobile Number</label>
                    <div className="flex justify-between px-0 items-center">
                        <i className="bi bi-circle text-[8px] basis-[10%] ps-1"></i>
                        <input 
                            type="text" placeholder='Number' id='mobile' defaultValue={userDetails.mobile_number}
                            className='border-2 border-gray-200 w-full basis-[90%] h-10 rounded-lg ps-4'
                        />
                    </div>
                </div>
            </div>
            {/* Home View 4 */}
            <div className='w-full'>
                <div className="bg-favblue flex items-center justify-between px-3">
                    <img src={logo} alt="" className='h-10'/>
                    <p className='text-white font-roboto'>1234-3456-XXXX</p>
                </div>
                <div id="top" className='py-3 md:py-6 px-6 md:px-24 flex flex-wrap justify-between'>
                    <p className="text-x text-center text-favblue font-roboto basis-full my-2">Confirm Your Details</p>
                    <div className="basis-3/5 grid gap-x-2 gap-y-1 items-center justify-items-stretch my-2" style={{gridTemplateColumns: 'repeat(3, min-content)'}}>
                        <span className='text-md font-roboto'>FROM</span>
                        <span className='bi bi-circle-fill text-gray-200 text-xs'></span>
                        <span className='text-favblue font-semibold font-roboto'>{travelData.departure.label}</span>
                        <div className="grid grid-cols-subgrid col-span-3 justify-items-center">
                            <div className="col-start-2 border border-[#DBB33C] w-0 h-6"></div>
                        </div>
                        <span className='text-md font-roboto'>TO</span>
                        <span className='bi bi-circle-fill text-gray-200 text-xs'></span>
                        <span className='text-favblue font-semibold font-roboto'>{travelData.destination.label}</span>
                    </div>
                    <div className="basis-2/5 flex items-center justify-end my-2">
                        <span className='bg-favblue rounded-lg text-white px-4 py-2 font-roboto text-md'>XAF {payAmt - 500}</span>
                    </div>
                </div>
                <div id="middle" className="py-6 md:py-6 px-4 md:px-24 grid gap-y-6 justify-between border-t border-gray-300 border-dashed" style={{gridTemplateColumns: 'repeat(3, max-content)'}}>
                    <div className="flex flex-col">
                        <p className='text-md font-roboto'>CLASS</p>
                        <p className='text-favblue font-semibold font-roboto'>{travelData.travelClass.label.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-md font-roboto'>TRAVEL TYPE</p>
                        <p className='text-favblue font-semibold font-roboto'>{travelData.travelType.value.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-md font-roboto'>TRAVEL DATE</p>
                        <p className='text-favblue font-semibold font-roboto'>{travelData.travelDate.format(`${mobileDisplay ? 'MMM': 'MMMM'} D, YYYY`)}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-md font-roboto'>TIME</p>
                        <p className='text-favblue font-semibold font-roboto'>{travelData.trip["departure_time"].substring(0, 5)}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-md font-roboto'>SEAT</p>
                        <p className='text-favblue font-semibold font-roboto'>{travelData.seats.value} adult</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-md font-roboto'>TARIFF</p>
                        <p className='text-favblue font-semibold font-roboto'>XAF {payAmt - 500}</p>
                    </div>
                </div>
                <div id="bottom" className='py-3 md:py-6 px-4 md:px-24 border-t border-gray-300 border-dashed'>
                    <div className="flex items-center justify-between mb-2">
                        <p className='text-md font-roboto'>FEE</p>
                        <p className='text-favblue font-semibold font-roboto'>500</p>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <p className='text-md font-roboto'>DISCOUNT</p>
                        <p className='text-favblue font-semibold font-roboto'>N/A</p>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <p className='text-md font-roboto'>TOTAL PAYMENT</p>
                        <p className='text-favblue font-semibold font-roboto'>XAF {payAmt}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <button className='text-favblue font-roboto border border-favblue py-[7px] rounded-lg hover:bg-favblue hover:text-white basis-[45%]'
                            onClick={(e) => {e.preventDefault();setViewIndex(viewIndex - 1)}}
                        >Prev</button>
                        <button className='text-white font-semibold bg-favblue py-2 rounded-lg hover:opacity-90  basis-[45%]'
                            onClick={(e) => {e.preventDefault();setViewIndex(viewIndex + 1)}}
                        >Make Payment</button>
                    </div>
                </div>
            </div>
            {/* Home View 5: Payment */}
            <Payment payHandle={payHandle} cancel={() => setViewIndex(3)}/>
            {/* Home View 6: Payment Completed */}
            <PaymentComplete/>
            {/* Home View 7: Payment Failed */}
            <PaymentFailed tryAgain={() => setViewIndex(4)}/>
        </ContentSwitcher>
        {
        viewIndex < 3
        &&
        <div className={`flex justify-between ${(viewIndex !== 0) && 'w-[90%] md:w-3/5'} mx-auto`}>
            {
            viewIndex !== 0
            &&
            <button 
                className={`text-favblue font-roboto border border-favblue py-[7px] basis-[40%] rounded-lg hover:bg-favblue hover:text-white`}
                onClick={(e) => {e.preventDefault();setViewIndex(viewIndex - 1)}}
            >Prev</button>
            }
            <button 
                className={`text-center rounded-md text-sm max-sm:text-[1rem] text-white bg-favblue py-3 ${viewIndex === 0? ' basis-3/4 md:basis-1/5 mx-auto': 'basis-[40%]'} shadow-xl font-roboto`}
                onClick={(e) => {
                    e.preventDefault();
                    if(viewIndex === 2){
                        const surNm = document.getElementById('surname');
                        const givNm = document.getElementById('givenName');
                        const idNum = document.getElementById('identity');
                        const mobNum = document.getElementById('mobile');

                        setUserDetails({...userDetails, surname: surNm.value, givenName: givNm.value, id_number: idNum.value, mobile_number: mobNum.value});

                        switch (travelData.travelClass.value) {
                            case 'standard': setPayAmt(travelData.seats.value * Number(travelData.trip.route.base_price) + 500); break;
                            case 'vip': setPayAmt(travelData.seats.value * Number(travelData.trip.route.vip_price) + 500); break;
                            default: break
                        }
                    }
                    setViewIndex(viewIndex + 1);
                }}
            >Next</button>
        </div>
        }
        {
        viewIndex === 4
        &&
        <Benefits/>
        }
        {
        viewIndex < 3
        &&
        <>
            <p className="mt-10 md:mt-16 px-12 font-roboto text-[16px] md:px-16 text-red text-center">Please remember to be at our agency 45 mins before travel time!</p>
            <a href="/terms-n-conditions" className="text-favblue underline text-16 font-roboto mt-5 block text-center">Terms and Conditions</a>
        </>
        }
        <dialog className='w-[80vw] lg:w-[30vw] p-10 rounded-2xl backdrop:bg-[#21212159]' ref={modalRef}>
            <div className="flex flex-col items-center gap-5">
                <div className="bg-[#1F75FE26] w-14 h-14 rounded-[50%] relative">
                    <i className="bi bi-send absolute left-1/2 bottom-1/2 -translate-x-1/2 text-4xl translate-y-1/2 text-favblue "></i>
                </div>
                <p className="font-roboto text-xl text-favblue">Processing...</p>
                <p className="text-16 font-roboto font-light text-center">Please hold on, your payment is in process</p>
            </div>
        </dialog>
    </div>
  )
}

export default Home;
