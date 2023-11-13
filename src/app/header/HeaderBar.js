import styled from 'styled-components';
import { NavMenu } from './NavMenu';
import { ThemeModePicker } from './ThemeModePicker';

export const headerBarHeight = 60;

const StyledBar = styled.header`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	background: ${props => props.theme.colors.darkBackground};
	position: sticky;
	top: 0;
	width: 100%;
	height: ${headerBarHeight}px;
`;

const StyledBarContent = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;
	height: 100%;
	overflow-x: auto;
`;

export default function HeaderBar() {
	return (
		<StyledBar>
			<StyledBarContent>
				<NavMenu />
				<ThemeModePicker />
			</StyledBarContent>
		</StyledBar>
	);
}
