import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { StyledFadeInDiv } from "../components/Stylings";

const Info = styled.div`
    max-width: 600px;
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

const PatreonButton = styled.a`
    display: block;
    width: 250px;
    height: 60px;
    margin: 10px auto 0 auto;
    background: url('/images/become_a_patron_button@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
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
                        <PatreonButton href="https://patreon.com/Harmelodic" target="_blank"></PatreonButton>
                    </Info>
                    <Info>
                        <InfoTitle>Social Media</InfoTitle>
                    </Info>
                    {/* 
                        Social Media Links
                        Blog Link
                    */}
                </StyledFadeInDiv>
            </div>
        )
    }
}