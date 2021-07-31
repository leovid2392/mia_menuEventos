import React from "react";

function Food({ img, legalsText }) {
	return (
		<section className='food'>
			<p className='taxInfo'>{legalsText}</p>
			<figure className='menuImg_container'>
				<img src={img} alt='food menu' />
			</figure>
		</section>
	);
}

export default Food;
