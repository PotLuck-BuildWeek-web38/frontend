import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: left;
	width: 50%;
	font-size: larger;
	margin-bottom: 15px;
	& input {
		font-size: large;
		border-radius: 5px;
		padding-left: 1.5%;
		width: 35%;
		min-width: 220px;
		height: 12%;
		margin-bottom: 20px;
	}
	& label {
		margin-bottom: 5px;
	}
`;

export default StyledForm;
