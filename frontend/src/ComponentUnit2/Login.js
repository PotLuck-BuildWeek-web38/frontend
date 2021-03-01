import React, { useState } from 'react';
import Form from './Form/Form';
import StyledContainer from './StyledComponents/StyledContainer';

const Login = (props) => {
	const [showRegister, setShowRegister] = useState(false);

	const toggleShowRegister = () => {
		setShowRegister(!showRegister);
	};
	return (
		<StyledContainer>
			<Form showRegister={showRegister} />
			<a href='#' onClick={toggleShowRegister}>
				{showRegister ? 'Back to login.' : "Don't have an account? Register."}
			</a>
		</StyledContainer>
	);
};

export default Login;
