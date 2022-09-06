import React from "react";
import Container from "../../components/Container";
import FindCourse from "./components/FindCourse";
import Masonary from "./components/Masonary";
import Welcome from "./components/Welcome";

const Home = () => {
	return (
		<Container>
			<Welcome />
			<Masonary />
			<FindCourse />
		</Container>
	);
};

export default Home;
