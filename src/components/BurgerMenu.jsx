import React, { useContext, useState } from 'react';
import '../css/burgerMenu.css';
import homeWhiteIcon from '../assets/icons/home-white.svg';
import contactsWhiteIcon from '../assets/icons/contacts-white.svg';
import portfolioWhiteIcon from '../assets/icons/portfolio-white.svg';
import { Context } from '../context/ProjectsContext';

function BurgerMenu() {
	const [burgerOpen, setBurgerOpen] = useState(false);

	const { state } = useContext(Context);

	const { theme } = state;

	const scrollToSection = (sectionId) => {
		const section = document.querySelector(`#${sectionId}`);
		if (sectionId === 'portfolio') {
			window.scrollTo({
				behavior: 'smooth',
				top: section.offsetTop - 200,
			});
		} else {
			window.scrollTo({
				behavior: 'smooth',
				top: section.offsetTop,
			});
		}
	};

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
				<button
					className='blob'
					style={{
						backgroundColor:
							theme.secondaryColor !== null ? theme.text : '#9C9C9C',
					}}
					onClick={() => scrollToSection('hero')}
				>
					<img
						src={homeWhiteIcon}
						alt='icon'
					/>
				</button>
				<button
					className='blob'
					style={{
						backgroundColor:
							theme.secondaryColor !== null ? theme.text : '#9C9C9C',
					}}
					onClick={() => scrollToSection('portfolio')}
				>
					<img
						src={portfolioWhiteIcon}
						alt='icon'
					/>
				</button>
				<button
					className='blob'
					style={{
						backgroundColor:
							theme.secondaryColor !== null ? theme.text : '#9C9C9C',
					}}
					onClick={() => scrollToSection('contacts')}
				>
					<img
						src={contactsWhiteIcon}
						alt='icon'
					/>
				</button>
				<label
					className='blob main-blob'
					style={{
						backgroundColor:
							theme.secondaryColor !== null ? theme.text : '#f0f0f0',
					}}
					htmlFor='checking'
				>
					<span
						className='bar'
						style={{
							backgroundColor:
								theme.secondaryColor !== null
									? theme.secondaryColor
									: '#c92d00',
						}}
					></span>
					<span
						className='bar'
						style={{
							backgroundColor:
								theme.secondaryColor !== null
									? theme.secondaryColor
									: '#c92d00',
						}}
					></span>
					<span
						className='bar'
						style={{
							backgroundColor:
								theme.secondaryColor !== null
									? theme.secondaryColor
									: '#c92d00',
						}}
					></span>
				</label>
				<svg
					style={{
						display: 'block',
						height: '50px',
						width: '50px',
					}}
				>
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
				<p
					style={{
						color: theme.secondaryColor !== null ? theme.text : '#f0f0f0',
					}}
				>
					web
				</p>
				<div className='word'>
					<p
						style={{
							color: theme.secondaryColor !== null ? theme.text : '#f0f0f0',
						}}
					>
						pr
					</p>
					<span
						className='letter slide-in-right-letter'
						style={{
							borderColor:
								theme.secondaryColor !== null ? theme.text : '#f0f0f0',
						}}
					></span>
					<p
						style={{
							color: theme.secondaryColor !== null ? theme.text : '#f0f0f0',
						}}
					>
						jects
					</p>
				</div>
			</div>
		</div>
	);
}

export default BurgerMenu;
