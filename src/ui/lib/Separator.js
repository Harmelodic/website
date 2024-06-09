import styled from 'styled-components';

export const Separator = styled.div`
    border-top: solid 1px ${props => props.theme.colors.softBorder};
    height: 0;
    width: ${props => props.width ? props.width : '250px'};
    max-width: 100%;
`;