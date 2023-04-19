import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';
import ArticleAboutUs from '../components/ArticleAboutUs';
import Contacts from '../components/Contacts';

function MainPage() {
	return (
		<div className='main-container'>
			<BurgerMenu />
			<Hero />
			<ArticleAboutUs />
			<Contacts />
		</div>
	);
}

export default MainPage;
