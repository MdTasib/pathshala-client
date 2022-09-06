import React from "react";
import calIcon from "../../../assets/icons/calendar.png";
import { Link } from "react-router-dom";

const Course = ({ data }) => {
	return (
		<div
			className={`shadow-lg p-5 my-5 border-l-primary border-l-4 rounded-md ${data.styles}`}>
			<div className='grid grid-cols-2'>
				<div className='text-sm'>
					<img src={calIcon} alt='calander' width={18} className='inline' />
					<span className='px-2'>{data.date}</span>
					<span>{data.time}</span>
				</div>
				<div className='col-end-4'>
					<span className='text-secondary font-bold text-sm'>
						$ {data.price ? data.price : "Free"}
					</span>
				</div>
			</div>
			<Link to='/course' className='text-xl font-medium py-2 block'>
				{data.title}
			</Link>
			<div className='grid grid-cols-2'>
				<div className='text-sm'>
					<img
						src={data.authorImg}
						alt='calander'
						width={25}
						className='inline'
					/>
					<span className='text-xs pl-2'>{data.author}</span>
				</div>
				<div className='col-end-4'>
					<span className='text-xs'>$ {data.location}</span>
				</div>
			</div>
		</div>
	);
};

export default Course;
