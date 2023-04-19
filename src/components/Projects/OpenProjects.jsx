import React from 'react';
import projectsArr from './projectsArr';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import arrowUp from '../../assets/icons/arrowUp.svg';

function OpenProjects({setOpen, openProject, setOpenProject}) {
	const currentProject = projectsArr[openProject];
	const prevProject = projectsArr[openProject - 1];
	const nextProject = projectsArr[openProject + 1];

	return (
		<div className='open slide-in-blurred'>
			{prevProject && (
				<div
					style={{
						height: '100px',
						backgroundImage: `url(${prevProject.bgImage})`,
						backgroundPosition: 'center',
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
						opacity: '0.4',
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
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'baseline',
						}}
					>
						<p>{currentProject.num}</p>
						<button
							onClick={() => {
								setOpen(!open);
								setOpenProject(null);
							}}
						>
							<HiOutlineArrowNarrowLeft /> back
						</button>
					</div>
					<h3>{currentProject.title}</h3>
					<p>{currentProject.desc}</p>
					<a
						href={currentProject.link}
						target='_blank'
					>
						visit website
					</a>
				</div>
			</div>
			{nextProject && (
				<div
					style={{
						height: '100px',
						backgroundImage: `url(${nextProject.bgImage})`,
						backgroundPosition: 'center',
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<img
						style={{
							position: 'relative',
							zIndex: '10',
							opacity: '1',
						}}
						src={arrowUp}
						alt=''
					/>
				</div>
			)}
		</div>
	);
}

export default OpenProjects;
