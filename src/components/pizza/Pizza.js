import React from "react";

function Pizza({ img }) {
	return (
		<section className='pizza'>
			<figure className='menuImg_container'>
				<img src={img} alt='pizza menu' />
			</figure>
		</section>
	);
}

export default Pizza;
