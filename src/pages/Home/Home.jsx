import React from "react";
import Container from "../../components/Container";
import Masonary from "./components/Masonary";
import OurClass from "./components/OurClass/OurClass";
import Welcome from "./components/Welcome";

const Home = () => {
	return (
		<Container>
			<Welcome />
			<Masonary />
			<OurClass></OurClass>
		</Container>
	);
};

export default Home;
