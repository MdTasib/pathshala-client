import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Header = () => {
    return (
        <section className='grid grid-cols-12 header-container'>
            <nav className=' col-span-10'>
                <NavLink className='text-xl font-semibold mr-7 hover:text-sky-800 ' to='/'>Home</NavLink>
                <NavLink className='text-xl font-semibold mr-7 hover:text-sky-800 ' to='/'>About</NavLink>
                <NavLink className='text-xl font-semibold mr-7 hover:text-sky-800 ' to='/'>Classes</NavLink>
                <NavLink className='text-xl font-semibold mr-7 hover:text-sky-800 ' to='/'>Teachers</NavLink>
                <NavLink className='text-xl font-semibold mr-7 hover:text-sky-800 ' to='/'>Blog</NavLink>
                <NavLink className='text-xl font-semibold mr-7 hover:text-sky-800 ' to='/'>Contacts</NavLink>
            </nav>
            <ul>
                <li>
                    <Link to='/'>
                        <i className='fab fa-facebook'></i>
                    </Link>
                </li>
                <li></li>
                <li></li>
            </ul>
        </section>
    );
};

export default Header;