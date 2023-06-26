import DefaultLayout from "../Layout/DefaultLayout";
import '../../App.css'

const HomePage = () => {
	const homeParagraph = `
    Our multidisciplinary team of Specialists and Allied Health Professionals offer a convenient, centralised care hub.
	`;

	return (
		<DefaultLayout>
			<h1>Home Page</h1>
			<h1>Expert multi-specialty healthcare</h1>
			<h3>{ homeParagraph }</h3>
			<img src="https://media.istockphoto.com/id/1295900181/photo/healthcare-and-medicine-covid-19-doctor-holding-tablet-and-diagnose-virtual-human-lungs-with.jpg?s=1024x1024&w=is&k=20&c=UEeNqnrWBdxeRtCOb1bBRSmXyg2ZVIZTP9d-rdCZsTY=" alt="" />
			
        </DefaultLayout>	
	);
};

export default HomePage;