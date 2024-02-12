import scss from "./UserPage.module.scss";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const url = import.meta.env.VITE_USERS_URL;

const UserPage = () => {
	const [userProfile, setUserProfile] = useState([]);

	const getRequest = async () => {
		const response = await axios.get(url);
		const responseData = response.data;
		setUserProfile(responseData);
	};

	const deleteRequest = async (id) => {
		const response = await axios.delete(`${url}/${id}`);
		setUserProfile(response.data);
	};

	useEffect(() => {
		getRequest();
	}, []);
	return (
		<div className="container">
			<div className={scss.content}>
				{userProfile.map((item, index) => (
					<div className={scss.card} key={index}>
						<h1>{item.name}</h1>
						<p>{item.password}</p>
						<button onClick={() => deleteRequest(item._id)}>Delete</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserPage;
