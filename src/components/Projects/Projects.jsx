import React from 'react';
import '../../scss/projects.scss';
import ProjectsList from './ProjectsList';

function Projects() {
	return (
		<div
			style={{
				marginBottom: '150px',
			}}
		>
			<ProjectsList />
		</div>
	);
}

export default Projects;
