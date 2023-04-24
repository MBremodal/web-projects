import React, {useContext, useState} from 'react';
import projectsArr from './projectsArr';
import CurrentProject from './CurrentProject';
import {Context} from '../../context/MainContext';

function ProjectsList() {
	const {state, handleProjectOpen} = useContext(Context);

	const {open, openProject} = state;

	return (
		<div className='closed-projects'>
			{projectsArr.map((project, idx) => (
				<div
					onClick={() => {
						handleProjectOpen(idx);
					}}
					key={idx}
					className={openProject === idx ? 'project-card open' : 'project-card'}
					style={{
						backgroundImage: `url(${project.bgImage})`,
						backgroundPosition: 'center',
					}}
				>
					{openProject === idx && open ? (
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
