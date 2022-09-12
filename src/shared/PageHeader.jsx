import React from "react";
import "../assets/styles/PageHeader.css";

const PageHeader = ({ route, page }) => {
	return (
		<div className='pageheader my-5 text-center'>
			<div className='flex flex-col justify-center items-center pt-10'>
				<h2 className='text-5xl'>{page}</h2>
				<p>{route}</p>
			</div>
			<h3 className='background-text'>Shelly</h3>
		</div>
	);
};

export default PageHeader;
