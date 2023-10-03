import styled, { useTheme } from 'styled-components';
import { Brightness4, DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { themeMode, themeModeSelector } from '../../theme/themeMode';

const StyledPicker = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0 20px;
	transition: background 200ms;

	&:hover {
		background: ${props => props.theme.colors.accents.greenFaded};
	}
`;

export function ThemeModePicker() {
	const selectedThemeMode = useSelector(themeModeSelector);
	const dispatch = useDispatch();
	const theme = useTheme();

	function changeMode() {
		switch (selectedThemeMode) {
			case 'system-preference':
				dispatch(themeMode.actions.setToLight());
				break;
			case 'light':
				dispatch(themeMode.actions.setToDark());
				break;
			case 'dark':
				dispatch(themeMode.actions.setToSystemPreference());
				break;
		}
	}

	let IconToShow;
	let tooltipText;
	switch (selectedThemeMode) {
		case 'system-preference':
			IconToShow = Brightness4;
			tooltipText = 'System Default Theme';
			break;
		case 'light':
			IconToShow = LightMode;
			tooltipText = 'Always Light Theme';
			break;
		case 'dark':
			IconToShow = DarkMode;
			tooltipText = 'Always Dark Theme';
			break;
	}
	return (
		<StyledPicker onClick={changeMode} title={tooltipText}>
			<IconToShow sx={{ color: theme.font.normalNegativeColor }}/>
		</StyledPicker>
	);
}
