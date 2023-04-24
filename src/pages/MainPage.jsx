import React, {useState} from 'react';
import BurgerMenu from '../components/BurgerMenu';
import Hero from '../components/Hero';
import ArticleAboutUs from '../components/ArticleAboutUs';
import Contacts from '../components/Contacts';
import Projects from '../components/Projects/Projects';
import mainContext from '../context/mainContext';

function MainPage() {
	const [open, setOpen] = useState(false);
	const [openProject, setOpenProject] = useState(null);

	const states = {
		open,
		setOpen,
		openProject,
		setOpenProject,
	};

	return (
		<mainContext.Provider value={states}>
			<div className='main-container'>
				<BurgerMenu />
				<Hero />
				<ArticleAboutUs />
			</div>
			<Projects />
			<div className='main-container'>
				<Contacts />
			</div>
		</mainContext.Provider>
	);
}

export default MainPage;
