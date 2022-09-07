import React from "react";
import { FaArrowRight } from "react-icons/fa";
import newsBg from "../assets/images/news-bg.png";
import circle from "../assets/images/circle5.png";

const JoinUs = () => {
	return (
		<div className='flex flex-row bg-gradient-to-r from-[#fdc830] to-primary rounded-xl py-10'>
			<div
				className='basis-1/3 pl-10'
				style={{
					backgroundImage: `url(${newsBg})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "bottom left",
				}}>
				<h2 className='text-4xl font-bold pb-5'>Join us and stay tuned!</h2>
				<button className='btn btn-secondary rounded-full flex justify-between '>
					<span className='bg-white p-1 rounded-full'>
						<FaArrowRight color='blue' />
					</span>
					<span className='pl-2 text-xl'>Join Us</span>
				</button>
			</div>
			<div
				className='basis-2/3 pr-10'
				style={{
					backgroundImage: `url(${circle})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "bottom right",
				}}>
				<div className='lg:flex lg:justify-between'>
					<div className='basis-1/3 pr-3 pb-3'>
						<input
							type='text'
							placeholder='Name'
							className='input max-w-xs w-full rounded-full'
						/>
					</div>
					<div className='basis-1/3 pr-3 pb-3'>
						<input
							type='text'
							placeholder='Email'
							className='input max-w-xs w-full rounded-full'
						/>
					</div>
					<div className='basis-1/3 pr-3 pb-3'>
						<select className='select w-full max-w-xs rounded-full'>
							<option disabled selected>
								Class
							</option>
							<option>Class 1</option>
							<option>Class 2</option>
							<option>Class 3</option>
						</select>
					</div>
				</div>
				<div className='flex flex-row pt-5'>
					<div className='basis-full'>
						<textarea
							className='textarea w-full rounded-xl'
							placeholder='Message'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinUs;
