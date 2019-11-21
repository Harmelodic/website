import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import {StyledFadeInDiv} from '../components/Stylings';
import PatreonButton from '../components/PatreonButton';
import SocialMedia from '../components/SocialMedia';
import {Store} from '../redux/Store';
import Middleware from '../redux/Middleware';
import CircleImage from '../components/CircleImage';
import Project from '../components/Project';

const Info = styled.div`
    max-width: 800px;
    margin: 40px auto;
    font-size: 18px;
    color: #000;
    text-align: center;
    line-height: 30px;
`;

const InfoTitle = styled.div`
    margin-top: 10px;
    font-size: 24px;
    text-decoration: underline;
`;


const StyledSocialMediaLinks = styled.div`
    min-width: 300px;
    display: block;
    margin: 0 auto;
    white-space: normal;
`;

export default class Me extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socialMedia: Store.getState().socialMedia,
    };
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        socialMedia: Store.getState().socialMedia,
      });
    });

    Store.dispatch(Middleware.fetchSocialMedia());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Menu me={true} />
        <StyledFadeInDiv>
          <Info>
            <CircleImage src="/images/headshot.jpg" />
          </Info>
          <Info>
            <InfoTitle>Name</InfoTitle>
            Matt Smith
          </Info>
          <Info>
            <InfoTitle>Alias</InfoTitle>
            Harmelodic
          </Info>

          <Info>
            <InfoTitle>Accreditations</InfoTitle>
            <Project
              src="/images/gitlab.svg"
              background=""
              title="GitLab Hero"
              href="https://about.gitlab.com/community/heroes/members/"
            />
            <Project
              src="/images/cloud-professional-architect.png"
              background="#374850"
              title="Professional Cloud Architect"
              href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
            />
          </Info>
          <Info>
            <InfoTitle>Support Me</InfoTitle>
            <PatreonButton />
          </Info>
          <Info>
            <InfoTitle>Social Media</InfoTitle>
            <StyledSocialMediaLinks>
              {
                this.state.socialMedia.map((media, index) => {
                  return (
                    <SocialMedia
                      key={index}
                      href={media.href}
                      title={media.title}
                      src={media.src}
                    />
                  );
                })
              }
            </StyledSocialMediaLinks>
          </Info>
          <Info>
            <InfoTitle>Contact</InfoTitle>
            <StyledSocialMediaLinks>
              <SocialMedia
                href="mailto:matt@harmelodic.com"
                title="Email"
                src="/images/mail.svg"
              />
            </StyledSocialMediaLinks>
          </Info>
        </StyledFadeInDiv>
      </div>
    );
  }
}
