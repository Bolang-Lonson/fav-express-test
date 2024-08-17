import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';

function App() {
	return (
		<Routes>
			<Route index element={<Landing/>}/>
		</Routes>
	);
}

export default App;
