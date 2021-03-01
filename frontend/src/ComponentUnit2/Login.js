import React, { useState } from 'react';
import Form from './Form/Form';
import StyledContainer from './StyledComponents/StyledContainer';

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

const Login = (props) => {
	const [showRegister, setShowRegister] = useState(false);
	const [registerFormValues, setRegisterFormValues] = useState(
		initialRegisterFormState
	);
	const [loginFormValues, setLoginFormValues] = useState(initialLoginFormState);

	const handleLoginSubmit = () => {};
	const handleRegisterSubmit = () => {};
	const handleChange = (name, value) => {
		if (showRegister) {
			setRegisterFormValues({ ...registerFormValues, [name]: value });
		} else {
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
			/>
			<a href='#' onClick={toggleShowRegister}>
				{showRegister ? 'Back to login.' : "Don't have an account? Register."}
			</a>
		</StyledContainer>
	);
};

export default Login;
