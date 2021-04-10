import styled from 'styled-components';

const size = 60;

const StyledSocialMedia = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    width: ${size}px;
    height: ${size}px;
    text-decoration: none;
    transition: 200ms background;

    &:hover {
        background: #f3f3f3;
    }
`;

const StyledImage = styled.img`
    width: 55%;
    height: 55%;
`;

export default function SocialMedia(props) {
  return (
    <StyledSocialMedia
      title={props.title}
      href={props.href}
      target={props.href.includes('http') ? '_blank' : '_self'}
      rel="noopener">
      <StyledImage src={props.src} alt={props.title}/>
    </StyledSocialMedia>
  );
}
