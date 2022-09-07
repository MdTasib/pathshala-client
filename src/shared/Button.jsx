import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ children }) => {
	return (
		<button className='btn btn-secondary rounded-full flex justify-between text-blue-800 hover:text-[#f37335]  hover:bg-[#f37335] border-0'>
			<span className='bg-white  p-1 rounded-full'>
				<FaArrowRight className=" "  />
			</span>
			<span className='pl-2 text-xl text-white'>{children}</span>
		</button>
	);
};

export default Button;
