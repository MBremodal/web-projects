import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';
import Projects from '../components/Projects/Projects';

function MainPage() {
	return (
		<div className='main-container'>
			{/* <BurgerMenu />
			<Hero /> */}
			<Projects />
		</div>
	);
}

export default MainPage;
