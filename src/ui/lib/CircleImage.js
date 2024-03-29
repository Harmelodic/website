import styled from 'styled-components';

export const CircleImage = styled.div`
	display: flex;
	min-width: 180px;
	min-height: 180px;
	border-radius: 100%;
	border: solid 1px ${props => props.theme.colors.hardBorder};
	background-color: ${props => props.theme.colors.mainBackground};
	background-image: url('${props => props.src}');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	font-size: 1.2rem;
`;
