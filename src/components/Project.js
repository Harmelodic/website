import React from "react";
import styled from "styled-components";

const StyledProject = styled.a`
    display: inline-block;
    margin: 5px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
    transition: background 300ms;

    &:hover {
        background: #f6f6f6;
        cursor: pointer;
    }
`

const StyledProjectTop = styled.img`
    display: block;
    margin: 25px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: solid 1px #000;
    background: #fff;
`

const StyledProjectBottom = styled.div`
    width: 100%;
    padding-bottom: 25px;
    font-size: 20px;
    color: #000;
`

export default class Project extends React.Component {
    render() {
        return (
            <StyledProject href={this.props.href} target="_blank">
                <StyledProjectTop src={this.props.src} alt="project-image"></StyledProjectTop>
                <StyledProjectBottom>{this.props.title}</StyledProjectBottom>
            </StyledProject>
        )
    }
}