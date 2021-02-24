import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Middleware from './Middleware';
import SocialMedia from './components/SocialMedia';
import { Main } from '../../components/Main';
import CircleImage from '../../components/CircleImage';
import Project from '../../components/Project';

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

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.updatePath();
    dispatch(Middleware.fetchSocialMedia());
  }, []);

  const socialMedia = useSelector(store => store.socialMedia);

  return (
    <Main>
      <Info>
        <CircleImage src="/images/headshot.webp" />
      </Info>
      <Info>
        Matt Smith
        <br />
        @Harmelodic
      </Info>
      <Info>
      </Info>
      <Info>
        Software Engineer - Consultant - Writer - Designer - Musician
      </Info>
      <Info>
        <StyledSocialMediaLinks>
          {
            socialMedia.map((media, index) => {
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
          src="/images/cloud-professional-architect.webp"
          background="#374850"
          title="Professional Cloud Architect"
          href="https://www.credential.net/bd886e12-4a18-4439-8c9a-680107c23547"
          size={100}
        />
      </Info>
    </Main>
  );
}
