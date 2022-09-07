import React from "react";
import courseImg from "../../../assets/images/course-img.png";
import courseBg from "../../../assets/images/abt-element.png";
import coursesData from "../../../Data/courseData";
import Course from "./Course";

const FindCourse = () => {
	return (
		<div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 py-20`}>
			<div
				className='text-center md:text-left'
				style={{
					backgroundImage: `url(${courseBg})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "bottom",
				}}>
				<h1 className='text-5xl font-bold'>Find Your Course</h1>
				<p className='py-3 text-sm'>
					ullam fringilla ipsum sed enim scelerisque, ac porttitor libero
					egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor
					sit
				</p>
				<p className='flex items-center justify-center md:justify-start pb-10 text-secondary font-bold'>
					<svg
						aria-hidden='true'
						focusable='false'
						data-prefix='fas'
						data-icon='phone'
						className='w-4 mr-4 text-primary'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'>
						<path
							fill='currentColor'
							d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'></path>
					</svg>
					Call + 01 234 567 88
				</p>
				<img src={courseImg} className='' alt='' />
			</div>
			{/* courses content */}
			<div className='flex flex-col pt-10'>
				{coursesData.map(data => (
					<Course data={data} key={data.id} />
				))}
			</div>
		</div>
	);
};

export default FindCourse;
