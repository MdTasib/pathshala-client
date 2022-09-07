import React from "react";
import Container from "../../components/Container";
import Teachers from "../Home/components/Teachers";
import FindCourse from "./components/FindCourse";
import Masonary from "./components/Masonary";
import OurClass from "../Home/components/OurClass";
import Welcome from "./components/Welcome";
import RecentNews from "./components/RecentNews";
import Banner from "./components/Banner";
import Header from "./components/Header";
// import Banner from "../../assets/styles/Banner";

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Welcome />
      <Masonary />
      <OurClass />
      <Teachers />
      <FindCourse />
      <RecentNews />
    </Container>
  );
};

export default Home;
