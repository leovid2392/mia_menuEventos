import { AiOutlineHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
// import "./navBar.css";

function NavBar({
	setShowHome,
	showHome,
	food,
	setDrinks,
	setPizza,
	setFood,
	menu,
}) {
	const handleHome = () => {
		if (!showHome) {
			setShowHome(true);
		}
	};

	const handleMenu = () => {
		if (food === "drinks") {
			setDrinks(false);
		}

		if (food === "pizza") {
			setPizza(false);
		}
		if (food === "food") {
			setFood(false);
		}
	};

	return (
		<div className='navBar'>
			<button className='icon icon-home' onClick={handleHome}>
				<AiOutlineHome />
			</button>
			<p>{menu}</p>
			<button className='icon icon-menu' onClick={handleMenu}>
				<FaBars />
			</button>
		</div>
	);
}
export default NavBar;
