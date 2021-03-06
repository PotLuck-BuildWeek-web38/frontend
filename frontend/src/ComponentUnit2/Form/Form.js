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
	disabled,
	registerFailed,
	loginFailed,
}) => {
	const onChange = ({ target: { name, value } }) => {
		handleChange(name, value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		showRegister ? handleRegisterSubmit() : handleLoginSubmit();
	};

	return (
		<>
			<h1>{showRegister ? 'Register ' : 'Login '}</h1>
			<StyledForm onSubmit={onSubmit}>
				<label htmlFor='name'>Name</label>
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
						<label htmlFor='email'>Email</label>
						<input
							name='email'
							type='email'
							onChange={onChange}
							value={registerFormValues.email}
						/>
						<StyledError>{registerErrors.email}</StyledError>
					</>
				)}
				<label htmlFor='password'>Password</label>
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
				{/* 	{showRegister && (
					<>
						<label htmlFor='confirmPassword'>Confirm Password</label>
						<input
							name='confirmPassword'
							type='password'
							onChange={onChange}
							value={registerFormValues.confirmPassword}
						/>
						<StyledError>{registerErrors.confirmPassword}</StyledError>
					</>
				)} */}
				<StyledError>{showRegister ? registerFailed : loginFailed}</StyledError>
				<StyledButton disabledStyle={disabled}>
					{showRegister ? 'Register' : 'Login'}
				</StyledButton>
			</StyledForm>
		</>
	);
};

export default Form;
