import React from "react";
import { useState } from "react";
import Container from "../../components/Container";
import { teachersData } from "../../Data/teachersData";
import PageHeader from "../../shared/PageHeader";
import Teacher from "./components/Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState(teachersData);
  return (
    <div>
      <>
        <PageHeader route="Home | Teachers" page="Teachers" />
        <Container>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
            {teachers.map((teacher) => (
              <Teacher key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </Container>
      </>
    </div>
  );
};

export default Teachers;
