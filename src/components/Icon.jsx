import React from 'react';

function Icon({ iconEl, text, scaleIn, scaleOut, iconObj, index }) {
	const { iconIndex, hover } = iconObj;

	const checkNearbyIndex = () => {
		if (iconIndex === -1) return;
		const mostDistantTop = iconIndex - 2;
		const mostDistantBot = iconIndex + 2;
		const topIcon = iconIndex - 1;
		const bottomIcon = iconIndex + 1;
		return {
			topIconIndex: topIcon,
			botIconIndex: bottomIcon,
			mostDistantTop,
			mostDistantBot,
		};
	};

	const topAndBot = checkNearbyIndex();

	return (
		<div
			className={`icon-content ${hover && iconIndex === index ? 'onEnter' : ''} 
			${hover && topAndBot.topIconIndex === index ? 'nearby-icon-top' : ''}
			${hover && topAndBot.botIconIndex === index ? 'nearby-icon-bottom' : ''}
			${hover && topAndBot.mostDistantTop === index ? 'most-distant-top' : ''}
			${hover && topAndBot.mostDistantBot === index ? 'most-distant-bottom' : ''}
			
			`}
			onMouseEnter={scaleIn}
			onMouseLeave={scaleOut}
			style={{
				transition: '0.6s all ease-in-out',
			}}
		>
			{iconEl}
			<div className='icon-text'>
				<p>{text}</p>
				<div className='triangle'></div>
			</div>
		</div>
	);
}

export default Icon;
