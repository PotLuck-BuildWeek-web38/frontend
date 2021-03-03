import styled from 'styled-components';

const StyledButton = styled.button`
	border: none;
	min-width: 80px;
	min-height: 45px;
	border-radius: 5px;
	padding: 2% 3%;
	font-size: large;
	background-color: ${(props) =>
		props.disabledStyle
			? props.theme.primaryColorDisabled
			: props.theme.primaryColor};
	color: ${(props) => props.theme.navColor};
	&:hover {
		color: ${(props) =>
			props.disabledStyle ? props.theme.navColor : props.theme.navColorHover};
		background-color: ${(props) =>
			props.disabledStyle
				? props.theme.primaryColorDisabled
				: props.theme.primaryColorHover};
		cursor: pointer;
	}
`;

export default StyledButton;
