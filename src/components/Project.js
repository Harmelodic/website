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

const StyledProjectImage = styled.div`
    display: block;
    margin: 25px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: solid 1px #000;
    background-color: #fff;
    background-image: url('${props => props.src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const StyledProjectText = styled.div`
    width: 100%;
    padding-bottom: 25px;
    font-size: 20px;
    color: #000;
    line-height: 24px;
`

const StyledSubtitle = styled.span`
    display: block;
    font-size: 16px;
    color: #999;
    font-style: italic;
`

export default class Project extends React.Component {
    render() {
        return (
            <StyledProject href={this.props.href} target="_blank">
                <StyledProjectImage src={this.props.src} alt="project-image"></StyledProjectImage>
                <StyledProjectText>
                    {this.props.title}
                    {this.props.subtitle && <StyledSubtitle>{this.props.subtitle}</StyledSubtitle>}
                </StyledProjectText>
            </StyledProject>
        )
    }
}