import styled from 'styled-components';

export const SelectBox = styled.select`
	appearance: none;

	background-image:
		linear-gradient(45deg, transparent 50%, ${props => props.theme.input.icon} 50%),
		linear-gradient(135deg, ${props => props.theme.input.icon} 50%, transparent 50%);
	background-position:
		calc(100% - 17px) calc(1em - 1px),
		calc(100% - 12px) calc(1em - 1px);
	background-size:
		5px 5px,
		5px 5px;
	background-repeat: no-repeat;
	
	height: 40px;
	margin: 10px;
	border: solid 1px ${props => props.theme.input.border};
	border-radius: 5px;
	padding: 0 35px 0 15px;
	font-size: 18px;
	color: ${props => props.theme.text.normal};
	transition: border 200ms;

	&::placeholder {
		color: ${props => props.theme.text.placeholder};
		transition: color 200ms;
	}

	&:focus {
		outline: none;
		border: solid 1px ${props => props.theme.input.focus.border};
	}

	&:hover {
		border: solid 1px ${props => props.theme.input.focus.border};
	}

	&:focus::placeholder {
		color: ${props => props.theme.input.focus.placeholderColor};
	}
`;
