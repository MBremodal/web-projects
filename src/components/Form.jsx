import React, { useEffect, useState } from 'react';
import FormButton from './FormButton';

function Form({ success, setSuccess, callback }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	// const handleForm = () => {
	// 	// const inputs = document.querySelectorAll('.input');
	// 	// const formData = {};
	// 	// for (const input of inputs) {
	// 	// 	formData[input.name] = input.value;
	// 	// }

	// 	// if (!name && !email && !phone) return;

	// 	setSuccess(true);
	// };
	return (
		<div className='form-container'>
			<form className='contacts-form'>
				<input
					className='input'
					type='text'
					id='name'
					name='name'
					placeholder='name'
					autoComplete='off'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className='input'
					type='email'
					id='email'
					name='email'
					placeholder='e-mail address'
					autoComplete='off'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='input'
					type='tel'
					id='phone'
					name='phone'
					placeholder='phone number ex: +3706*******'
					pattern='[+][0-9]{11}'
					required
					autoComplete='off'
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
				<textarea
					className='input'
					name='message'
					id='message'
					placeholder='your message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</form>
			<FormButton
				callback={callback}
				success={success}
				setSuccess={setSuccess}
			/>
		</div>
	);
}

export default Form;
