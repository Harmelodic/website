import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadingTextBlock } from './LoadingTextBlock';

const StyledPost = styled(Link)`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100% - 60px);
	margin-bottom: 0;
	border-bottom: dashed 1px ${props => props.theme.blog.posts.borderBottom};
	padding: 30px;
	text-decoration: none;
	white-space: normal;
	text-align: left;
	transition: all 150ms;

	&:hover {
		background: ${props => props.theme.blog.posts.hoverBackground};
	}

	&:active {
		background: ${props => props.theme.blog.posts.activeBackground};
	}
`;

const StyledTitle = styled.div`
	display: flex;
	font-size: 20px;
	color: ${props => props.theme.blog.posts.titleColor};
`;

const StyledSubtitle = styled.div`
	display: flex;
	margin-top: 5px;
	font-size: 14px;
	color: ${props => props.theme.blog.posts.subtitleColor};
	line-height: 1.6em;
	font-style: italic;
`;

export function Post(props) {
	const theme = useTheme();

	if (props.loading) {
		return (
			<StyledPost to='#'>
				<StyledTitle>
					<LoadingTextBlock width={400} />
				</StyledTitle>
				<StyledSubtitle>
					<LoadingTextBlock width={150} color={theme.blog.posts.loading.subtitleColor} />
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
