import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import Login from "../components/Login";

const Home = () => {
	return (
		<>
			<Navbar />
			<HomeContent />
			<Login />
		</>
	);
}

export default Home
