import React from "react";
import ico from "../../../assets/images/ico.png";
import cart from "../../../assets/images/icon10.png";

const SingleCardClass = ({ img1 }) => {
	return (
		<div className='h-[400px] w-[300px] rounded-lg mx-auto'>
			<img
				style={{ height: "180px", width: "300px", objectFit: "cover" }}
				className='rounded-t-lg'
				src={img1}
				alt=''
			/>
			<div className='relative'>
				<a href='/' title='' class='crt-btn flex items-center justify-center'>
					<img src={cart} alt='' />
				</a>
			</div>
			<div class='class-info'>
				<h3 className='text-lg font-bold'>
					Environmental Studies &amp; Earth Sciences
				</h3>

				<span className='text-xs py-3 block'>Mon-Fri 10 AM - 12 AM</span>

				<div className='grid grid-cols-2'>
					<div className='text-sm'>
						<img src={ico} alt='author' width={30} className='inline' />
						<span className='text-xs pl-2'>Margje</span>
					</div>
					<div className='col-end-4'>
						<span className='text-md font-bold text-secondary'>$ 89</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCardClass;
