import React, { useState } from "react";
import { teachersData } from "../../../Data/teachersData";
import Teacher from "./Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState(teachersData);

  return (
    <section className="py-10">
      <div className="text-center">
        <p className="font-sans text-5xl font-bold ">
          Our Awesome <br />
          <span className="text-orange-600"> Teachers</span>
        </p>
        <p className="mt-5 text-xs md:text-sm text-slate-700">
          Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra,
          bibendum justo eget, <br /> lacinia dui. Donec ligula ligula,
          elementum sit amet
        </p>
      </div>
      <div className=" mx-auto mt-9">
        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 ">
          {teachers.map((teacher) => (
            <Teacher key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
