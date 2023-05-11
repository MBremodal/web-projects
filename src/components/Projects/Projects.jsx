import React, { useContext } from 'react';
import '../../css/projects.css';
import ProjectsList from './ProjectsList';

function Projects() {
	return (
		<div
			className='projects-list-container'
			id='portfolio'
		>
			<ProjectsList />
		</div>
	);
}

export default Projects;
