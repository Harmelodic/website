import styled from 'styled-components';

const StyledSortPicker = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
	width: 100%;
	height: 80px;
	border-bottom: solid 1px #bbb;
`;

const SortLogo = styled.img`
	display: flex;
    margin-left: 25px;
	width: 30px;
	height: 30px;
	background: ${props => props.isSelected ? '#333' : '#bbb'};
	transition: background 150ms;
`;

const SortChoice = styled.div`
	display: flex;
    flex-flow: row nowrap;
    align-items: center;
	height: 100%;
	cursor: pointer;
	color: ${props => props.isSelected ? '#333' : '#bbb'};
	transition: color 150ms;

	&:hover {
		color: #000;
	}

	&:hover ${SortLogo} {
		background: #333;
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
							isSelected={(choice.sort === props.selectedChoice)}
						>
							<SortLogo
								src={choice.img}
								isSelected={(choice.sort === props.selectedChoice)}
							/>
							<SortText>{choice.display}</SortText>
						</SortChoice>
					);
				})
			}
		</StyledSortPicker>
	);
}
