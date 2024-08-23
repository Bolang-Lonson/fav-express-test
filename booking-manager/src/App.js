import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/layout/views/home';
import Tickets from './pages/layout/views/tickets';
import Profile from './pages/layout/views/profile';
import Wallet from './pages/layout/views/wallet';
import Settings from './pages/layout/views/settings';
import React, { Suspense } from 'react';
import pMinDelay from 'p-min-delay';
import Lottie from "lottie-react";
import BusAnimation from './assets/Bus-Animation.json';

const Landing = React.lazy(() => pMinDelay(import('./pages/landing'), 3000));

function App() {
	return (
		
		<Routes>
			<Route index element={
				<Suspense 
					fallback={<Lottie loop={false} animationData={BusAnimation} style={{height: '100vh', transition: 'all 0.5s ease-in-out'}} duration={3}/>}
				>
					<Landing/>
				</Suspense>
				
				}
			/>
			<Route path='/' element={<Layout/>}>
				<Route path='/home'  element={<Home/>}/>
				<Route path='/tickets' element={<Tickets/>}/>
				<Route path='/profile' element={<Profile/>}/>
				<Route path='/wallet' element={<Wallet/>}/>
				<Route path='/settings' element={<Settings/>}/>
			</Route>
		</Routes>
	);
}

export default App;
