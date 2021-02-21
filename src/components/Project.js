import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.a`
    display: inline-block;
    margin: 5px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    vertical-align: top;
    color: #000;
    transition: background 300ms;

    &:hover {
        background: #f3f3f3;
        cursor: pointer;
    }
`;

const StyledProjectImageCircle = styled.div`
    display: block;
    margin: 25px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    border: solid 1px #000;
    background-color:
      ${(props) => props.background ? props.background : '#fff'};
`;

const StyledProjectImage = styled.img`
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    display: block;
    margin: 0 auto;
    width: ${(props) => props.size ? props.size : '65'}%;
    height: ${(props) => props.size ? props.size : '65'}%;
`;

const StyledProjectText = styled.div`
    width: 190px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 25px;
    font-size: 20px;
    line-height: 24px;
`;

const StyledSubtitle = styled.span`
    display: block;
    font-size: 14px;
    color: #666;
    font-style: italic;
`;

export default class Project extends React.Component {
  render() {
    return (
      <StyledProject href={this.props.href} target="_blank" rel="noopener">
        <StyledProjectImageCircle background={this.props.background}>
          <StyledProjectImage
            src={this.props.src ? this.props.src : '/images/NoLogo.svg'}
            alt="project-image"
            size={this.props.size}
          />
        </StyledProjectImageCircle>
        <StyledProjectText>
          {this.props.title}
          {
            this.props.subtitle &&
              <StyledSubtitle>
                {
                  this.props.subtitle
                      .split('\n')
                      .map((subtitleString, index) => {
                        return (
                          <div key={index}>{subtitleString}</div>
                        );
                      })
                }
              </StyledSubtitle>
          }
        </StyledProjectText>
      </StyledProject>
    );
  }
}
