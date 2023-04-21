import React from 'react';
import '../scss/ball.scss';

function Ball() {
	return (
		<div className='ball-container'>
			<div className='ball-subcontainer'>
				<div className='ball-outer'>
					<div className='ball'></div>
				</div>
				<div className='outer'></div>
				<div className='black-hole'></div>
			</div>
		</div>
	);
}

export default Ball;
