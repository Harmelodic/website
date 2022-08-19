import styled from 'styled-components';

export const ReadingSpace = styled.div`
	display: flex;
	width: 100%;
	min-height: ${props => props.height ? props.height : '40vh'};
	align-self: flex-end;
`;
