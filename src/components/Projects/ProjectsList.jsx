import React, { useContext, useState } from 'react';
import projectsArr from './projectsArr';
import CurrentProject from './CurrentProject';
import { Context as MainContext } from '../../context/MainContext';
import { Context as ProjectsContext } from '../../context/ProjectsContext';

function ProjectsList() {
	// const { state, handleOpen } = useContext(MainContext);
	const { state, handleOpen } = useContext(ProjectsContext);

	const { openWebsite } = state;

	console.log('openWebsite ===', openWebsite);

	return (
		<div className='closed-projects'>
			{projectsArr.map((project, idx) => (
				<div
					onClick={() => handleOpen(true, idx)}
					key={idx}
					className={
						openWebsite.projectIndex === idx
							? 'project-card open'
							: 'project-card border'
					}
					style={{
						backgroundImage: `url(${project.bgImage})`,
						backgroundPosition: 'center',
					}}
				>
					{openWebsite.projectIndex === idx && openWebsite.active ? (
						<CurrentProject />
					) : (
						<div className='project-desc'>
							<p
								style={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<span>{project.num} </span>
							</p>
							<h2>{project.title}</h2>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default ProjectsList;
