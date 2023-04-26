import React, { useContext, useEffect } from 'react';
import projectsArr from './projectsArr';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Context as ProjectsContext } from '../../context/ProjectsContext';

function CurrentProject({ index }) {
	const { state, handleOpen, handleClose } = useContext(ProjectsContext);

	const { openWebsite } = state;

	const currentProject = projectsArr[index];

	// let currProject;

	// useEffect(() => {
	// 	if (openWebsite.active) {
	// 		currProject = projectsArr[openWebsite.projectsIndex];
	// 		console.log('currProject ===', currProject);
	// 	}
	// }, [openWebsite]);

	// const currentProject = projectsArr[openWebsite.projectsIndex];

	// console.log('currentProject ===', currentProject);

	return (
		<div className='open'>
			<div className='current-project'>
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
								console.log('backing');
								handleOpen(false, -1);
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
		</div>
	);
}

export default CurrentProject;
