import styled from 'styled-components';
import { ReadingSpace } from '../../lib/ReadingSpace';
import { Title } from '../../lib/Title';
import { Main } from '../../lib/Main';
import { Link } from 'react-router-dom';

const ListsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const ListEntry = styled(Link)`
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

export default function Lists() {
	return (
		<Main>
			<Title>Lists</Title>
			<ListsWrapper>
				<ListEntry to="/lists/films-seen" title="Films I've Seen">
					<StyledTitle className="heading">Films I've Seen</StyledTitle>
				</ListEntry>
				<ListEntry to="/lists/tv-shows-seen" title="TV Shows I've Seen">
					<StyledTitle className="heading">TV Shows I've Seen</StyledTitle>
				</ListEntry>
			</ListsWrapper>
			<ReadingSpace/>
		</Main>
	);
};
