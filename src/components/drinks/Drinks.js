import React from "react";

function Drinks({ text }) {
	return (
		<section className='drinks'>
			<figure>
				<h1>{text}</h1>
			</figure>
		</section>
	);
}

export default Drinks;
