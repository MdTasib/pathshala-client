import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { classData } from "../../Data/classes";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState(classData);
  return (
    <section className="py-10">
      <div className="hero-section w-5/6 mx-auto ">
        <div
          className="hero h-96"
          style={{
            backgroundImage: `url("https://i.postimg.cc/rmTLbqM1/classes-banner.png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content  text-neutral-content w-5/6  justify-start">
            <div className="max-w-md  ">
              <h1 className="mb-5 text-base  text-orange-600">TRY NOW</h1>
              <p className="mb-5 text-2xl md:text-5xl  text-black font-sherif">
                Start Investing in You
              </p>
              <button className="btn border-cyan-700 rounded-full bg-cyan-700">
                <FaLongArrowAltRight className="bg-white w-6 text-cyan-800 p-1 h-6 rounded-full"></FaLongArrowAltRight>{" "}
                <span className="text-white font-medium px-4 text-lg capitalize">
                  Classes
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="my-14 w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 lg:gap-6">
        {classes.map((classItem) => (
          <Class key={classItem.id} classItem={classItem} />
        ))}
      </div>
    </section>
  );
};

export default Classes;
