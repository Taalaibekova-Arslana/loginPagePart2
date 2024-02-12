import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const url = import.meta.env.VITE_USERS_URL;

const Header = () => {
	const links = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "Users",
			href: "/userPage",
		},
	];

	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [userProfile, setUserProfile] = useState([]);

	const userId = localStorage.getItem("login");

	const getRequest = async () => {
		const response = await axios.get(url);
		const responseData = response.data;

		if (userId) {
			const findUser = responseData.find((item) => item._id === +userId);
			setUserProfile(findUser);
		} else {
			console.log("user not found login");
		}
	};

	useEffect(() => {
		getRequest();
	}, [pathname]);

	const removeRequest = () => {
		localStorage.removeItem("login", "1");
		setUserProfile({});
		navigate("/login");
	};

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<nav>
						<ul>
							{links.map((item, index) => (
								<li key={index}>
									<Link className={scss.link} to={item.href}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={scss.exit}>
						{userId ? (
							<div className={scss.user}>
								<p>User: {userProfile.name}</p>
								<button onClick={removeRequest}>Exit</button>
							</div>
						) : (
							<>
								<div className={scss.links}>
									<li>
										<Link className={scss.link} to="/login">
											Login
										</Link>
									</li>
									<li>
										<Link className={scss.link} to="/registration">
											Registration
										</Link>
									</li>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
