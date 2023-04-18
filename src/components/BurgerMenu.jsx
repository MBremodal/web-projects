import React, { useEffect, useState } from 'react';
import '../scss/burgerMenu.scss';
import homeIcon from '../assets/icons/home.svg';
import contactsIcon from '../assets/icons/contacts.svg';
import portfolioIcon from '../assets/icons/portfolio.svg';
import homeWhiteIcon from '../assets/icons/home-white.svg';
import contactsWhiteIcon from '../assets/icons/contacts-white.svg';
import portfolioWhiteIcon from '../assets/icons/portfolio-white.svg';

function BurgerMenu() {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const [letter, setLetter] = useState(false);

	return (
		<div className='burger-menu-container slide-in-right'>
			<div className='wrap'>
				<input
					type='checkbox'
					id='checking'
					style={{
						display: 'none',
					}}
					onChange={() => setBurgerOpen(!burgerOpen)}
				/>
				<button className='blob'>
					<img
						src={homeWhiteIcon}
						alt='icon'
					/>
				</button>
				<button className='blob'>
					<img
						src={portfolioWhiteIcon}
						alt='icon'
					/>
				</button>
				<button className='blob'>
					<img
						src={contactsWhiteIcon}
						alt='icon'
					/>
				</button>
				<label
					className='blob main-blob'
					htmlFor='checking'
				>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</label>
				<svg>
					<defs>
						<filter id='filt'>
							<feGaussianBlur
								in='SourceGraphic'
								result='blur'
								stdDeviation='10'
							/>
							<feColorMatrix
								in='blur'
								mode='matrix'
								values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
								result='filt'
							/>
							<feBlend
								in2='filt'
								in='SourceGraphic'
								result='mix'
							/>
						</filter>
					</defs>
				</svg>
			</div>
			<div
				className={`title-wrapper ${
					burgerOpen ? 'wrapper-hide' : 'wrapper-show'
				}`}
			>
				<p>web</p>
				<div className='word'>
					<p>pr</p>
					<span className='letter slide-in-right-letter'></span>

					<p>jects</p>
				</div>
			</div>
		</div>
	);
}

export default BurgerMenu;
