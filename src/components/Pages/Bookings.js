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
			<section className="bookings">
            {newAppointment.map((appointment, index) => (
				<div className="appointment" key={index}>
					<h4>{appointment.id}. {appointment.doctorName}</h4>
                    <h4>Patient Name: {appointment.patientName}</h4>
					<h4>Date: {appointment.date}</h4>
					<h4>Time: {appointment.time}</h4>
				</div>
			))}
			</section>
        </DefaultLayout>	
	);
};

export default BookingsPage;