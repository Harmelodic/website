import styled from 'styled-components';

export const Button = styled.button`
	display: ${props => props.visible ? 'inline-block' : 'none'};
	height: 40px;
	margin: 10px;
	background: ${props => props.theme.colors.transparent};
    border: none;
	padding: 0 15px;
	font-size: 0.8rem;
	color: ${props => props.theme.font.normalColor};
    text-transform: uppercase;
	transition: background 200ms, color 200ms;

    &:hover {
	    background: ${props => props.theme.colors.mainHover};
	}

	&:active {
	    background: ${props => props.theme.colors.mainActive};
	}
`;
