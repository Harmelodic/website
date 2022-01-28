import styled from 'styled-components';

const StyledMediaListEntry = styled.div`
	width: 100%;
  	max-width: 900px;
	border-bottom: solid 1px ${props => props.theme.listSeparator};
`;

const StyledHalf = styled.div`
	display: inline-block;
	width: 50%;
`;

const StyledHalfLeft = styled(StyledHalf)`
	text-align: right;
`;

const StyledHalfRight = styled(StyledHalf)`
	text-align: left;
	vertical-align: top;
`;

// DVD Covers are 5x7.2" (129x183mm)
const pictureSizeFactor = 50;
const StyledPicture = styled.img`
	margin: 20px 0;
	width: calc(5 * ${pictureSizeFactor}px);
	height: calc(7.2 * ${pictureSizeFactor}px);
	border: solid 1px ${props => props.theme.img.border};
`;

const StyledDetailsWrapper = styled.div`
	margin: 20px 0 20px 50px;
	height: 100%;
	white-space: pre-wrap;
	text-align: left;
`;

const StyledDetailsText = styled.div`
	padding: 5px 0;
	color: ${props => props.theme.text.subtitle};
	font-size: 18px;
	font-style: italic;
`;

const StyledPosition = styled(StyledDetailsText)`
	display: inline-block;
	font-weight: normal;
`;

const StyledTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: ${props => props.theme.text.title};
`;

export default function MediaListEntry(props) {
	return (
		<StyledMediaListEntry>

			<StyledHalfLeft>
				<StyledPicture
					// eslint-disable-next-line max-len
					src={`${process.env.BLOG_CONTENT_SERVER}/posts/posters/${props.details.tconst}.jpg`}
				/>
			</StyledHalfLeft>

			<StyledHalfRight>
				<StyledDetailsWrapper>
					<StyledTitle>
						<StyledPosition>
							{`\u0023${props.details.position}: `}
						</StyledPosition>
						{props.details.primary_title}
					</StyledTitle>
					{
						props.descriptionTexts.map((text, index) => {
							return (
								<StyledDetailsText key={index}>{text}</StyledDetailsText>
							);
						})
					}
				</StyledDetailsWrapper>
			</StyledHalfRight>

		</StyledMediaListEntry>
	);
}
