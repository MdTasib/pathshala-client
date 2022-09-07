import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ children }) => {
	return (
		<button className='btn btn-secondary rounded-full flex justify-between '>
			<span className='bg-white p-1 rounded-full'>
				<FaArrowRight color='blue' />
			</span>
			<span className='pl-2 text-xl'>{children}</span>
		</button>
	);
};

export default Button;
