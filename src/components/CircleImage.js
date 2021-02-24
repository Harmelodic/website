import styled from 'styled-components';

const StyledProjectImage = styled.div`
    display: inline-block;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    border: solid 1px #000;
    background-color: #000;
    background-image: url('${(props) => props.src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 20px;
    line-height: 150px;
`;

export default function CircleImage() {
  return (
    <StyledProjectImage src={this.props.src} />
  );
}
