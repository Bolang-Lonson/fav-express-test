import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Layout from './pages/layout';
import Home from './pages/layout/views/home';
import Tickets from './pages/layout/views/tickets';
import Profile from './pages/layout/views/profile';
import Wallet from './pages/layout/views/wallet';
import Settings from './pages/layout/views/settings';

function App() {
	return (
		<Routes>
			<Route index element={<Landing/>}/>
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
