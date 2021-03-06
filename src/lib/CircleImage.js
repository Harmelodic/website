import styled from 'styled-components';

export const CircleImage = styled.div`
	display: flex;
	width: 180px;
	height: 180px;
	border-radius: 100%;
	border: solid 1px ${props => props.theme.img.border};
	background-color: ${props => props.theme.img.background};
	background-image: url('${props => props.src}');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	font-size: 20px;
`;
