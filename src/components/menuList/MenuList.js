import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

function MenuList({ showHome, setShowHome }) {
	const [english, setEnglish] = useState(false);
	const [drinks, setDrinks] = useState(false);
	const [food, setFood] = useState(false);
	const [pizza, setPizza] = useState(false);

	const handleLenguage = () => {
		if (english) {
			setEnglish(false);
		}
		if (!english) {
			setEnglish(true);
		}
	};

	const handleMenu = () => {
		if (!showHome) {
			setShowHome(true);
		}
	};

	const handleDrinks = () => {
		if (!drinks) {
			setDrinks(true);
		}
	};
	const handleFood = () => {
		if (!food) {
			setFood(true);
		}
	};
	const handlePizza = () => {
		if (!pizza) {
			setPizza(true);
		}
	};

	if (!english) {
		return (
			<section className='menuList'>
				<div className='menuList_nav'>
					<button className='icon' onClick={handleMenu}>
						<AiOutlineClose />
					</button>
					<button className='btn' onClick={handleLenguage}>
						English
					</button>
				</div>
				<section className='menuList_buttons'>
					<button className='btn' onClick={handleDrinks}>
						bebidas
					</button>
					<button className='btn' onClick={handleFood}>
						alimentos
					</button>
					<button className='btn' onClick={handlePizza}>
						pizza & pasta
					</button>
				</section>
			</section>
		);
	} else {
		return (
			<section className='menuList'>
				<div className='menuList_nav'>
					<button className='icon' onClick={handleMenu}>
						<AiOutlineClose />
					</button>
					<button className='btn' onClick={handleLenguage}>
						Español
					</button>
				</div>
				<section className='menuList_buttons'>
					<button className='btn'> Drinks </button>
					<button className='btn'> Food </button>
					<button className='btn'> Pizza & Pasta </button>
				</section>
			</section>
		);
	}
}

export default MenuList;
