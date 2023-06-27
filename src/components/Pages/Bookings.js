import DefaultLayout from "../Layout/DefaultLayout";
import { useState, useEffect } from "react";

const BookingsPage = () => {
	const bookingsPara = `
    All the appointments
	`;
	const [newAppointment, setNewAppointment] = useState([])
    useEffect(() => {
		fetch('https://64951068b08e17c917919c7c.mockapi.io/api/appointment')
		.then(res => res.json())
		.then(res => setNewAppointment(res))
		console.log(newAppointment)
	} , [])

	return (
		<DefaultLayout>
			<h1>Appoinments</h1>
			<h2>{ bookingsPara }</h2>
            {newAppointment.map((appointment, index) => (
				<div id={appointment.patientName} key={index}>
					<h4>{appointment.patientName}</h4>
					<h4>{appointment.date}</h4>
					<h4>{appointment.time}</h4>
				</div>
			))}
        </DefaultLayout>	
	);
};

export default BookingsPage;