import styled from 'styled-components';

const InfoBox = styled.div`
    display: flex;
    max-width: 1000px;
    border-top: solid 1px ${props => props.theme.separator};
    margin: 0 10px;
	padding: 30px 15px;
	font-size: 1rem;
	line-height: 32px;
	color: ${props => props.theme.text.normal};
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
