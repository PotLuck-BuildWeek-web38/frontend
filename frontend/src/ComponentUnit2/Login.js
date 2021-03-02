import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Form from './Form/Form';
import StyledContainer from './StyledComponents/StyledContainer';

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
	confirmPassword: '',
};

const initialLoginErrors = {
	name: '',
	password: '',
};
const initialRegisterErrors = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const initialDisabled = true;

const Login = (props) => {
	const [showRegister, setShowRegister] = useState(false);
	const [registerFormValues, setRegisterFormValues] = useState(
		initialRegisterFormState
	);
	const [loginFormValues, setLoginFormValues] = useState(initialLoginFormState);
	const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
	const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const history = useHistory();
	const handleLoginSubmit = () => {
		console.log('login submit logic');
		// const newLogin = {
		// 	username: loginFormValues.name,
		// 	password: loginFormValues.password,
		// };
		axios
			.post(
				'https://tt11-potluckplanner.herokuapp.com/login',
				`grant_type=password&username=${loginFormValues.name}&password=${loginFormValues.password}`,
				{
					headers: {
						Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem('token', res.data.access_token);
				history.push('/potluck');
			})
			.catch((err) => console.log(err));
	};
	const handleRegisterSubmit = () => {
		console.log('register submit logic');
	};
	const handleChange = (name, value) => {
		if (showRegister) {
			yup
				.reach(registerSchema, name)
				.validate(value)
				.then(() => {
					setRegisterErrors({ ...registerErrors, [name]: '' });
				})
				.catch((err) => {
					setRegisterErrors({ ...registerErrors, [name]: err.errors });
				});
			setRegisterFormValues({ ...registerFormValues, [name]: value });
		} else {
			yup
				.reach(loginSchema, name)
				.validate(value)
				.then(() => {
					setLoginErrors({ ...loginErrors, [name]: '' });
				})
				.catch((err) => {
					setLoginErrors({ ...loginErrors, [name]: err.errors });
				});
			setLoginFormValues({ ...loginFormValues, [name]: value });
		}
	};

	const toggleShowRegister = () => {
		setShowRegister(!showRegister);
	};
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
			/>
			<a href='#' onClick={toggleShowRegister}>
				{showRegister ? 'Back to login.' : "Don't have an account? Register."}
			</a>
		</StyledContainer>
	);
};

export default Login;
