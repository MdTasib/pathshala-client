import React from "react";
import Container from "../../components/Container";
import Teachers from "../Home/components/Teachers";
import Masonary from "./components/Masonary";
import Welcome from "./components/Welcome";

const Home = () => {
	return (
		<Container>
			<Welcome />
			<Teachers/>
			<Masonary />
		</Container>
	);
};

export default Home;
