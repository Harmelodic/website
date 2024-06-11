import styled from 'styled-components';

const InfoBox = styled.div`
    display: flex;
    margin: 0 10px;
	padding: 30px 15px;
	color: ${props => props.theme.font.normalColor};
  	text-align: center;
    overflow-wrap: break-word;
    white-space: pre-wrap;
`;

export const ColumnInfoBox = styled(InfoBox)`
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
`;

export const RowInfoBox = styled(InfoBox)`
	flex-flow: row wrap;
	justify-content: center;
	align-items: flex-start;
`;
