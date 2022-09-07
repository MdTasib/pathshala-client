import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import JoinUs from "./components/JoinUs";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<JoinUs />
			<Footer />
		</>
	);
}

export default App;
