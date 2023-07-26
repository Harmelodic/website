import styled from 'styled-components';

export const Hyperlink = styled.a`
    color: ${props => props.theme.font.linkColor};
    
    &:active {
        color: ${props => props.theme.font.linkActiveColor};
    }
    
    &:visited {
        color: ${props => props.theme.font.linkVisitedColor};
    }
`;
