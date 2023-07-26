import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadingTextBlock } from './LoadingTextBlock';

const StyledPost = styled(Link)`
	display: flex;
	flex-flow: column nowrap;
	width: calc(100% - 60px);
	margin-bottom: 0;
    background: ${props => props.theme.colors.transparent};
	border-bottom: dashed 1px ${props => props.theme.colors.softBorder};
	padding: 30px;
	text-decoration: none;
	white-space: normal;
	text-align: left;
	transition: all 150ms;

	&:hover {
		background: ${props => props.theme.colors.mainHover};
	}

	&:active {
		background: ${props => props.theme.colors.mainActive};
	}
`;

const StyledTitle = styled.div`
	display: flex;
	font-size: 1.2rem;
	color: ${props => props.theme.font.titleColor};
`;

const StyledSubtitle = styled.div`
	display: flex;
	margin-top: 5px;
	font-size: 0.8rem;
	color: ${props => props.theme.font.subtitleColor};
	line-height: 1.6em;
	font-style: italic;
`;

export function Post(props) {
	const theme = useTheme();

	if (props.loading) {
		return (
			<StyledPost to='#'>
				<StyledTitle>
					<LoadingTextBlock width={400} color={theme.font.loading.normal} />
				</StyledTitle>
				<StyledSubtitle>
					<LoadingTextBlock width={150} color={theme.font.loading.subtitle} />
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
