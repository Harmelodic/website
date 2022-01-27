import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initialiseStore } from './Store';
import { App } from './app/App';
import { ThemeProvider } from 'styled-components';

const store = initialiseStore();

const theme = {
	nav: {
		iconBorder: '#fff',
		background: '#191919',
		itemBackground: '#fff',
		itemHover: '#333',
		textColor: '#fff',
		textColorSelected: '#000',
	},
	sortPicker: {
		border: '#bbb',
		selected: '#333',
		unselected: '#bbb',
	},
	loadingTextBlock: {
		default: '#ccc'
	},
	button: {
		background: '#fff',
		border: '#bbb',
		color: '#888',
		activeColor: '#333',
		activeBorder: '#333'
	},
	circleImage: {
		border: '#000',
		background: '#000'
	},
	horizontalRule: '#888',
	infoBox: {
		border: '#333',
		color: '#000'
	},
	input: {
		icon: '#bbb',
		border: '#bbb',
		color: '#333',
		placeholderColor: '#aaa',
		focus: {
			border: '#333',
			placeholderColor: 'rgba(0,0,0,0)'
		}
	},
	project: {
		color: '#000',
		circle: {
			border: '#000',
			defaultBackground: '#fff'
		},
		subtitleColor: '#666',
		hover: {
			background: '#f3f3f3'
		}
	},
	socialMedia: {
		hover: {
			background: '#f3f3f3'
		}
	},
	blog: {
		posts: {
			loading: {
				subtitleColor: '#ddd'
			},
			borderBottom: '#666',
			hoverBackground: '#eee',
			activeBackground: '#ddd',
			titleColor: '#555',
			subtitleColor: '#666'
		},
		loading: {
			wave: 'rgba(255,255,255,0.5)',
			category: '#ddd',
			h1: '#888',
			h2: '#aaa'
		},
		postView: {
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
		}
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
