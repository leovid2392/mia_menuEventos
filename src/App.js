import React, { useState } from "react";

import Home from "./components/home/Home";
import MenuList from "./components/menuList/MenuList";

import "./App.css";

function App() {
	const [showHome, setShowHome] = useState(false);

	if (showHome) {
		return <Home showHome={showHome} setShowHome={setShowHome} />;
	} else {
		return <MenuList showHome={showHome} setShowHome={setShowHome} />;
	}
}

export default App;
