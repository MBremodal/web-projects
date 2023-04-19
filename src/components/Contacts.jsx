import React from 'react';
import '../scss/contacts.scss';
import Form from './Form';
import locationIcon from '../assets/icons/location.svg';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

function Contacts() {
	return (
		<div className='contacts-container'>
			<div className='contacts-subcontainer'>
				<h2>get in touch.</h2>
				<div className='contacts-content'>
					<Form />
					<div className='icons-container'>
						<img
							src={locationIcon}
							alt='icon'
							id='location'
						/>
						<img
							src={phoneIcon}
							alt='icon'
							id='phone'
						/>
						<img
							src={mailIcon}
							alt='icon'
							id='mail'
						/>
						<img
							src={facebookIcon}
							alt='icon'
							id='facebook'
						/>
						<img
							src={linkedinIcon}
							alt='icon'
							id='linkedin'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
