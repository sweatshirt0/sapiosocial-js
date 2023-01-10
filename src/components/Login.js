import React from "react";
import Divider from "./Divider";

const Login = () => {
	return (
		<div class="form-wrapper">
			<form class="form" action="#" method="POST">
				<input type="text" class="username" name="username" placeholder="Username" /><br /><br />
				<input type="password" class="password" name="password" placeholder="Password" /><br /><br />
				<input type="submit" class="submit" value="login" name="submit" />
				<Divider />
				<button class="signup-button"><a class="signup-link" href="/">Sign up</a></button>
			</form>
		</div>
	);
}

export default Login
