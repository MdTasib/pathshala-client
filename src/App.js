import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";
import Classes from "./pages/Classes/Classes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
