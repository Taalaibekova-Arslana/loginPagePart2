import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/providers/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PrivateRoute>
				<App />
			</PrivateRoute>
		</BrowserRouter>
	</React.StrictMode>
);
