import React from "react";

function Pizza({ img, legalsText }) {
	return (
		<section className='pizza'>
			<p className='taxInfo'>{legalsText}</p>
			<figure className='menuImg_container'>
				<img src={img} alt='pizza menu' />
			</figure>
		</section>
	);
}

export default Pizza;
