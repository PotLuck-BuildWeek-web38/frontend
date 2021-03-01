import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: left;
	width: 50%;
	/* height: 30vh; */
	font-size: larger;
	margin-bottom: 15px;
	& input {
		font-size: large;
		width: 35%;
		height: 12%;
		margin-bottom: 20px;
	}
	& label {
		margin-bottom: 5px;
	}
`;

export default StyledForm;
