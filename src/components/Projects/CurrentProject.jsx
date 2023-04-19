import React from 'react';
import projectsArr from './projectsArr';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import arrowUp from '../../assets/icons/arrowUp.svg';

function CurrentProject({openProject, open, setOpen, setOpenProject}) {
	const currentProject = projectsArr[openProject];
	const prevProject = projectsArr[openProject - 1];
	const nextProject = projectsArr[openProject + 1];
	return (
		<div className='open current-project'>
			<iframe
				className='iframe'
				title='hello'
				src='https://www.zoomarket.lt'
			></iframe>
			<div className='project-desc-full'>
				<div className='button'>
					<p>{currentProject.num} </p>
					<button
						onClick={() => {
							setOpen(false);
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
	);
}

export default CurrentProject;
