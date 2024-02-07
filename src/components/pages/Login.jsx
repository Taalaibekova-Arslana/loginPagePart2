import scss from "../pages/Login.module.scss";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url =
	"https://api.elchocrud.pro/api/v1/6e06db07a137f2ae86eadcf94b38039b/userLogin";

const Login = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleLogin = () => {
		if (userLogin === "" || userPassword === "") {
			alert("wrote");
		} else {
			const newData = {
				name: userLogin,
				password: userPassword,
			};
			getRequest(newData);
		}
	};

	const getRequest = async (newData) => {
		const response = await axios.get(url);
		const responseData = response.data;

		const findLogin = responseData.find(
			(item) => item.name === newData.name && item.password === newData.password
		);
		if (findLogin) {
			localStorage.setItem("login", "" + findLogin._id);
			navigate("/userPage");
		} else {
			alert("такой пользователь не существует");
		}
	};

	const registrationHandle = () => {
		navigate("/registration");
	};
	return (
		<div className="container">
			<div className={scss.content}>
				<div className={scss.card}>
					<h2>Вход</h2>
					<label htmlFor="userName">Login</label>
					<input
						value={userLogin}
						onChange={(e) => setUserLogin(e.target.value)}
						type="text"
						name="userName"
					/>
					<label htmlFor="userName">Password</label>
					<input
						value={userPassword}
						onChange={(e) => setUserPassword(e.target.value)}
						type="text"
						name="userName"
					/>
					<div className={scss.buttons}>
						<button onClick={handleLogin}>Login</button> 
						<button onClick={registrationHandle}>Registration</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
