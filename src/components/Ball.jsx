import React from 'react';
import '../css/ball.css';

function Ball({ success }) {
	return (
		<div className='ball-container'>
			<div className='ball-subcontainer'>
				<div className={`ball-outer ${success ? 'falling-animation' : ''}`}>
					<div className='ball'></div>
				</div>
				<div className='outer'></div>
				<div className='black-hole'></div>
			</div>
		</div>
	);
}

export default Ball;
