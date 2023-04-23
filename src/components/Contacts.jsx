import React, { useEffect, useState } from 'react';
import '../css/contacts.css';
import Form from './Form';
import Icon from './Icon';
import { MdMail, MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TfiFacebook, TfiLinkedin } from 'react-icons/tfi';
import Ball from './Ball';

function Contacts() {
	const icons = [
		{
			icon: (
				<MdLocationPin
					size={51}
					className='icon'
				/>
			),
			text: 'Vilnius, Lithuania',
		},
		{
			icon: (
				<BsFillTelephoneFill
					size={42}
					className='icon'
				/>
			),
			text: '+374747278',
		},
		{
			icon: (
				<MdMail
					size={52}
					className='icon'
				/>
			),
			text: 'contact@remodal.lt',
		},
		{
			icon: (
				<TfiFacebook
					size={50}
					className='icon'
				/>
			),
			text: 'remodal.',
		},
		{
			icon: (
				<TfiLinkedin
					size={42}
					className='icon'
				/>
			),
			text: 'Vilnius, Lithuania',
		},
	];

	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (success) {
			setTimeout(() => setSuccess(false), 10000);
		}
	}, [success]);

	const [hoveredIconObj, setObject] = useState({
		iconIndex: -1,
		hover: false,
	});

	const handleMouseIn = (index) => {
		setObject({ iconIndex: index, hover: true });
	};
	const handleMouseOut = () => {
		setObject({
			iconIndex: -1,
			hover: false,
		});
	};

	const handleForm = () => {
		setSuccess(true);
	};
	console.log('success ===', success);
	return (
		<div className='contacts-container'>
			<div className='contacts-subcontainer'>
				<h2>get in touch.</h2>
				<div className='contacts-content'>
					<Form
						success={success}
						setSuccess={setSuccess}
						callback={handleForm}
					/>
					<div className='icons-container'>
						{icons.map((icon, index) => (
							<Icon
								key={index}
								index={index}
								iconEl={icon.icon}
								text={icon.text}
								scaleIn={() => handleMouseIn(index)}
								iconObj={hoveredIconObj}
								scaleOut={handleMouseOut}
							/>
						))}
					</div>
				</div>
			</div>
			<Ball success={success} />
		</div>
	);
}

export default Contacts;
