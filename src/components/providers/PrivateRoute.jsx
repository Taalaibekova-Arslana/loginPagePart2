// import scss from "../privateRoute/Private.module.scss";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const login = localStorage.getItem("login");
	const loginBoolean = !!login;

	useEffect(() => {
		switch (pathname) {
			case "/login":
				if (loginBoolean) {
					navigate("/userPage");
				}
				break;
			case "/registration":
				if (loginBoolean) {
					navigate("/userPage");
				}
				break;
			case "/userPage":
				if (!loginBoolean) {
					navigate("/login");
				}
				break;
			default:
				break;
		}
	}, [pathname]);

	return children;
};

export default PrivateRoute;
