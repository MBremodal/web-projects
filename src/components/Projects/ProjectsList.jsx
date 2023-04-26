import React, { useContext, useState } from 'react';
import projectsArr from './projectsArr';
import CurrentProject from './CurrentProject';

import { Context as MainContext } from '../../context/MainContext';
import { Context as ProjectsContext } from '../../context/ProjectsContext';

function ProjectsList() {
	// const { state, handleOpen } = useContext(MainContext);
	const { state, handleOpen } = useContext(ProjectsContext);

	const { openWebsite } = state;

	console.log('openWebsite.active ===', openWebsite.active);
	console.log('openWebsite.projectsIndex ===', openWebsite.projectsIndex);

	return (
		<div className='closed-projects'>
			{projectsArr.map((project, idx) => (
				<div
					key={idx}
					className='project-card'
					style={{
						backgroundImage: `url(${project.bgImage})`,
						backgroundPosition: 'center',
					}}
				>
					{openWebsite.projectsIndex === idx && openWebsite.active ? (
						<CurrentProject index={idx} />
					) : (
						<div
							className={`project-desc ${
								openWebsite.projectsIndex === idx ? 'open' : ''
							}`}
							onClick={() => {
								handleOpen(true, idx);
							}}
						>
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
