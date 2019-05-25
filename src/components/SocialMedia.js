import React from "react";
import styled from "styled-components";

const StyledSocialMedia = styled.a`
    display: inline-block;
    margin: 10px 10px 0 10px;
    width: 60px;
    height: 60px;
    text-decoration: none;
    transition: 200ms background;

    &:hover {
        background: #f3f3f3;
    }
`

const StyledImage = styled.img`
    margin: 10px;
    width: 40px;
    height: 40px;
`

export default class SocialMedia extends React.Component {
    render() {
        return (
            <StyledSocialMedia href={this.props.href} target={this.props.href.includes("http") ? "_blank" : "_self"} rel="me">
                <StyledImage src={this.props.src}/>
            </StyledSocialMedia>
        )
    }
}