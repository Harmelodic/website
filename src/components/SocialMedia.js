import React from "react";
import styled from "styled-components";

const StyledSocialMedia = styled.a`
    display: inline-block;
    margin: 10px 10px 0 10px;
    width: 60px;
    height: 60px;
    text-decoration: none;
    transition: 200ms background;

    background: #f6f6f6;
    &:hover {
    }
`

export default class SocialMedia extends React.Component {
    render() {
        return (
            <StyledSocialMedia href={this.props.href} target="_blank"/>
        )
    }
}