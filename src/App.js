import React, { useState } from "react";

import Home from "./components/home/Home";
import MenuList from "./components/menuList/MenuList";

import "./App.css";

function App() {
	const [showHome, setShowHome] = useState(false);

	if (showHome) {
		return <Home />;
	} else {
		return <MenuList />;
	}
}

export default App;
