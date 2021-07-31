import React from "react";

function Food({ img }) {
	return (
		<section className='food'>
			<figure className='menuImg_container'>
				<img src={img} alt='food menu' />
			</figure>
		</section>
	);
}

export default Food;
