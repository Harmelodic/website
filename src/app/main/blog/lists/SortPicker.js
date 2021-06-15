import styled from 'styled-components';

const pickerHeight = 80;
const StyledSortPicker = styled.div`
	width: 100%;
	height: ${pickerHeight}px;
	border-bottom: solid 1px #bbb;
`;

const StyledSortChoiceWrapper = styled.div`
	display: inline-block;
	width: calc(100%/3);
	height: ${pickerHeight};
	text-align: center;
`;

const logoSize = 30;
const StyledSortLogo = styled.img`
	display: inline-block;
	margin: ${(pickerHeight - logoSize) / 2}px;
	width: ${logoSize}px;
	height: ${logoSize}px;
	background: ${props => props.isSelected ? '#333' : '#bbb'};
	transition: background 150ms;
`;

const StyledSortText = styled.div`
	display: inline-block;
	margin-right: 23px;
	height: ${pickerHeight};
	font-size: 18px;
	line-height: 80px;
	vertical-align: top;
`;

const StyledSortChoice = styled.div`
	display: inline-block;
	height: ${pickerHeight};
	cursor: pointer;
	color: ${props => props.isSelected ? '#333' : '#bbb'};
	transition: color 150ms;

	&:hover {
		color: #000;
	}

	&:hover ${StyledSortLogo} {
		background: #333;
	}
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
						<StyledSortChoiceWrapper key={choice.sort}>
							<StyledSortChoice
								onClick={() => {
									props.onChangeSort(choice.sort);
								}}
								isSelected={!!(choice.sort === props.selectedChoice)}
							>
								<StyledSortLogo
									src={choice.img}
									isSelected={!!(choice.sort === props.selectedChoice)}
								/>
								<StyledSortText>{choice.display}</StyledSortText>
							</StyledSortChoice>
						</StyledSortChoiceWrapper>
					);
				})
			}
		</StyledSortPicker>
	);
}
