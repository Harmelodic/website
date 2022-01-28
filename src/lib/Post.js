import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadingTextBlock } from './LoadingTextBlock';

const StyledPost = styled(Link)`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100% - 60px);
	margin-bottom: 0;
    background: ${props => props.theme.button.item.background};
	border-bottom: dashed 1px ${props => props.theme.separator};
	padding: 30px;
	text-decoration: none;
	white-space: normal;
	text-align: left;
	transition: all 150ms;

	&:hover {
		background: ${props => props.theme.button.item.hover.background};
	}

	&:active {
		background: ${props => props.theme.button.item.active.background};
	}
`;

const StyledTitle = styled.div`
	display: flex;
	font-size: 20px;
	color: ${props => props.theme.text.title};
`;

const StyledSubtitle = styled.div`
	display: flex;
	margin-top: 5px;
	font-size: 14px;
	color: ${props => props.theme.text.subtitle};
	line-height: 1.6em;
	font-style: italic;
`;

export function Post(props) {
	const theme = useTheme();

	if (props.loading) {
		return (
			<StyledPost to='#'>
				<StyledTitle>
					<LoadingTextBlock width={400} color={theme.text.loading.normal} />
				</StyledTitle>
				<StyledSubtitle>
					<LoadingTextBlock width={150} color={theme.text.loading.subtitle} />
				</StyledSubtitle>
			</StyledPost>
		);
	} else {
		return (
			<StyledPost to={props.link}>
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
}
