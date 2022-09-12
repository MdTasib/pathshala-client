import React, { useState } from "react";
import Button from "../../../shared/Button";
import { classData } from "../../../Data/classes";
import Class from "../../../shared/Class";

const Classes = () => {
	const [classes, setClasses] = useState(classData);

	return (
		<section className='py-10'>
			<div className='hero-section'>
				<div
					className='hero h-96'
					style={{
						backgroundImage: `url("https://i.postimg.cc/rmTLbqM1/classes-banner.png")`,
					}}>
					<div className='hero-overlay bg-opacity-10'></div>
					<div className='hero-content  text-neutral-content w-5/6  justify-start'>
						<div className='max-w-md  '>
							<h1 className='mb-5 text-base  text-orange-600'>TRY NOW</h1>
							<p className='mb-5 text-2xl md:text-5xl  text-black font-sherif'>
								Start Investing in You
							</p>
							<Button>Classes</Button>
						</div>
					</div>
				</div>
			</div>

			<div class='pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
				{classes.map(classItem => (
					<Class key={classItem.id} classItem={classItem} />
				))}
			</div>
		</section>
	);
};

export default Classes;
