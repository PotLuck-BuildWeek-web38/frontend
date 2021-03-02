import React from 'react';
import StyledForm from '../StyledComponents/StyledForm';
import StyledButton from '../StyledComponents/StyledButton';
import StyledError from '../StyledComponents/StyledError';

const Form = ({
	showRegister,
	handleLoginSubmit,
	handleRegisterSubmit,
	loginFormValues,
	registerFormValues,
	handleChange,
	loginErrors,
	registerErrors,
}) => {
	const onChange = (e) => {
		const { name, value } = e.target;

		handleChange(name, value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (showRegister) handleRegisterSubmit();
		else handleLoginSubmit();
	};

	return (
		<>
			<h1>{showRegister ? 'Register ' : 'Login '}Form</h1>
			<StyledForm onSubmit={onSubmit}>
				<label for='name'>Name</label>
				<input
					name='name'
					type='text'
					autoFocus
					onChange={onChange}
					value={showRegister ? registerFormValues.name : loginFormValues.name}
				/>
				<StyledError>
					{showRegister ? registerErrors.name : loginErrors.name}
				</StyledError>
				{/* Optionally show register fields */}
				{showRegister && (
					<>
						<label for='email'>Email</label>
						<input
							name='email'
							type='email'
							onChange={onChange}
							value={registerFormValues.email}
						/>
						<StyledError>{registerErrors.email}</StyledError>
					</>
				)}
				<label for='password'>Password</label>
				<input
					name='password'
					type='password'
					onChange={onChange}
					value={
						showRegister
							? registerFormValues.password
							: loginFormValues.password
					}
				/>
				<StyledError>
					{showRegister ? registerErrors.password : loginErrors.password}
				</StyledError>
				{/* Optionally show register fields */}
				{showRegister && (
					<>
						<label for='confirmPassword'>Confirm Password</label>
						<input
							name='confirmPassword'
							type='password'
							onChange={onChange}
							value={registerFormValues.confirmPassword}
						/>
						<StyledError>{registerErrors.confirmPassword}</StyledError>
					</>
				)}
				<StyledButton>{showRegister ? 'Register' : 'Login'}</StyledButton>
			</StyledForm>
		</>
	);
};

export default Form;
