import React from "react";

function Drinks({ img1, img2 }) {
	return (
		<section className='drinks'>
			<figure className='menuImg_container'>
				<img src={img1} alt='menu drinks' />
				<img src={img2} alt='menu drinks' />
			</figure>
		</section>
	);
}

export default Drinks;
