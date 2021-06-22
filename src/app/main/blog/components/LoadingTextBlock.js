import styled from 'styled-components';

export const LoadingTextBlock = styled.div`
    height: ${props => props.height ? props.height : '13'}px;
    width: ${props => props.width}px;
    border-radius: ${props => props.height ? props.height : '13'}px;
    background: ${props => props.color ? props.color : '#ccc'};
    margin: ${props => props.margin ? props.margin : '5'}px;
`;
