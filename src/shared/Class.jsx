import React from "react";
import cart from "../assets/images/icon10.png";

const Class = ({ classItem }) => {
	const { classTitle, days, duration, imageUrl, authorUrl, author, price } =
		classItem;

	return (
		<div className='h-[400px] w-[300px] rounded-lg mx-auto'>
			<img
				style={{ height: "180px", width: "300px", objectFit: "cover" }}
				className='rounded-t-lg'
				src={imageUrl}
				alt=''
			/>
			<div className='relative'>
				<a href='/' title='' class='crt-btn flex items-center justify-center'>
					<img src={cart} alt='' />
				</a>
			</div>
			<div class='class-info'>
				<h3 className='text-lg font-bold'>{classTitle}</h3>

				<span className='text-xs py-3 block'>
					{days} {duration}
				</span>

				<div className='grid grid-cols-2'>
					<div className='text-sm'>
						<img src={authorUrl} alt='author' width={30} className='inline' />
						<span className='text-xs pl-2'>{author}</span>
					</div>
					<div className='col-end-4'>
						<span className='text-md font-bold text-secondary'>$ {price}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Class;
