import styled from 'styled-components';

const StyledInfoBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 700px;
    border: solid #000 1px;
    border-radius: 5px;
    margin-top: 35px;
`;

const Title = styled.div`
    width: calc(100% - 40px);
    border-radius: 3px 3px 0 0;
    padding: 20px;
    font-size: 22px;
    background: #292929;
    color: #fff;
`;

const TitleSeparator = styled.div`
    width: 100%;
    height: 1px;
    background: #000;
`;

const Info = styled.div`
    font-size: 18px;
    padding: 20px;
    color: #000;
    line-height: 28px;
`;

export function InfoBox(props) {
	return (
		<StyledInfoBox>
			<Title>{props.title}</Title>
			<TitleSeparator />
			<Info>{props.children}</Info>
		</StyledInfoBox>
	);
}
