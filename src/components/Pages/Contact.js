import DefaultLayout from "../Layout/DefaultLayout";

const ContactUsPage = () => {
	const contactUsPara = `
    If you have a question about any of our services please call us on the number below or visit us.
	`;
	const phoneNo = `(03) 4242 4239`
	const address = `144 Pearson Street, Adelaide, SA, 5000`
	const hours =  `Monday - Friday (9am to 6pm)`

	return (
		<DefaultLayout>
				<h1>Contact Us</h1>
				<h2>{ contactUsPara }</h2>
			<div className="contacts">
				<h3>Phone No: { phoneNo }</h3>
				<h3>Address: { address }</h3>
				<h3>Opening Hours: { hours }</h3>
			</div>
        </DefaultLayout>	
	);
};

export default ContactUsPage;