import React from 'react';
import styled from 'styled-components';

const size = 60;

const StyledSocialMedia = styled.a`
    display: inline-block;
    margin: 10px 10px 0 10px;
    width: ${size}px;
    height: ${size}px;
    text-decoration: none;
    transition: 200ms background;

    &:hover {
        background: #f3f3f3;
    }
`;

const StyledImage = styled.img`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    width: 55%;
    height: 55%;
`;

export default class SocialMedia extends React.Component {
  render() {
    return (
      <StyledSocialMedia
        title={this.props.title}
        href={this.props.href}
        target={this.props.href.includes('http') ? '_blank' : '_self'}
        rel="me"
      >
        <StyledImage src={this.props.src} alt={this.props.title}/>
      </StyledSocialMedia>
    );
  }
}
