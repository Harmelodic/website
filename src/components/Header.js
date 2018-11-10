import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    height: 300px;
    background: #000;
`

const StyledLogo = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
    height: 300px;
    width: 300px;
    user-select: none;
`

const RainbowBar = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    height: 9px;
    background: black; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, red, orange, yellow, green, cyan, blue, indigo, violet, red); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(right, red, orange, yellow, green, cyan, blue, indigo, violet, red); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(right, red, orange, yellow, green, cyan, blue, indigo, violet, red); /* For Firefox 3.6 to 15 */
    background: linear-gradient(to right, red, orange, yellow, green, cyan, blue, indigo, violet, red); /* Standard syntax (must be last) */
`

export default class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <RainbowBar />
                <StyledLogo src="/images/logo.svg" />
            </StyledHeader>
        )
    }
}