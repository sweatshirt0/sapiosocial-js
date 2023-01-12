import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import Login from "../components/Login";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<HomeContent />
			<Login />
			<Footer />
		</>
	);
}

export default Home
