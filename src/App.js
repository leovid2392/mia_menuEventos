import React, { useEffect, useState } from "react";

import Home from "./components/home/Home";
import MenuList from "./components/menuList/MenuList";

import ReactGa from "react-ga";

import "./App.css";

function App() {
	const [showHome, setShowHome] = useState(true);

	useEffect(() => {
		ReactGa.initialize("G-PY38QBC11Q");

		// to report page view
		ReactGa.pageview("/");
	}, []);

	if (showHome) {
		return <Home showHome={showHome} setShowHome={setShowHome} />;
	} else {
		return <MenuList showHome={showHome} setShowHome={setShowHome} />;
	}
}

export default App;
