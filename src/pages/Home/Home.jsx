import React from "react";
import Container from "../../components/Container";
import Teachers from "../Home/components/Teachers";
import FindCourse from "./components/FindCourse";
import Masonary from "./components/Masonary";
import OurClass from "./components/OurClass/OurClass";
import Welcome from "./components/Welcome";

const Home = () => {
	
  return (
    <Container>
      <Welcome />
      <Masonary />
	  <OurClass></OurClass>
      <Teachers />
      <FindCourse />
    </Container>
  );
};

export default Home;
