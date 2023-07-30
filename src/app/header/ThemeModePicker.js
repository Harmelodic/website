import styled, { useTheme } from 'styled-components';
import { LightMode, DarkMode, Brightness4 } from '@mui/icons-material';
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
		background:
			${props => props.selected ? props.theme.colors.accents.green : props.theme.colors.accents.greenFaded};
	}
`;

export function ThemeModePicker() {
	const selectedThemeMode = useSelector(themeModeSelector);
	const dispatch = useDispatch();
	const theme = useTheme();

	let IconToShow;
	switch (selectedThemeMode) {
		case 'system-preference':
			IconToShow = Brightness4;
			break;
		case 'light':
			IconToShow = LightMode;
			break;
		case 'dark':
			IconToShow = DarkMode;
			break;
	}

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

	return (
		<StyledPicker onClick={changeMode}>
			<IconToShow sx={{ color: theme.font.normalNegativeColor }} />
		</StyledPicker>
	);
}
