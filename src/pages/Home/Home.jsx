import React from "react";
import Container from "../../components/Container";
import Teachers from "../Home/components/Teachers";
import FindCourse from "./components/FindCourse";
import Masonary from "./components/Masonary";
import Welcome from "./components/Welcome";

const Home = () => {
  return (
    <Container>
      <Welcome />
      <Masonary />
      <Teachers />
      <FindCourse />
    </Container>
  );
};

export default Home;
