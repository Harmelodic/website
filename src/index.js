import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initialiseStore } from './Store';
import { App } from './app/App';
import { ThemeProvider } from 'styled-components';

const store = initialiseStore();

const theme = {
	nav: {
		background: '#191919',
		itemBackground: '#fff',
		itemHover: '#333',
		textColor: '#fff',
		textColorSelected: '#000',
	},
	main: {
		background: ''
	},
	sortPicker: {
		border: '#bbb',
		selected: '#333',
		unselected: '#bbb',
	},
	blog: {
		category: '#999',
		h1Border: '#333',
		h2Border: '#888',
		linkColor: '#0645ad',
		linkActiveColor: '#df0000',
		codeBlockBackground: '#000',
		codeBlockColor: '#fff',
		blockquoteColour: '#2e70b1',
		keyboardTextColor: '#242729',
		keyboardBorderColor: '#adb3b9',
		keyboardOuterBoxShadow: 'rgba(12, 13, 14, 0.2)',
		keyboardInnerBoxShadow: '#fff',
	},
	img: {
		border: '#333',
	},
	title: '#000',
	description: '#999',
	listSeparator: '#bbb',
	transparent: 'rgb(0,0,0,0)',
	error: '#f00',
}

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('app'),
);
