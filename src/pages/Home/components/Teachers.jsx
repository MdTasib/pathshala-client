import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";

const Teachers = () => {
	const [teachers, setTeachers] = useState([]);
	useEffect(() => {
		fetch("teachers.json")
			.then(res => res.json())
			.then(data => setTeachers(data));
	}, []);

	return (
		<section className='py-10'>
			<div className='text-center'>
				<p className='text-5xl font-bold '>
					Our Awesome <br /> Teachers
				</p>
				<p className='mt-5 text-sm'>
					Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra,
					bibendum justo eget, <br /> lacinia dui. Donec ligula ligula,
					elementum sit amet
				</p>
			</div>
			<div class='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 pt-10'>
				{teachers.map(teacher => (
					<Teacher key={teacher.id} teacher={teacher} />
				))}
			</div>
		</section>
	);
};

export default Teachers;
