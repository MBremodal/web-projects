import React from 'react';

function Form() {
	return (
		<div className='form-container'>
			<form className='contacts-form'>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='name'
					autoComplete='off'
				/>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='e-mail address'
					autoComplete='off'
				/>
				<input
					type='text'
					id='phone'
					name='phone'
					placeholder='phone number ex: +3706*******'
					pattern='[+][0-9]{11}'
					required
					autoComplete='off'
				/>
				<textarea
					name='message'
					id='message'
					placeholder='your message...'
				></textarea>
			</form>
			<button>send</button>
		</div>
	);
}

export default Form;
