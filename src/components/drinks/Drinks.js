import React from "react";

function Drinks({ img1, img2, legalsText }) {
	return (
		<section className='drinks'>
			<p className='taxInfo'>{legalsText}</p>
			<figure className='menuImg_container'>
				<img src={img1} alt='menu drinks' />
				<img src={img2} alt='menu drinks' />
			</figure>
		</section>
	);
}

export default Drinks;
