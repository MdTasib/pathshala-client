import React from "react";
import newsBg from "../assets/images/news-bg.png";
import circle from "../assets/images/circle5.png";
import Button from "../shared/Button";
import Container from "./Container";

const JoinUs = () => {
	return (
		<Container>
			<div className='flex flex-row bg-gradient-to-r from-[#fdc830] to-primary rounded-xl py-10 my-20'>
				<div
					className='basis-1/3 pl-10'
					style={{
						backgroundImage: `url(${newsBg})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "bottom left",
					}}>
					<h2 className='text-4xl font-bold pb-5'>Join us and stay tuned!</h2>
					<Button>Join Us</Button>
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
		</Container>
	);
};

export default JoinUs;
