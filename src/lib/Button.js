import styled from 'styled-components';

export const Button = styled.button`
	display: ${props => props.visible ? 'inline-block' : 'none'};
	height: 40px;
	margin: 10px;
	background: ${props => props.theme.button.cancel.background};
    border: none;
	padding: 0 15px;
	font-size: 18px;
	color: ${props => props.theme.text.normal};
	transition: background 200ms, color 200ms;

    &:hover {
	    background: ${props => props.theme.button.cancel.hover.background};
	}

	&:active {
	    background: ${props => props.theme.button.cancel.active.background};
	}
`;
