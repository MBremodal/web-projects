import React from 'react';
import '../scss/contacts.scss';
import Form from './Form';

function Contacts() {
	return (
		<div className='contacts-container'>
			<h2>get in touch.</h2>
			<div>
				<Form />
			</div>
		</div>
	);
}

export default Contacts;
