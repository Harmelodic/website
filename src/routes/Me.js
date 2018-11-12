import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { StyledFadeInDiv } from "../components/Stylings";
import PatreonButton from "../components/PatreonButton";
import SocialMedia from "../components/SocialMedia";

const Info = styled.div`
    max-width: 800px;
    margin: 40px auto;
    font-size: 18px;
    color: #000;
    text-align: center;
    line-height: 28px;
`

const InfoTitle = styled.div`
    margin-top: 10px;
    font-size: 24px;
    text-decoration: underline;
`


const StyledSocialMediaLinks = styled.div`
    min-width: 300px;
    display: block;
    margin: 0 auto;
    white-space: normal;
`

export default class Me extends React.Component {
    render() {
        return (
            <div>
                <Menu me={true} />
                <StyledFadeInDiv>
                    <Info>
                        <InfoTitle>Name</InfoTitle>
                        Matt Smith
                    </Info>
                    <Info>
                        <InfoTitle>Alias</InfoTitle>
                        Harmelodic
                    </Info>
                    <Info>
                        <InfoTitle>Support Me</InfoTitle>
                        <PatreonButton />
                    </Info>
                    <Info>
                        <InfoTitle>Social Media</InfoTitle>
                        <StyledSocialMediaLinks>
                            <SocialMedia href="https://twitter.com/Harmelodic" title="Twitter (Personal)"></SocialMedia>
                            <SocialMedia href="https://twitter.com/MSmithDeveloper" title="Twitter (Work)"></SocialMedia>
                            <SocialMedia href="http://scribbes.harmelodic.com" title="Scribbles"></SocialMedia>
                            <SocialMedia href="https://instagram.com/Harmelodic" title="Instagram"></SocialMedia>
                            <SocialMedia href="https://youtube.com/Harmelodic" title="YouTube"></SocialMedia>
                            <SocialMedia href="https://keybase.io/harmelodic" title="Keybase"></SocialMedia>
                            <SocialMedia href="https://www.linkedin.com/in/harmelodic/" title="LinkedIn"></SocialMedia>
                        </StyledSocialMediaLinks>
                    </Info>
                </StyledFadeInDiv>
            </div>
        )
    }
}