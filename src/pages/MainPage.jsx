import React, { useContext, useEffect, useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';
import ArticleAboutUs from '../components/ArticleAboutUs';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects/Projects';
import { Context as ProjectContext } from '../context/ProjectsContext';

function MainPage() {
	const { state } = useContext(ProjectContext);

	return (
		<div
			style={{
				overflowY: 'hidden',
			}}
		>
			<div className='main-container'>
				<BurgerMenu />
				<Hero />
				<ArticleAboutUs />
			</div>
			<Projects />
			<div className='main-container'>
				<Contacts />
			</div>
		</div>
	);
}

export default MainPage;
