import styled from 'styled-components';
import { Hyperlink } from '../../../lib/Hyperlink';

const LibraryLinkWrapper = styled.div`
    display: flex;
    align-items: start;
	white-space: pre-wrap;
`;

const LinkImage = styled.img`
	width: 20px;
	min-width: 20px;
	height: 20px;
	margin: 8px 10px;
`;

export function LibraryLink(props) {
	return (
		<LibraryLinkWrapper>
			<LinkImage src={props.imgSrc} />
			<Hyperlink href={props.href}>{props.title}</Hyperlink>
		</LibraryLinkWrapper>
	);
}
