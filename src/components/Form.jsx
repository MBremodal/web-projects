import React, { useContext, useRef, useState } from 'react';
import FormButton from './FormButton';
import emailjs from '@emailjs/browser';
import { Context } from '../context/ProjectsContext';

function Form({ success, setSuccess }) {
	const { state } = useContext(Context);

	const { theme } = state;

	const formRef = useRef();

	const [name, setName] = useState({ error: false, value: '' });
	const [email, setEmail] = useState({ error: false, value: '' });
	const [phone, setPhone] = useState({ error: false, value: '' });
	const [message, setMessage] = useState({ error: false, value: '' });

	const resetValues = () => {
		setName({ error: false, value: '' });
		setEmail({ error: false, value: '' });
		setPhone({ error: false, value: '' });
		setMessage({ error: false, value: '' });
	};

	const handleInput = (state, stateSetter) => {
		if (state.value.length < 3 || state.value.length > 250) {
			stateSetter({ ...state, error: true });
			return false;
		} else {
			return true;
		}
	};

	const handleForm = () => {
		const nameValid = handleInput(name, setName);
		const emailValid = handleInput(email, setEmail);
		const phoneValid = handleInput(phone, setPhone);
		const messageValid = handleInput(message, setMessage);

		if (nameValid && emailValid && phoneValid && messageValid) {
			emailjs
				.sendForm(
					'service_u8qrnpb',
					'template_pu0pj3s',
					formRef.current,
					'87rR3tuwUnFE8tJIf'
				)
				.then(
					(result) => {
						setSuccess(true);
						resetValues();
					},
					(error) => {
						console.log('Error', error);
					}
				);
		}
	};
	return (
		<div className='form-container'>
			<form
				className='contacts-form'
				ref={formRef}
			>
				<input
					className={`input ${name.error ? 'error' : ''} ${
						theme.secondaryColor !== null ? 'placeholder-color' : ''
					}`}
					type='text'
					id='name'
					name='from_name'
					placeholder='name'
					autoComplete='off'
					value={name.value}
					onChange={(e) => setName({ error: false, value: e.target.value })}
					style={{
						borderColor: theme.text,
					}}
				/>
				<input
					className={`input ${email.error ? 'error' : ''} ${
						theme.secondaryColor !== null ? 'placeholder-color' : ''
					}`}
					type='email'
					id='email'
					name='from_email'
					placeholder='e-mail address'
					autoComplete='off'
					value={email.value}
					onChange={(e) => setEmail({ error: false, value: e.target.value })}
					style={{
						borderColor: theme.text,
					}}
				/>
				<input
					className={`input ${phone.error ? 'error' : ''} ${
						theme.secondaryColor !== null ? 'placeholder-color' : ''
					}`}
					type='tel'
					id='phone'
					name='from_phone'
					placeholder='+370 6** *****'
					pattern='[+][0-9]{11}'
					required
					autoComplete='off'
					value={phone.value}
					onChange={(e) => setPhone({ error: false, value: e.target.value })}
					style={{
						borderColor: theme.text,
					}}
				/>
				<textarea
					className={`input ${message.error ? 'error' : ''}  ${
						theme.secondaryColor !== null ? 'placeholder-color' : ''
					}`}
					name='from_message'
					id='message'
					placeholder='your message...'
					value={message.value}
					onChange={(e) => setMessage({ error: false, value: e.target.value })}
					style={{
						borderColor: theme.text,
					}}
				></textarea>
			</form>
			<FormButton
				callback={handleForm}
				success={success}
				setSuccess={setSuccess}
			/>
		</div>
	);
}

export default Form;
