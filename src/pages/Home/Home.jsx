import React from "react";
import Container from "../../components/Container";
import Masonary from "./components/Masonary";
import Welcome from "./components/Welcome";

const Home = () => {
	return (
		<Container>
			<Welcome />
			<Masonary />
		</Container>
	);
};

export default Home;
