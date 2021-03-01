import React from 'react';
import StyledForm from '../StyledComponents/StyledForm';
import StyledButton from '../StyledComponents/StyledButton';

const Form = ({ showRegister }) => {
	return (
		<>
			<h1>{showRegister ? 'Register ' : 'Login '}Form</h1>
			<StyledForm>
				<label for='name'>Name</label>
				<input name='name' type='text' autoFocus />
				{showRegister && (
					<>
						<label for='email'>Email</label>
						<input name='email' type='email' />
					</>
				)}
				<label for='password'>Password</label>
				<input name='password' type='password' />
				{showRegister && (
					<>
						<label for='confirmEmail'>Confirm Password</label>
						<input name='confirmEmail' type='password' />
					</>
				)}
				<StyledButton>{showRegister ? 'Register' : 'Login'}</StyledButton>
			</StyledForm>
		</>
	);
};

export default Form;
