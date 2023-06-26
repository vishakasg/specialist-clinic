import DefaultLayout from "../Layout/DefaultLayout";
// import DoctorsListPage from "./List";
import { useState } from "react";

const AppointmentsBookingPage = (event) => {
	const appointmentsBookingPara = `
		Fill this form to book your appointments!
	`;
	// const form = event.target
	// const data = Object.fromEntries(new FormData(form))
	
	const[bookingMessage, setBookingMessage] = useState(null)
	
	let handleTimeChange = () => {setBookingMessage(`Your appointment is booked.`)}
	

	return (
		<DefaultLayout>
			<h1>Appointments Booking Page</h1>
			<p>{ appointmentsBookingPara }</p>
				<form>
					<h2>Appointment Requests</h2>
					<fieldset>
					<label for="">Patient Name: </label>
            		<input type="text" name="name"></input>
					</fieldset>
					<fieldset>
					<label for="">Email: </label>
            		<input type="text" name="email"></input>
					</fieldset>
					<fieldset>
					<label for="">Phone: </label>
            		<input type="text" name="phone"></input>
					</fieldset>
					<fieldset>
					<label for="">Preferred Doctor: </label>
            		<input type="text" />
					</fieldset>
					<fieldset>
					<label for="start">Appointment Date:</label>

					<input type="date" id="start" name="trip-start"
       				
       				min="2023-01-01" 		max="2024-12-31"/>
					</fieldset>
					<fieldset>
					<label>Appointment Time: </label>
					<input  type="time"/>
					</fieldset>
					<fieldset>
					<button onSubmit={ handleTimeChange }>Submit</button>
					</fieldset>
				</form>
				<div>
					<p>{ bookingMessage }</p>
				</div>
        </DefaultLayout>	
	);
};

export default AppointmentsBookingPage;