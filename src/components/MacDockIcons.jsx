import React, { useContext, useRef } from 'react';
import { MdMail, MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import '../css/macDockIcons.css';
import { scaleValue } from '../utils/scale';
import { Context } from '../context/ProjectsContext';

const PIXELS = 6;

function MacDockIcons() {
	const { state } = useContext(Context);

	const { theme } = state;

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
				<MdLocationPin
					className='icon'
					color={theme.text}
				/>
				<p className='icon-text'>
					Vilnius, Lithuania <span className='triangle'></span>
				</p>
			</div>

			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<BsFillTelephoneFill
					className='icon'
					color={theme.text}
				/>
				<p className='icon-text'>
					+370 610 00571 <span className='triangle'></span>
				</p>
			</div>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<MdMail
					className='icon'
					color={theme.text}
				/>
				<p className='icon-text more'>
					contact@remodal.lt <span className='triangle'></span>
				</p>
			</div>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<TfiFacebook
					className='icon'
					color={theme.text}
				/>
				<p className='icon-text more-less'>
					remodal. <span className='triangle'></span>
				</p>
			</div>
			<div
				className='icon-container'
				onMouseMove={handleIconHover}
			>
				<TfiLinkedin
					className='icon'
					color={theme.text}
				/>
				<p className='icon-text less'>
					Remodal <span className='triangle'></span>
				</p>
			</div>
		</div>
	);
}

export default MacDockIcons;
