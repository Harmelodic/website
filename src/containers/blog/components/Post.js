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
    font-size: 14px;
    color: #666;
    line-height: 1.6em;
    font-style: italic;
`;

export default function Post(props) {
  return (
    <StyledPost href={props.link}>
      <StyledTitle className="heading">{props.title}</StyledTitle>
      <StyledSubtitle>
        {
          props.datePosted
        }
      </StyledSubtitle>
      {
        props.lastUpdated !== props.datePosted &&
          <StyledSubtitle>
            {`Last Updated: ${props.lastUpdated}`}
          </StyledSubtitle>
      }
    </StyledPost>
  );
}
