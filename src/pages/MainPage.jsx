import React, { useContext, useEffect, useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';
import ArticleAboutUs from '../components/ArticleAboutUs';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects/Projects';
import { Context as ProjectContext } from '../context/ProjectsContext';
import '../css/main.css';

function MainPage() {
	const { state } = useContext(ProjectContext);

	const { theme } = state;

	useEffect(() => {
		if (state.openWebsite.active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [state.openWebsite.active, window.scrollY]);

	return (
		<div
			className='parent-div'
			style={{
				backgroundColor: theme.bgc,
				color: theme.text,
			}}
		>
			<div className='main-container'>
				<BurgerMenu />
				<Hero />
				<ArticleAboutUs />
				<Projects />
				<Contacts />
			</div>
		</div>
	);
}

export default MainPage;
