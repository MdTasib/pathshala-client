import React from "react";
import { aboutsData } from "../../../Data/homeWelcome";

const Welcome = () => {
	return (
		<section className='py-10'>
			<div className='section-title text-center'>
				<h2 className='text-3xl font-bold'>
					Welcome to <span className='text-primary'>Shelly</span>
				</h2>
				<p className='text-sm w-2/4 mx-auto pt-2'>
					Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
					interdum, mauris quis cursus sodales, urn
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
				{aboutsData.map(data => (
					<div className='card bg-base-100 shadow-lg p-5'>
						<picture className='pb-2'>
							<img src={data.icon} alt={data.title} className='w-3/12' />
						</picture>
						<p className='text-lg font-medium'>{data.title}</p>
						<p className='text-sm'>{data.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Welcome;
