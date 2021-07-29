import React, { useState } from "react";

import logo_miaBySelina from "./assets/logo_mia_by_selina.png";

import data from "./data";

import "./App.css";

function App() {
	const [events, setEvents] = useState(data);
	const [index, setIndex] = useState(0);

	return (
		<div className='App'>
			<header className='home_header'>
				<figure className='home_logoContainer'>
					<img
						className='home_logo'
						src={logo_miaBySelina}
						alt='mia by selina'
					/>
				</figure>
			</header>
			<button>menu</button>
			<section className='slider'>
				{events.map((event, eventIndex) => {
					const { id, url, title, image } = event;

					return (
						<article key={id}>
							<figure className='slider_imgContainer'>
								<a className='slider_link' href={url}>
									<img className='slider_img' src={image} alt={title} />
									<div className='slider_buyText'>
										<h5>click me to buy</h5>
									</div>
								</a>
							</figure>
						</article>
					);
				})}

				{/* <figure className='slider_imgContainer'>
					<a className='slider_link' href='#'>
						<img className='slider_img' src={july_31} alt='' />
						<div className='slider_buyText'>
							<h5>click me to buy</h5>
						</div>
					</a>
				</figure> */}
			</section>
		</div>
	);
}

// const sliderData = [
// 	{
// 		id: 1,
// 		url: "https://www.ticketfairy.com/event/paulor-31jul2021/",
// 		title: "paulor neo human, special dinner",
// 		image: july_31,
// 	},
// 	{
// 		id: 2,
// 		url: "https://www.ticketfairy.com/event/whomadewho-4aug2021/",
// 		title: "who made who by sam sparacio, special dinner",
// 		image: august_04,
// 	},
// 	{
// 		id: 3,
// 		url: "https://www.ticketfairy.com/event/mathame-7aug2021/",
// 		title: "mathame lyke neo human, special dinner",
// 		image: august_07,
// 	},
// ];

export default App;
