import React from "react";
import logo1 from "../assets/images/logo.png";
import "../assets/styles/Navbar.css";
import Container from "./Container";
import Header from "./Header";

const Navbar = () => {
	return (
		<Container>
			<section className='grid grid-cols-12 gap-4 border-b-2 py-6'>
				<div className='col-span-5'>
					<img src={logo1} alt='' />
				</div>
				<div className='col-span-7'>
					<div className='flex flex-row justify-between'>
						<div>
							<h5 className='text-base font-semibold'>Call</h5>
							<p>+2 342 5446 67</p>
						</div>
						<div>
							<h5 className='text-base font-semibold'>Work Time</h5>
							<p>Mon - Fri 8 AM - 5 PM</p>
						</div>
						<div>
							<h5 className='text-base font-semibold'>Address</h5>
							<p>Franklin St, Greenpoint Ave</p>
						</div>
					</div>
				</div>
			</section>
			<Header />
		</Container>
	);
};

export default Navbar;
