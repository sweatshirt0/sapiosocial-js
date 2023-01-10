import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/news" element={<News />} />
		</Routes>
  );
}

export default App;
