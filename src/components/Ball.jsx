import React, { useContext } from 'react';
import '../css/ball.css';
import { Context } from '../context/ProjectsContext';

function Ball({ success }) {
	const { state } = useContext(Context);

	const { theme } = state;

	return (
		<div className='ball-container'>
			<div className='ball-subcontainer'>
				<div className={`ball-outer ${success ? 'falling-animation' : ''}`}>
					<div className='ball'></div>
				</div>
				<div className='outer'></div>
				<div
					className='black-hole'
					style={{
						backgroundColor: theme.bgc,
					}}
				></div>
			</div>
		</div>
	);
}

export default Ball;
