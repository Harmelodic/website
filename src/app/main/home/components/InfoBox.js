import styled from 'styled-components';

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

export function InfoBox(props) {
	return (
		<div>
			<InfoHeader>{props.title}</InfoHeader>
			<Info>{props.children}</Info>
		</div>
	);
};
