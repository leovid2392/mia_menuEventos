import React, { useState } from "react";

import Drinks from "../drinks/Drinks";
import NavBar from "../navBar/NavBar";

import { AiOutlineClose } from "react-icons/ai";
import { FaBookDead } from "react-icons/fa";

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

	if (english && drinks) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
				/>
				<Drinks text='drinks in english' />
			</>
		);
	} else if (drinks) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
				/>
				<Drinks text='drinks in spanish' />
			</>
		);
	}

	if (english && food) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='food'
					setFood={setFood}
				/>
				<Drinks text='food in english' />
			</>
		);
	} else if (food) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='food'
					setFood={setFood}
				/>
				<Drinks text='food in spanish' />
			</>
		);
	}

	if (english && pizza) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
				/>
				<Drinks text='pizza in english' />
			</>
		);
	} else if (pizza) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
				/>
				<Drinks text='pizza in spanish' />
			</>
		);
	}

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
					<button className='btn' onClick={handleDrinks}>
						Drinks
					</button>
					<button className='btn' onClick={handleFood}>
						Food
					</button>
					<button className='btn' onClick={handlePizza}>
						Pizza & Pasta
					</button>
				</section>
			</section>
		);
	}
}

export default MenuList;
