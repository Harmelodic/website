import styled from 'styled-components';

const InfoBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    border-radius: 5px;
    margin-top: 35px;
	padding: 20px;
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
