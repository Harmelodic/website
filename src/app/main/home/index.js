import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Middleware } from './middleware';
import { SocialMedia } from './components/SocialMedia';
import { Main } from '../Main';
import { Project } from '../Project';

const HomeMain = styled(Main)`
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

const InfoHeader = styled.h2`
    margin: 0;
    padding: 30px 0 5px 0;
    font-size: 22px;
    font-weight: 500;
`;

const Info = styled.div`
    padding-left: 30px;
    max-width: 800px;
    font-size: 18px;
    color: #000;
    line-height: 28px;
`;

const StyledSocialMediaLinks = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

const StyledCertifications = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
`;

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.updatePath();
    dispatch(Middleware.fetchSocialMedia());
  }, []);

  const socialMedia = useSelector(store => store.socialMedia);

  return (
    <HomeMain>

      <InfoHeader>Name</InfoHeader>
      <Info>
        Matt Smith
      </Info>

      <InfoHeader>Alias</InfoHeader>
      <Info>
          Harmelodic
      </Info>

      <InfoHeader>Roles</InfoHeader>
      <Info>
        he/him<br />
        Software Engineer<br />
        Consultant<br />
        Writer<br />
        Designer<br />
        Musician<br />
        Dungeon Master<br />
      </Info>

      <InfoHeader>Socials</InfoHeader>
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

      <InfoHeader>Certifications</InfoHeader>
      <Info>
        <StyledCertifications>
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
        </StyledCertifications>
      </Info>

    </HomeMain>
  );
}
