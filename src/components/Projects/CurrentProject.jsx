import React, {useContext} from 'react';
import projectsArr from './projectsArr';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import mainContext from '../../context/mainContext';

function CurrentProject() {
	const {openProject, open, setOpen, setOpenProject} = useContext(mainContext);
	const currentProject = projectsArr[openProject];

	return (
		<div className='open current-project'>
			<iframe
				className='iframe'
				title='hello'
				src={currentProject.link}
			></iframe>
			<div className='project-desc-full'>
				<div className='button'>
					<p>{currentProject.num} </p>
					<button
						onClick={() => {
							console.log('a');
						}}
					>
						<HiOutlineArrowNarrowLeft />
						back
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
