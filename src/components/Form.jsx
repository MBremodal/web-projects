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
				/>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='e-mail address'
				/>
				<input
					type='tel'
					id='phone'
					name='phone'
					placeholder='phone number ex: +3706*******'
					pattern='[+][0-9]{11}'
					required
				/>
				<textarea
					name='message'
					id='message'
					cols='30'
					rows='10'
					placeholder='your message...'
				></textarea>
			</form>
		</div>
	);
}

export default Form;
