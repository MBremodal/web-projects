import React, { useRef } from 'react';
import { MdMail, MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import '../css/macDockIcons.css';
import { scaleValue } from '../utils/scale';

const PIXELS = 6;

function MacDockIcons() {
	const dockRef = useRef(null);

	const handleIconHover = (event) => {
		if (!dockRef.current) return;

		const mousePos = event.clientY;
		const iconPosLeft = event.currentTarget.getBoundingClientRect().left;
		const iconPosTop = event.currentTarget.getBoundingClientRect().top;

		const iconWidth = event.currentTarget.getBoundingClientRect().width;

		const cursorDistance = (mousePos - iconPosTop) / iconWidth;

		const offsetPixels = scaleValue(
			cursorDistance,
			[0, 1],
			[PIXELS * -1, PIXELS]
		);

		dockRef.current.style.setProperty(
			'--dock-offset-left',
			`${offsetPixels * -1}px`
		);
		dockRef.current.style.setProperty(
			'--dock-offset-right',
			`${offsetPixels}px`
		);
	};

	return (
		<div
			className='icons-container'
			ref={dockRef}
		>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<MdLocationPin className='icon' />
				<p className='icon-text'>Vilnius, Lithuania</p>
			</div>

			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<BsFillTelephoneFill className='icon' />
				<p className='icon-text'>+374747278</p>
			</div>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<MdMail className='icon' />
				<p className='icon-text more'>contact@remodal.lt</p>
			</div>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<TfiFacebook className='icon' />
				<p className='icon-text more-less'>remodal.</p>
			</div>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<TfiLinkedin className='icon' />
				<p className='icon-text less'>Remodal</p>
			</div>
		</div>
	);
}

export default MacDockIcons;
