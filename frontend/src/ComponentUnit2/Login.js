import React, { useState } from 'react';
import Form from './Form/Form';

const Login = (props) => {
	const [showRegister, setShowRegister] = useState(false);

	const toggleShowRegister = () => {
		setShowRegister(!showRegister);
	};
	return (
		<div>
			<Form showRegister={showRegister} />
			<a href='#' onClick={toggleShowRegister}>
				{showRegister ? 'Back to login.' : "Don't have an account? Register."}
			</a>
			{/* <button onClick={toggleShowRegister}>register</button> */}
		</div>
	);
};

export default Login;
