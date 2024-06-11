import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { LoadingTextBlock } from './LoadingTextBlock';

const StyledPost = styled(Link)`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-between;
	width: calc(100% - 30px);
	margin-bottom: 0;
    background: ${props => props.theme.colors.transparent};
	border-bottom: dashed 1px ${props => props.theme.colors.softBorder};
	padding: 12px 15px;
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
	color: ${props => props.theme.font.titleColor};
`;

const StyledSubtitle = styled.div`
	display: flex;
	font-size: 0.8rem;
	color: ${props => props.theme.font.subtitleColor};
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
		const categoryList = props.categories.map(category => {
			const categoryMapping = props.categoryMappingList.find(categoryMapping => categoryMapping.id === category);
			return categoryMapping ? categoryMapping.name : [''];
		});
		return (
			<StyledPost to={props.link} title={props.title}>
				<StyledTitle className="heading">{props.title}</StyledTitle>
				<StyledSubtitle>
					{
						categoryList.length === 1 ? categoryList[0] : categoryList.join(', ')
					}
				</StyledSubtitle>
			</StyledPost>
		);
	}
}
