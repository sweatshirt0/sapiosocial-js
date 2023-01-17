import React from "react";

const Calender = () => {
	var today = new Date (),
		date = today.getFullYear() + "-" + (today.getMonth() + 1) + '-' + today.getDate();
	return (
		<h3 class="date">{date}</h3>
	);
}

export default Calender
