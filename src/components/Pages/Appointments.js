import DefaultLayout from "../Layout/DefaultLayout";
import DoctorsListPage from "./List";
import { useState, useEffect } from "react";

const AppointmentsBookingPage = () => {
	const appointmentsBookingPara = `
		Fill this form to book your appointments!
	`;
	const[name, setName] = useState("")
	const[email,setEmail] = useState("")
	const[phoneNo, setPhoneNo] = useState("")
	const[date, setDate] = useState("dd/mm/yyyy")
	const[time, setTime] = useState("")
	const[bookingMessage, setBookingMessage] = useState(null)
	const [doctorsList, setDoctorsList] = useState([])

	useEffect(() => {
		fetch('https://64951068b08e17c917919c7c.mockapi.io/api/doctors')
		.then(res => res.json())
		.then(res => setDoctorsList(res))
		console.log(doctorsList)
	} , [])
	
	let handleBooking = (event) => {
		event.preventDefault();
		alert(`Your appointment is booked with on ${ date } at ${ time }.`)}
	

	return (
		<DefaultLayout>

			<h1>Appointments Booking Page</h1>
			<p>{ appointmentsBookingPara }</p>
				<form onSubmit={ handleBooking }> 
					<h2>Appointment Requests</h2>
					<fieldset>
					<label for="">Patient Name: </label>
            		<input type="text" value={ name } onChange={(e) => setName(e.target.value)}></input>
					</fieldset>
					<fieldset>
					<label for="">Email: </label>
            		<input type="text" value={ email } onChange={(e) => setEmail(e.target.value)}></input>
					</fieldset>
					<fieldset>
					<label for="">Phone: </label>
            		<input type="text" value={ phoneNo } onChange={(e) => setPhoneNo(e.target.value)}></input>
					</fieldset>
					<fieldset>
					<label for="">Preferred Doctor: </label>
					<select>
					{doctorsList.map((doctor, index) => (
					<option id={doctor.name} key={index}>{doctor.name}</option>
					))}
					</select>
					</fieldset>
					<fieldset>
					<label for="start">Appointment Date:</label>
					<input type="date" id="start" name="trip-start"
       				min="2023-01-01" 		max="2024-12-31" value={ date } onChange={(e) => setDate(e.target.value)}/>
					</fieldset>
					<fieldset>
					<label>Appointment Time: </label>
					<input  type="time" value={ time } onChange={(e) => setTime(e.target.value)}/>
					</fieldset>
					<fieldset>
					<button>Submit</button>
					</fieldset>
				</form>
				<div onChange={(e) => setBookingMessage(e.target.value)}>
					<p>{ bookingMessage }</p>
				</div>
        </DefaultLayout>	
	);
};

export default AppointmentsBookingPage;