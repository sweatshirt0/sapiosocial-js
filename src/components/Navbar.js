import React from "react";
import Calender from "./Calender";

const Navbar = () => {
	return (
		<div class="nav-wrapper">
			<a class="home-link" href="/">Home</a>
			<a class="news-link" href="/news">News</a>
			<a class="contact-link" href="/contact">Contact</a>
			<a class="register-link" href="/register">Register</a>
			<Calender />
		</div>
	);
}

export default Navbar
