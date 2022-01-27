import styled from 'styled-components';

export const InputTextBox = styled.input`
	display: inline-block;
	max-width: 200px;
	height: 38px;
	margin: 10px;
	border: solid 1px ${props => props.theme.input.border};
	border-radius: 5px;
	padding: 0 15px;
	font-size: 18px;
	color: ${props => props.theme.input.color};
	transition: border 200ms;

	&::placeholder {
		color: ${props => props.theme.input.placeholderColor};
		transition: color 200ms;
	}

	&:focus {
		outline: none;
		border: solid 1px ${props => props.theme.input.focus.border};
	}

	&:focus::placeholder {
		color: ${props => props.theme.input.focus.placeholderColor};
	}
`;
