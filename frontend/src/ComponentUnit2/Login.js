import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Form from './Form/Form';
import StyledContainer from './StyledComponents/StyledContainer';
import StyledLink from './StyledComponents/StyledLink';

import loginSchema from './validation/loginSchema';
import registerSchema from './validation/registerSchema';
import { useHistory } from 'react-router-dom';

const initialLoginFormState = {
	name: '',
	password: '',
};
const initialRegisterFormState = {
	name: '',
	email: '',
	password: '',
	// confirmPassword: '',
};

const initialLoginErrors = {
	name: '',
	password: '',
};
const initialRegisterErrors = {
	name: '',
	email: '',
	password: '',
	// confirmPassword: '',
};

const initialDisabled = true;

const Login = (props) => {
	const [showRegister, setShowRegister] = useState(false);
	const [registerFormValues, setRegisterFormValues] = useState(
		initialRegisterFormState
	);
	const [loginFormValues, setLoginFormValues] = useState(initialLoginFormState);
	const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
	const [loginFailed, setLoginFailed] = useState('');
	const [registerFailed, setRegisterFailed] = useState('');
	const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const history = useHistory();
	const handleLoginSubmit = () => {
		axios
			.post(
				'https://potluck-tt11.herokuapp.com/login',
				`grant_type=password&username=${loginFormValues.name}&password=${loginFormValues.password}`,
				{
					headers: {
						Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.then((res) => {
				localStorage.setItem('token', res.data.access_token);
				history.push('/myevents');
			})
			.catch(() =>
				setLoginFailed(
					'The name or password you entered is not correct. Please double-check and try again.'
				)
			);
	};
	const handleRegisterSubmit = () => {
		const newUser = {
			username: registerFormValues.name,
			password: registerFormValues.password,
			primaryemail: registerFormValues.email,
		};
		axios
			.post('https://potluck-tt11.herokuapp.com/createnewuser', newUser)
			.then((res) => {
				localStorage.setItem('access_token', res.data.access_token);
				localStorage.setItem('token_type', res.data.token_type);
				localStorage.setItem('scope', res.data.scope);
				history.push('/search');
			})
			.catch(() =>
				setRegisterFailed(
					'Registration failed. Please double-check your information and try again.'
				)
			);
	};
	const handleChange = (name, value) => {
		const schema = showRegister ? registerSchema : loginSchema;
		const formErrors = showRegister ? registerErrors : loginErrors;
		const setErrors = showRegister ? setRegisterErrors : setLoginErrors;
		const formValues = showRegister ? registerFormValues : loginFormValues;
		const setFormValues = showRegister
			? setRegisterFormValues
			: setLoginFormValues;

		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
				setErrors({ ...formErrors, [name]: '' });
			})
			.catch((err) => {
				setErrors({ ...formErrors, [name]: err.errors });
			});
		setFormValues({ ...formValues, [name]: value });
	};

	const toggleShowRegister = () => {
		setShowRegister(!showRegister);
	};

	useEffect(() => {
		const schema = showRegister ? registerSchema : loginSchema;
		const formValues = showRegister ? registerFormValues : loginFormValues;

		schema.isValid(formValues).then((valid) => setDisabled(!valid));
	}, [loginFormValues, registerFormValues, showRegister]);
	return (
		<StyledContainer>
			<Form
				showRegister={showRegister}
				handleLoginSubmit={handleLoginSubmit}
				handleRegisterSubmit={handleRegisterSubmit}
				loginFormValues={loginFormValues}
				registerFormValues={registerFormValues}
				handleChange={handleChange}
				loginErrors={loginErrors}
				registerErrors={registerErrors}
				disabled={disabled}
				loginFailed={loginFailed}
				registerFailed={registerFailed}
			/>
			<StyledLink href='#' onClick={toggleShowRegister}>
				{showRegister ? 'Back to login.' : "Don't have an account? Register."}
			</StyledLink>
		</StyledContainer>
	);
};

export default Login;
