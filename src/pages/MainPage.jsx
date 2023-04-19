import React from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';
import ArticleAboutUs from '../components/ArticleAboutUs';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects/Projects';

function MainPage() {
	return (
		<div className='main-container'>
			<BurgerMenu />
			<Hero />
			<ArticleAboutUs />
			<Projects />
			<Contacts />
		</div>
	);
}

export default MainPage;
