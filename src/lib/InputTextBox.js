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
	color: ${props => props.theme.text.normal};
	transition: border 200ms;

	&::placeholder {
		color: ${props => props.theme.text.placeholder};
		transition: color 200ms;
	}

  	&:hover {
	    border: solid 1px ${props => props.theme.input.hover.border};
	}

	&:focus {
		border: solid 1px ${props => props.theme.input.focus.border};
	}

	&:focus::placeholder {
		color: ${props => props.theme.transparent};
	}
`;
