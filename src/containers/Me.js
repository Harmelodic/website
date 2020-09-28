import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import {StyledFadeInDiv} from '../components/Stylings';
import SocialMedia from '../components/SocialMedia';
import {Store} from '../redux/Store';
import Middleware from '../redux/Middleware';
import CircleImage from '../components/CircleImage';
import Project from '../components/Project';

const Info = styled.div`
    max-width: 800px;
    margin: 15px auto;
    font-size: 18px;
    color: #000;
    text-align: center;
    line-height: 24px;
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
            Matt Smith
            <br />
            @Harmelodic
          </Info>
          <Info>
          </Info>
          <Info>
            Software Engineer - Consultant - Writer - Designer - Musician - Speaker
          </Info>
          <Info>
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
            <Project
              src="/images/gitlab.svg"
              background=""
              title="GitLab Hero"
              href="https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/34774"
              size={60}
            />
            <Project
              src="/images/cloud-professional-architect.png"
              background="#374850"
              title="Professional Cloud Architect"
              href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
              size={100}
            />
          </Info>
        </StyledFadeInDiv>
      </div>
    );
  }
}
