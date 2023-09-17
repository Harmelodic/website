import styled from 'styled-components';
import { Hyperlink } from '../../../lib/Hyperlink';

const LibraryLinkWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LinkImage = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`;

export function LibraryLink(props) {
	return (
		<LibraryLinkWrapper>
			<LinkImage src={props.imgSrc} />
			<Hyperlink href={props.href}>{props.title}</Hyperlink>
		</LibraryLinkWrapper>
	);
}
