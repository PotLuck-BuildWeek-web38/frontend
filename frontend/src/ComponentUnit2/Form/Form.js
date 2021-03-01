import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 10px auto;
	align-items: center;
	width: 50%;
`;

const Form = ({ showRegister }) => {
	return (
		<div>
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
			</StyledForm>
		</div>
	);
};

export default Form;
