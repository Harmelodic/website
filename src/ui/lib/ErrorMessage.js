import styled from 'styled-components';

export const ErrorMessage = styled.div`
	display: inline-block;
	margin-top: 10px;
	border: ${props => props.theme.colors.error} solid 1px;
	border-radius: 3px;
	padding: 5px 20px;
	font-size: 1rem;
    color: ${props => props.theme.colors.error};
	text-align: center;
`;
