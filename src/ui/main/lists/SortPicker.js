import styled from 'styled-components';

const StyledSortPicker = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
	width: 100%;
	height: 80px;
	border-bottom: solid 1px ${props => props.theme.colors.softBorder};
`;

const SortLogo = styled.img`
	display: flex;
    margin-left: 25px;
	width: 30px;
	height: 30px;
	opacity: ${props => props.selected ? 1 : 0.5};
	transition: opacity 150ms;
`;

const SortChoice = styled.div`
	display: flex;
    flex-flow: row nowrap;
    align-items: center;
	height: 100%;
	cursor: pointer;
	color: ${props => props.selected ? props.theme.font.normalColor : props.theme.font.placeholderColor};
	transition: color 150ms;

	&:hover {
		color: ${props => props.theme.font.normalColor};
	}

	&:hover ${SortLogo} {
		opacity: 1;
	}
`;

const SortText = styled.div`
	display: flex;
	margin-left: 25px;
	vertical-align: top;
`;


export default function SortPicker(props) {
	const sortChoices = [
		{
			sort: 'favourite',
			img: '/images/sorting/heart.svg',
			display: 'Numerical Favourite',
		},
		{
			sort: 'alphabetical',
			img: '/images/sorting/alphabetical.svg',
			display: 'Alphabetical',
		},
		{
			sort: 'chronological',
			img: '/images/sorting/chronological.svg',
			display: 'Chronological',
		},
	];

	return (
		<StyledSortPicker>
			{
				sortChoices.map(choice => {
					return (
						<SortChoice
							key={choice.sort}
							onClick={() => {
								props.onChangeSort(choice.sort);
							}}
							selected={(choice.sort === props.selectedChoice)}
						>
							<SortLogo
								src={choice.img}
								selected={(choice.sort === props.selectedChoice)}
							/>
							<SortText>{choice.display}</SortText>
						</SortChoice>
					);
				})
			}
		</StyledSortPicker>
	);
}
