import React, {useContext, useEffect} from 'react';
import projectsArr from './projectsArr';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import {Context} from '../../context/MainContext';

function CurrentProject() {
	const {state, handleBack} = useContext(Context);

	const {openProject} = state;

	const currentProject = projectsArr[openProject];

	// useEffect(() => {
	// 	handleBack();
	// }, [window.scrollY]);

	return (
		<div className='open current-project'>
			<iframe
				className='iframe'
				title='hello'
				src={currentProject.link}
			></iframe>
			<div className='project-desc-full'>
				<div className='button'>
					<p>{currentProject.num} </p>
					<button
						onClick={() => {
							handleBack();
						}}
					>
						<HiOutlineArrowNarrowLeft />
						back
					</button>
				</div>
				<h3>{currentProject.title}</h3>
				<p>{currentProject.desc}</p>
				<a
					href={currentProject.link}
					target='_blank'
				>
					visit website
				</a>
			</div>
		</div>
	);
}

export default CurrentProject;
