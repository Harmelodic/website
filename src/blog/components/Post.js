import React from 'react';
import styled from 'styled-components';

const StyledPost = styled.a`
    display: block;
    margin-bottom: 0;
    border-bottom: solid 1px #666;
    padding: 30px;
    text-decoration: none;
    white-space: normal;
    text-align: left;
    transition: all 150ms;

    &:hover {
        color: #000;
        background: #eee;
    }

    &:active {
        background: #ddd;
    }
`;

const StyledTitle = styled.div`
    font-size: 20px;
    color: #555;
`;


const StyledSubtitle = styled.div`
    margin-top: 5px;
    font-size: 16px;
    color: #999;
    line-height: 1.6em;
`;

export default class Post extends React.PureComponent {
  render() {
    return (
      <StyledPost href={this.props.link}>
        <StyledTitle className="heading">{this.props.title}</StyledTitle>
        <StyledSubtitle>
          {
            this.props.datePosted
          }
        </StyledSubtitle>
        {
          this.props.lastUpdated !== this.props.datePosted &&
            <StyledSubtitle>
              {`Last Updated: ${this.props.lastUpdated}`}
            </StyledSubtitle>
        }
      </StyledPost>
    );
  }
}
