import styled from 'styled-components';

const ShelfBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
	
	padding: 0 20px 20px 20px;
	border: solid 1px ${props => props.theme.colors.softBorder};
	border-radius: 5px;
	margin-bottom: 20px;
`;

const ShelfTitle = styled.h3`
	font-weight: 300;
	color: ${props => props.theme.font.titleColor};
`;

const Links = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
	line-height: 2rem;
`;


export function Shelf(props) {
	return (
		<ShelfBox>
			<ShelfTitle>{props.title}</ShelfTitle>
			<Links>
				{props.children}
			</Links>
		</ShelfBox>
	);
}
