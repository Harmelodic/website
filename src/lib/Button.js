import styled from 'styled-components';

export const Button = styled.button`
	display: ${props => props.visible ? 'inline-block' : 'none'};
	height: 40px;
	margin: 10px;
	background: ${props => props.theme.button.background};
	border: solid 1px ${props => props.theme.button.border};
	border-radius: 5px;
	padding: 0 15px;
	font-size: 18px;
	color: ${props => props.theme.button.color};
	transition: border 200ms, color 200ms;

	&:focus {
		outline: none;
	}

	&:active {
		color: ${props => props.theme.button.activeColor};
		border: solid 1px ${props => props.theme.button.activeBorder};
	}
`;
