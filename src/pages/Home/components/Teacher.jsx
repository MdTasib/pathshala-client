import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaPlus } from "react-icons/fa";

const Teacher = ({ teacher }) => {
  const { name, imgUrl, role } = teacher;
  return (
    <section id="teacher-info" className=" ">
      <div className="card relative ">
        <img className="z-0" src={imgUrl} alt="Shoes" />
        <div className="  absolute -bottom-5 right-10  bg-yellow-300 rounded-full px-3 py-4">
          <ul>
            <li className="text-white ">
              <FaLinkedinIn />
            </li>
            <li className="text-white py-3">
              <FaFacebookF />
            </li>
            <li className="text-white mb-3 pb-3 z-10">
              <FaInstagram />
            </li>
            {/* <li className="text-white ">
              <FaPlus />
            </li> */}
          </ul>
        </div>
      </div>
      <div className="teacher-details px-4">
        <p className="font-sans font-semibold mt-3 ">{name}</p>
        <p className="text-cyan-700">{role}</p>
      </div>
    </section>
  );
};

export default Teacher;
