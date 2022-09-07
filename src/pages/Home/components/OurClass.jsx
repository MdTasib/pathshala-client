import React from "react";
import "../../../assets/styles/OurClass.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../assets/images/classimg1.jpg";
import SingleCardClass from "./SingleCardClass";
import Button from "../../../shared/Button";

const OurClass = () => {
	const items = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1560 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1560, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 780 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 780, min: 0 },
			items: 1,
		},
	};
	return (
		<section className='relative py-20'>
			<div className={`section-title mb-10`}>
				<h2 className='section-heading text-5xl relative font-bold -z-1 mb-2'>
					Our Classes
				</h2>
				<p className='text-md max-w-[530px] mb-2 text-[#575757]'>
					Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
					laoreet erat ornare sit amet. Nulla sagittis faucibus lacus
				</p>
			</div>
			{/* section title end */}
			<Carousel responsive={responsive}>
				{items.map(item => (
					<SingleCardClass img1={img1}></SingleCardClass>
				))}
			</Carousel>
			<div className="flex justify-center"><Button>classes</Button></div>
		</section>
	);
};

export default OurClass;
