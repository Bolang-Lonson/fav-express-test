import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/layout/views/home';
import Tickets, { TicketView } from './pages/layout/views/tickets';
import Track from './pages/landing/track';
import Faq from './pages/layout/views/faq';
import React, { Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import Lottie from "lottie-react";
import BusAnimation from './assets/Bus-Animation.json';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Landing = React.lazy(() => pMinDelay(import('./pages/landing'), 3000));

function App() {
	return (
		
		<Routes>
			<Route index element={
				<Suspense 
					fallback={<Lottie loop={false} animationData={BusAnimation} style={{height: '100vh', transition: 'all 2s ease-in-out'}} duration={3}/>}
				>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<Landing/>
					</LocalizationProvider>
				</Suspense>
				}
			/>
			<Route path='/track/:number' element={<Track/>}/>
			<Route path='/' element={<Layout/>}>
				<Route path='/home'  element={
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<Home/>
					</LocalizationProvider>
					}
				/>
				<Route path='/tickets' element={<Tickets/>}/>
				<Route path='/tickets/:id' element={<TicketView/>}/>
				<Route path='/faqs' element={<Faq/>}/>
			</Route>
		</Routes>
	);
}

export default App;
