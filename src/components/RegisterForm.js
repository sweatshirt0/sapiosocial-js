import React from "react";
import Divider from "./Divider";

const RegisterForm = () => {
	return (
		<div class="register-wrapper">
			<h2 class="register-title"><span style={{color: "blue"}}>Welcome</span>, <span style={{color: "#00ab41"}}>friend</span>.</h2><br/>
			<form class="register" action="/register" method="POST">
				<input class="username-register" type="text" placeholder="Username" /><br/><br/>
				<input class="email-register" type="email" placeholder="Email" /><br/><br/>
				<input class="password-register" type="password" placeholder="Password" /><br/><br/>
				<input class="password-register-confirm" type="password" placeholder="Password Confirm" /><br/><br/>
				<input type="submit" class="register-button" value="Sign up" /><br/>
				<Divider /><br/>
				<button class="login-link-button"><a class="login-link" href="/">Log in</a></button>
			</form>
		</div>
	);
}

export default RegisterForm
