import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../../../assets/styles/Navbar.css";

const Header = () => {
	return (
		<section className='grid grid-cols-12 py-3'>
			<nav className=' col-span-10'>
				<NavLink
					className='text-xl font-semibold mr-7 hover:text-sky-800 '
					to='/'>
					Home
				</NavLink>
				<NavLink
					className='text-xl font-semibold mr-7 hover:text-sky-800 '
					to='/'>
					About
				</NavLink>
				<NavLink
					className='text-xl font-semibold mr-7 hover:text-sky-800 '
					to='/classes'>
					Classes
				</NavLink>
				<NavLink
					className='text-xl font-semibold mr-7 hover:text-sky-800 '
					to='/'>
					Teachers
				</NavLink>
				<NavLink
					className='text-xl font-semibold mr-7 hover:text-sky-800 '
					to='/'>
					Blog
				</NavLink>
				<NavLink
					className='text-xl font-semibold mr-7 hover:text-sky-800 '
					to='/'>
					Contacts
				</NavLink>
			</nav>
			<ul className='flex justify-between text-2xl'>
				<li>
					<Link to='/' className='text-cyan-800'>
						<FaFacebook></FaFacebook>
					</Link>
				</li>
				<li>
					<Link to='/' className='text-cyan-700'>
						<FaLinkedin></FaLinkedin>
					</Link>
				</li>
				<li>
					<Link to='/' className='text-red-500'>
						<FaInstagram></FaInstagram>
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default Header;
