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
				<input type='text' autoFocus />
				{showRegister && (
					<label>
						Email
						<input type='email' />
					</label>
				)}
				<input type='password' />
			</StyledForm>
		</div>
	);
};

export default Form;
