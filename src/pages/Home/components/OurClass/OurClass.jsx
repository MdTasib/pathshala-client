import React from "react";
import "./OurClass.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../../assets/images/classimg1.jpg";
import SingleCardClass from "./SingleCardClass";
const OurClass = () => {
    const items = [1,2,3,4,5,1,2,3,4,5]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1560 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1560, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 780 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };
  return (
    <section className=" relative pt-10">
      <div className="container">
        <div className="section-title">
          <h2 className="section-heading ">Our Classes</h2>
          <p>
            Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a
            laoreet erat ornare sit amet. Nulla sagittis faucibus lacus
          </p>
        </div>
        {/* section title end */}

        <div className="class-section ">
          <Carousel responsive={responsive}>
            {items.map(item =><SingleCardClass img1={img1}></SingleCardClass>)}
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurClass;
