import React, { useContext } from 'react';
import '../../scss/projects.scss';
import ProjectsList from './ProjectsList';

function Projects() {
	return (
		<div className='projects-list-container'>
			<ProjectsList />
		</div>
	);
}

export default Projects;
