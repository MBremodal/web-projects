import React, {useState} from 'react';
import projectsArr from './projectsArr';
import CurrentProject from './CurrentProject';

function ProjectsList() {
	const [open, setOpen] = useState();
	const [openProject, setOpenProject] = useState();

	return (
		<div className={open ? 'closed-projects margin ' : 'closed-projects'}>
			{projectsArr.map((project, idx) => (
				<div
					onClick={() => {
						setOpen(!open);
						setOpenProject(idx);
					}}
					key={idx}
					className={openProject === idx && open ? 'project-card open border' : open ? 'project-card border opacity' : 'project-card'}
					style={{
						backgroundImage: `url(${project.bgImage})`,
						backgroundPosition: 'center',
					}}
				>
					{openProject === idx && open ? (
						<CurrentProject
							open={open}
							setOpen={setOpen}
							openProject={openProject}
							setOpenProject={setOpenProject}
						/>
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
