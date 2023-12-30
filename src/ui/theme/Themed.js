import { ThemeProvider } from 'styled-components';
import { lightTheme } from './light-theme';
import { darkTheme } from './dark-theme';
import { useSystemPreferenceTheme } from '../../hooks/useSystemPreferenceTheme';
import { useSelector } from 'react-redux';

export function Themed(props) {
	const selectedThemeMode = useSelector(state => state.themeMode.value);
	const systemPreferenceTheme = useSystemPreferenceTheme();

	let theme;

	switch (selectedThemeMode) {
		case 'system-preference':
			switch (systemPreferenceTheme) {
				case 'light':
					theme = lightTheme;
					break;
				case 'dark':
					theme = darkTheme;
					break;
			}
			break;
		case 'light':
			theme = lightTheme;
			break;
		case 'dark':
			theme = darkTheme;
			break;
		default:
			theme = lightTheme;
			break;
	}

	document.getElementsByTagName('body')
		.item(0)
		.style
		.background = theme.colors.mainBackground;

	return (
		<ThemeProvider theme={theme}>
			{props.children}
		</ThemeProvider>
	);
}
