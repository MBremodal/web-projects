import React, {useState} from 'react';
import projectsArr from './projectsArr';

function ClosedProjects({open, setOpen, setOpenProject}) {
	return (
		<div className='closed-projects slide-in-blurred2'>
			{projectsArr.map((project, idx) => (
				<div
					onClick={() => {
						setOpen(!open);
						setOpenProject(idx);
					}}
					key={idx}
					className='project-card'
					style={{
						backgroundImage: `url(${project.bgImage})`,
						backgroundPosition: 'center',
					}}
				>
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
				</div>
			))}
		</div>
	);
}

export default ClosedProjects;
