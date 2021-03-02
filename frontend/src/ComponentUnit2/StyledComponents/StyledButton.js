import styled from 'styled-components';

const StyledButton = styled.button`
	border: none;
	border-radius: 5px;
	padding: 2% 3%;
	font-size: large;
	background-color: #333333;
	color: #ccc;
	&:hover {
		color: #333;
		background-color: #33333355;
		cursor: pointer;
	}
`;

export default StyledButton;
