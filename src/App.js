import './App.css';
import NavBar from './components/Layout/NavBar';
import { Routes, Route } from 'react-router-dom';
import AppointmentsBookingPage from "./components/Pages/Appointments"
import DoctorsListPage from "./components/Pages/List";
import HomePage from "./components/Pages/Home";
import ContactUsPage from "./components/Pages/Contact";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
			  <Route path='/' element={<HomePage />} />
				<Route path='/Appointments' element={<AppointmentsBookingPage />} />
				<Route path='/List' element={<DoctorsListPage />} />
				<Route path='/Contact' element={<ContactUsPage />} />
			</Routes>
		</>
	);
}

export default App;
