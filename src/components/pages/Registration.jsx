import scss from "./Registration.module.scss";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url =
	"https://api.elchocrud.pro/api/v1/6e06db07a137f2ae86eadcf94b38039b/userLogin";

const Registration = () => {
	const navigate = useNavigate();
	const [userLogin, setUserLogin] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleRegis = () => {
		const newData = {
			name: userLogin,
			password: userPassword,
		};
		postRequest(newData);
	};

	const postRequest = async (newData) => {
		const response = await axios.post(url, newData);
		console.log(response.data);
		navigate("/login");
	};

	return (
		<div className="container">
			<div className={scss.content}>
				<div className={scss.card}>
					<h2>Зарегистируйтесь</h2>
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
					<div>
						<button onClick={handleRegis}>Registration</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
