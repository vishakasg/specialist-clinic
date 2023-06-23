import DefaultLayout from "../Layout/DefaultLayout";

const AppointmentsBookingPage = () => {
	const appointmentsBookingPara = `
		Fill this form to book your appointments!
	`;

	return (
		<DefaultLayout>
			<h1>Appointments Booking Page</h1>
			<p>{ appointmentsBookingPara }</p>
        </DefaultLayout>	
	);
};

export default AppointmentsBookingPage;