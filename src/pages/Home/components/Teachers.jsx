import React, { useState } from "react";
import { teachersData } from "../../../Data/teachersData";
import Teacher from "./Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState(teachersData);

  return (
    <section className="py-10">
      <div className="text-center">
        <p className="text-5xl font-bold ">
          Our Awesome <br /> Teachers
        </p>
        <p className="mt-5 text-sm">
          Quisque id ultrices tellus, ac sodales ex. Cras nec ante viverra,
          bibendum justo eget, <br /> lacinia dui. Donec ligula ligula,
          elementum sit amet
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
