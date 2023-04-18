import React, { useEffect, useState } from 'react';
import '../scss/hero.scss';

function Hero() {
	const [deviceWidth, setDeviceWidth] = useState(0);

	useEffect(() => {
		setDeviceWidth(window.innerWidth);
	}, []);

	return (
		<>
			{deviceWidth <= 1024 ? (
				<div className='hero-section'>
					<h1 className='text reveal-text'>web, soft and</h1>
					<h2 className='text reveal-text'>app design,</h2>
					<h3 className='text reveal-text'>development,</h3>
					<h4 className='text reveal-text'>hosting,</h4>
					<h5 className='text reveal-text'>maintenance</h5>
					<h6 className='text reveal-text'>& graphic</h6>
					<p className='text reveal-text'>design affairs.</p>
				</div>
			) : (
				<div className='hero-section'>
					<h1 className='text reveal-text'>web, soft and app</h1>
					<h2 className='text reveal-text'> design, development,</h2>
					<h3 className='text reveal-text'>hosting, maintenance &</h3>
					<h4 className='text reveal-text'>graphic design affairs.</h4>
				</div>
			)}
		</>
	);
}

export default Hero;
