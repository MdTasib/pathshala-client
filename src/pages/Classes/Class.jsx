import React from "react";
import Classes from "./components/Classes";
import Container from "../../components/Container";
import PageHeader from "../../shared/PageHeader";

const Class = () => {
	return (
		<div>
			<>
				<PageHeader route='Home | Classes' page='Classes' />
				<Container>
					<Classes />
				</Container>
			</>
		</div>
	);
};

export default Class;
