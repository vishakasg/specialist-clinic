import DefaultLayout from "../Layout/DefaultLayout";

const DoctorsListPage = () => {
	const listPageParagraph = `
    We endeavour to provide our patients with the help and support they need. Our staff try their best to fulfil the needs of our patients and create a high-quality experience.
	`;
	// const doctorsList = 

	return (
		<DefaultLayout>
			<h1>Our Team</h1>
			<h3>{ listPageParagraph }</h3>

		</DefaultLayout>
	);
};

export default DoctorsListPage;