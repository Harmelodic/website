import styled from 'styled-components';

const InfoBox = styled.div`
    display: flex;
    max-width: 1000px;
    border-top: solid 1px #333;
	padding: 30px 0;
	font-size: 18px;
	line-height: 32px;
	color: #000;
  	text-align: center;
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
