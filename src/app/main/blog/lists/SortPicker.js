import styled from 'styled-components';

const StyledSortPicker = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
	width: 100%;
  	max-width: 900px;
	border-bottom: solid 1px ${props => props.theme.input.border};
`;

const SortLogo = styled.img`
	display: flex;
    margin-left: 25px;
	width: 30px;
	height: 30px;
	background: ${props => props.selected ? props.theme.input.focus.color : props.theme.input.placeholderColor};
	transition: background 150ms;
`;

const SortChoice = styled.div`
	display: flex;
    flex-flow: row nowrap;
    align-items: center;
	height: 100%;
	cursor: pointer;
	color: ${props => props.selected ? props.theme.input.focus.color : props.theme.input.placeholderColor};
	transition: color 150ms;

	&:hover {
		color: ${props => props.theme.input.focus.color};
	}

	&:hover ${SortLogo} {
		background: ${props => props.theme.input.focus.color};
	}
`;

const SortText = styled.div`
	display: flex;
	margin-left: 25px;
	height: 100%;
	font-size: 18px;
	line-height: 80px;
	vertical-align: top;
`;


export default function SortPicker(props) {
	const sortChoices = [
		{
			sort: 'favourite',
			img: '/images/heart.svg',
			display: 'Numerical Favourite',
		},
		{
			sort: 'alphabetical',
			img: '/images/alphabetical.svg',
			display: 'Alphabetical',
		},
		{
			sort: 'chronological',
			img: '/images/chronological.svg',
			display: 'Chronological',
		},
	];

	return (
		<StyledSortPicker>
			{
				sortChoices.map((choice) => {
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
