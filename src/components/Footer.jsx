import React from "react";
import Container from "../components/Container.jsx";

const Footer = () => {
	return (
		<footer className='bg-[#f2f7fd] text-base-content'>
			<Container>
				<div className='footer py-10'>
					<div>
						<span className='footer-title'>Services</span>
						<a className='link link-hover'>Branding</a>
						<a className='link link-hover'>Design</a>
						<a className='link link-hover'>Marketing</a>
						<a className='link link-hover'>Advertisement</a>
					</div>
					<div>
						<span className='footer-title'>Contact US</span>
						<p class='flex items-center justify-center md:justify-start mb-1'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='home'
								class='w-4 mr-4 text-primary'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 576 512'>
								<path
									fill='currentColor'
									d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'></path>
							</svg>
							New York, NY 10012, US
						</p>
						<p class='flex items-center justify-center md:justify-start mb-1'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='envelope'
								class='w-4 mr-4 text-primary'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'>
								<path
									fill='currentColor'
									d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'></path>
							</svg>
							info@example.com
						</p>
						<p class='flex items-center justify-center md:justify-start mb-1'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='phone'
								class='w-4 mr-4 text-primary'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'>
								<path
									fill='currentColor'
									d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'></path>
							</svg>
							+ 01 234 567 88
						</p>
						<p class='flex items-center justify-center md:justify-start'>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='print'
								class='w-4 mr-4 text-primary'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'>
								<path
									fill='currentColor'
									d='M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z'></path>
							</svg>
							+ 01 234 567 89
						</p>
					</div>
					<div>
						<span className='footer-title'>Quick Links</span>
						<a className='link link-hover'>About Us</a>
						<a className='link link-hover'>Our Classes</a>
						<a className='link link-hover'>School Teachers</a>
						<a className='link link-hover'>Our News</a>
						<a className='link link-hover'>Schedule</a>
					</div>
				</div>
				<div className='footer py-4 border-t text-base-content border-base-300'>
					<p>
						&copy; Copyrights {new Date().getFullYear()} Pathshala All rights
						reserved
					</p>
					<div className='md:place-self-center md:justify-self-end'>
						<div className='grid grid-flow-col gap-4'>
							<a>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className='fill-current'>
									<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
								</svg>
							</a>
							<a>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className='fill-current'>
									<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
								</svg>
							</a>
							<a>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									className='fill-current'>
									<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
