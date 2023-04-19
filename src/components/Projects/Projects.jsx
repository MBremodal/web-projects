import React, {useState} from 'react';
import '../../scss/projects.scss';
import ClosedProjects from './ClosedProjects';
import OpenProjects from './OpenProjects';
import projectsArr from './projectsArr';

function Projects() {
	const [open, setOpen] = useState();
	const [openProject, setOpenProject] = useState();

	return (
		<>
			{!open && (
				<ClosedProjects
					open={open}
					setOpen={setOpen}
					openProject={openProject}
					setOpenProject={setOpenProject}
				/>
			)}

			{open && (
				<OpenProjects
					open={open}
					setOpen={setOpen}
					openProject={openProject}
					setOpenProject={setOpenProject}
				/>
			)}
		</>
	);
}

export default Projects;
