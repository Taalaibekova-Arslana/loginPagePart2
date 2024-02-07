import scss from "../layout/Layout.module.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UserPage from "../pages/UserPage";

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/userPage" element={<UserPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<Registration />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
