import React from 'react';
import logo1 from '../assets/images/logo.png'
import '../assets/styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='banner'>
            <nav className='nav-container '>
                <section className='grid grid-cols-12 gap-4'>
                    <div className='col-span-5'>
                        <img src={logo1} alt="" />

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
            </nav>
            {/* <Header></Header>
            <Banner></Banner> */}
        </div>

    );
};

export default Navbar;