import React from 'react';
import "./OurClass.css"
import InfiniteCarousel from 'react-leaf-carousel';
import img1 from "../../../../assets/images/1.jpg"
const OurClass = () => {
    return (
        <section className='min-h-screen relative'>
            <div className='container'>
                <div className='section-title'>
                    <h2 className='section-heading '>Our Classes</h2>
                    <p>Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus</p>
                </div>
                {/* section title end */}

                <div className='class-section'>
                    <InfiniteCarousel
                                    breakpoints={[
                                    {
                                        breakpoint: 500,
                                        settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                        },
                                    },
                                    {
                                        breakpoint: 768,    
                                        settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                        },
                                    },
                                    ]}
                                        dots={true}
                                        showSides={true}
                                        sidesOpacity={.5}
                                        sideSize={.1}
                                        slidesToScroll={4}
                                        slidesToShow={4}
                                        scrollOnDevice={true}
                                    >
                                        <div className='container' >
                                        <img className='rounded-lg h-56'
                                            alt=''
                                            src={img1}
                                        />
                                        <p className='text-2xl'>asdfjoh</p>
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                                        <div>
                                        <img
                                            alt=''
                                            src={img1}
                                        />
                                        </div>
                    </InfiniteCarousel>

                </div>





            </div>

        </section>
    );
};

export default OurClass;