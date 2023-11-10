import styled from 'styled-components';

export const SelectBox = styled.select`
	appearance: none;

    // Drop-down arrow
    background: ${props => props.theme.colors.transparent};
	background-image:
		linear-gradient(45deg, transparent 50%, ${props => props.theme.font.normalColor} 50%),
		linear-gradient(135deg, ${props => props.theme.font.normalColor} 50%, transparent 50%);
	background-position:
		calc(100% - 17px) calc(1em - 1px),
		calc(100% - 12px) calc(1em - 1px);
	background-size:
		5px 5px,
		5px 5px;
	background-repeat: no-repeat;
	
	height: 40px;
	margin: 10px;
	border: solid 1px ${props => props.theme.colors.softBorder};
	border-radius: 5px;
	padding: 0 35px 0 15px;
	font-size: 1rem;
	color: ${props => props.theme.font.normalColor};
	transition: border 200ms;

	&::placeholder {
		color: ${props => props.theme.font.placeholderColor};
		transition: color 200ms;
	}

	&:focus {
		border: solid 1px ${props => props.theme.colors.hardBorder};
	}

	&:hover {
		border: solid 1px ${props => props.theme.colors.hardBorder};
	}

	&:focus::placeholder {
		color: ${props => props.theme.font.placeholderColor};
	}
`;
