import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './light-theme';
import { darkTheme } from './dark-theme';

export function Themed(props) {
	const selectedTheme = useSelector(store => store.theme);

	let theme;
	switch (selectedTheme) {
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

	document.getElementsByTagName('body').item(0).style.background = theme.main.background;

	return (
		<ThemeProvider theme={theme}>
			{props.children}
		</ThemeProvider>
	);
}
