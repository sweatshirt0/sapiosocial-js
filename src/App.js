import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/news" element={<News />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
  );
}

export default App;
