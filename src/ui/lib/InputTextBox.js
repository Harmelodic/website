import styled from 'styled-components';

export const InputTextBox = styled.input`
	display: inline-block;
	max-width: 200px;
	height: 38px;
	margin: 10px;
    background: ${props => props.theme.colors.transparent};
	border: solid 1px ${props => props.theme.colors.softBorder};
	border-radius: 5px;
	padding: 0 15px;
	color: ${props => props.theme.font.normalColor};
	transition: border 200ms;

	&::placeholder {
		color: ${props => props.theme.font.placeholderColor};
		transition: color 200ms;
	}

  	&:hover {
	    border: solid 1px ${props => props.theme.colors.hardBorder};
	}

	&:focus {
		border: solid 1px ${props => props.theme.colors.hardBorder};
	}

	&:focus::placeholder {
		color: ${props => props.theme.transparent};
	}
`;
