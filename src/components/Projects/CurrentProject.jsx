import React, { useContext, useEffect } from 'react';
import projectsArr from './projectsArr';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Context as ProjectsContext } from '../../context/ProjectsContext';

function CurrentProject() {
	const { state, handleOpen } = useContext(ProjectsContext);

	const { openWebsite } = state;

	let currProject;

	useEffect(() => {
		if (openWebsite.active) {
			currProject = projectsArr[openWebsite.projectsIndex];
			console.log('currProject ===', currProject);
		}
	}, [openWebsite]);

	// const currentProject = projectsArr[openWebsite.projectsIndex];

	// console.log('currentProject ===', currentProject);

	return (
		<div className='open current-project'>
			<iframe
				className='iframe'
				title='hello'
				src={currProject.link}
			></iframe>
			<div className='project-desc-full'>
				<div className='button'>
					<p>{currProject.num} </p>
					<button
						onClick={() => {
							console.log('a');
						}}
					>
						<HiOutlineArrowNarrowLeft />
						back
					</button>
				</div>
				<h3>{currProject.title}</h3>
				<p>{currProject.desc}</p>
				<a
					href={currProject.link}
					target='_blank'
				>
					visit website
				</a>
			</div>
		</div>
	);
}

export default CurrentProject;
