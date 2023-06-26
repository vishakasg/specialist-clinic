import { Search } from "@mui/icons-material";
import DefaultLayout from "../Layout/DefaultLayout";
import { useEffect, useState } from "react";


const DoctorsListPage = () => {
	const listPageParagraph = `
    We endeavour to provide our patients with the help and support they need. Our staff try their best to fulfil the needs of our patients and create a high-quality experience.
	`;
	const [doctorsList, setDoctorsList] = useState([])
	const [searchQuery, setSearchQuery] = useState("")

	useEffect(() => {
		fetch('https://64951068b08e17c917919c7c.mockapi.io/api/doctors')
		.then(res => res.json())
		.then(res => setDoctorsList(res))
		console.log(doctorsList)
	} , [])
	
	return (
		<DefaultLayout>
			<h1>Doctors List Page</h1>
			<h1>Our Team</h1>
			<h2>{ listPageParagraph }</h2>
			<div >
				<input type="text" onChange={(e) => {
          setSearchQuery(e.target.value);}} placeholder="Search Doctors"/>
			</div>
			
			{doctorsList
			.filter((res) => {
				if (searchQuery === "") {
				  return res;
				} else if (
				  res.speciality.toLowerCase().includes(searchQuery)
				) {
				  return res;
				}
			  })
			.map((doctor, index) => (
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