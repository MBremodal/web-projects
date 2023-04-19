import React from 'react';
import projectsArr from './projectsArr';

function OpenProjects({setOpen, openProject, setOpenProject}) {
	const currentProject = projectsArr[openProject];
	const prevProject = projectsArr[openProject - 1];
	const nextProject = projectsArr[openProject + 1];

	return (
		<div className='open slide-in-blurred'>
			{prevProject && (
				<div
					style={{
						height: '10vh',
						backgroundImage: `url(${prevProject.bgImage})`,
						backgroundPosition: 'center',
					}}
				></div>
			)}
			<div className='current-project'>
				<iframe
					className='iframe'
					title='hello'
					src={currentProject.link}
					width='100%'
					height='99%'
				></iframe>
				<div className='project-desc-full'>
					<div
						style={{
							width: '90%',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<p>{currentProject.num}</p>
						<button
							onClick={() => {
								setOpen(!open);
								setOpenProject(null);
							}}
						>
							← back
						</button>
					</div>

					<p>{currentProject.desc}</p>
				</div>
			</div>
			{nextProject && (
				<div
					style={{
						height: '10vh',
						backgroundImage: `url(${nextProject.bgImage})`,
						backgroundPosition: 'center',
					}}
				></div>
			)}
		</div>
	);
}

export default OpenProjects;
