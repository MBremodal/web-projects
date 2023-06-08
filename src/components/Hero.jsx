import React, { useContext } from 'react';
import '../css/hero.css';
import { Context } from '../context/ProjectsContext';

function Hero() {
	const { state } = useContext(Context);

	const { theme } = state;

	return (
		<>
			<div
				className='hero-section-tablet'
				id='hero'
			>
				<h1
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					web, soft and
				</h1>
				<h2
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					app design,
				</h2>
				<h3
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					development,
				</h3>
				<h4
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					hosting,
				</h4>
				<h5
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					maintenance
				</h5>
				<h6
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					& graphic
				</h6>
				<p
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					design affairs.
				</p>
			</div>

			<div
				className='hero-section-desctop'
				id='hero'
			>
				<h1
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					web, soft and app
				</h1>
				<h2
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					{' '}
					design, development,
				</h2>
				<h3
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					hosting, maintenance &
				</h3>
				<h4
					className='text reveal-text'
					style={{
						color: theme.text,
					}}
				>
					graphic design affairs.
				</h4>
			</div>
		</>
	);
}

export default Hero;
