import DefaultLayout from "../Layout/DefaultLayout";
import { useEffect, useState } from "react";


const DoctorsListPage = () => {
	const listPageParagraph = `
    We endeavour to provide our patients with the help and support they need. Our staff try their best to fulfil the needs of our patients and create a high-quality experience.
	`;
	const [doctorsList, setDoctorsList] = useState([])
	useEffect(() => {
		fetch('https://64951068b08e17c917919c7c.mockapi.io/api/doctors')
		.then(res => res.json())
		.then(res => setDoctorsList(res))
		console.log(doctorsList)
	} , [])

	function searchDoctor(){
		let search = search.value

	
	fetch(`https://64951068b08e17c917919c7c.mockapi.io/api/doctors?term=${search}`)
	.then(res => res.json())
	.then(res => res)

	}


	return (
		<DefaultLayout>
			<h1>Doctors List Page</h1>
			<h1>Our Team</h1>
			<h2>{ listPageParagraph }</h2>
			<div>
				<input type="search" name="searchInput" id="" />
				<button onClick={ searchDoctor }>Search</button>
			</div>

			{doctorsList.map((doctor, index) => (
				<div id={doctor.name} key={index}>
					<h3>{doctor.name}</h3>
					<h4>{doctor.speciality}</h4>
					<img src={doctor.image} alt={doctor.name} />
				</div>
		
			))}
		</DefaultLayout>
	);
};

export default DoctorsListPage;