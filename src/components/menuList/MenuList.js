import React from "react";

import { AiOutlineClose } from "react-icons/ai";

function MenuList() {
	return (
		<section className='menuList'>
			<div className='menuList_nav'>
				<button className='icon'>
					<AiOutlineClose />
				</button>
				<button className='btn'>English</button>
			</div>
			<section className='menuList_buttons'>
				<button className='btn'> bebidas </button>
				<button className='btn'> alimentos </button>
				<button className='btn'> pizza & pasta </button>
			</section>
		</section>
	);
}

export default MenuList;
