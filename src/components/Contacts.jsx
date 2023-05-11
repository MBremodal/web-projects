import React, { useEffect, useState } from 'react';
import '../css/contacts.css';
import Form from './Form';
import Ball from './Ball';
import MacDockIcons from './MacDockIcons';

function Contacts() {
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (success) {
			setTimeout(() => setSuccess(false), 10000);
		}
	}, [success]);

	return (
		<div
			className='contacts-container'
			id='contacts'
		>
			<div className='contacts-subcontainer'>
				<h2>get in touch.</h2>
				<div className='contacts-content'>
					<Form
						success={success}
						setSuccess={setSuccess}
					/>
					<MacDockIcons />
				</div>
			</div>
			<Ball success={success} />
		</div>
	);
}

export default Contacts;
