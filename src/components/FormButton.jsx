import React, { useEffect } from 'react';
import '../scss/formButton.scss';
import { useState, useRef } from 'react';
import gsap from 'gsap';

function initButton(elem) {
	const $container = elem.querySelector('.button-container');
	const $circleLeft = elem.querySelector('.circle.left');
	const $circleRight = elem.querySelector('.circle.right');

	const tlLeft = gsap.timeline();
	const tlRight = gsap.timeline();
	const tlButton = gsap.timeline({ paused: true });

	tlLeft.to($circleLeft, {
		duration: 2.5,
		x: -30,
		ease: 'slow(0.1, 0.7, false)',
	});
	tlLeft.to($circleLeft, { duration: 0.1, x: '-=2' });
	tlLeft.to($circleLeft, { duration: 1.0, x: '-=20', scale: 0.4 });
	tlLeft.to($circleLeft, { duration: 0.5, opacity: 0 }, '-=0.5');

	tlRight.to($circleRight, {
		duration: 2.5,
		x: 30,
		ease: 'slow(0.1, 0.7, false)',
	});
	tlRight.to($circleRight, { duration: 0.1, x: '+=2' });
	tlRight.to($circleRight, { duration: 1.0, x: '+=20', scale: 0.4 });
	tlRight.to($circleRight, { duration: 0.5, opacity: 0 }, '-=0.5');

	tlButton.add(tlLeft, 0);
	tlButton.add(tlRight, 0);
	tlButton.timeScale(3);

	elem.addEventListener('click', function () {
		$container.style.filter = 'url(#filter-gooey)';
		tlButton.restart();
	});
}

function FormButton() {
	const buttonRef = useRef(null);

	useEffect(() => {
		initButton(buttonRef.current);
	}, []);
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				className='svg-filters'
			>
				<defs>
					<filter id='filter-gooey'>
						<feGaussianBlur
							in='SourceGraphic'
							stdDeviation='7'
							result='blur'
						></feGaussianBlur>
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
							result='gooey'
						></feColorMatrix>
						<feComposite
							in='SourceGraphic'
							in2='gooey'
						></feComposite>
					</filter>
				</defs>
			</svg>
			<button
				className='button'
				ref={buttonRef}
			>
				<div className='button-container'>
					<div className='button-bg'></div>
					<div className='circle left'></div>
					<div className='circle right'></div>
				</div>
				send
			</button>
		</>
	);
}

export default FormButton;
