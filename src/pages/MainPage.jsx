import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';

function MainPage() {
	return (
		<div className='main-container'>
			<BurgerMenu />
			<Hero />
		</div>
	);
}

export default MainPage;
