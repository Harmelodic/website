export const lightTheme = {
	// General styling
	font: {
		family: "Helvetica, 'Segoe UI', sans-serif",
		weight: 300
	},
	button: {
		cancel: {
			background: '#eee',
			hover: {
				background: '#ddd'
			},
			active: {
				background: '#ccc'
			}
		},
		item: {
			background: 'rgba(0,0,0,0)',
			hover: {
				background: '#f3f3f3'
			},
			active: {
				background: '#ddd'
			}
		}
	},
	input: {
		background: '#fff',
		border: '#bbb',
		icon: '#bbb',
		color: '#888',
		hover: {
			border: '#333',
		},
		focus: {
			border: '#333',
		},
		active: {
			border: '#333',
		}
	},
	text: {
		title: '#000',
		subtitle: '#999',
		normal: '#333',
		placeholder: '#aaa',
		link: '#0645ad',
		linkActive: '#df0000',
		code: {
			color: '#fff',
			background: '#000'
		},
		blockquote: '#2e70b1',
		keyboard: {
			color: '#242729',
			border: '#adb3b9',
			boxShadow: {
				outer: 'rgba(12, 13, 14, 0.2)',
				inner: '#fff'
			}
		}
	},
	img: {
		border: '#333',
		background: '#fff'
	},
	separator: '#888',
	transparent: 'rgb(0,0,0,0)',
	error: '#f00',


	// Special styling
	loadingTextBlock: {
		default: '#ccc',
		wave: 'rgba(255,255,255,0.5)',
	},
	rainbow: {
		one: 'red',
		two: 'orange',
		three: 'yellow',
		four: 'green',
		five: 'cyan',
		six: 'blue',
		seven: 'indigo',
		eight: 'violet',
		nine: 'red'
	},


	// Site-specific styling
	nav: {
		background: '#191919',
		icon: {
			border: '#fff'
		},
		item: {
			color: '#fff',
			selected: {
				background: '#fff',
				color: '#000'
			},
			hover: {
				background: '#333'
			}
		},
	},
	blog: {
		posts: {
			loading: {
				subtitleColor: '#ddd'
			},
			borderBottom: '#666',
		},
		loading: {
			category: '#ddd',
			h1: '#888',
			h2: '#aaa'
		},
		postView: {
			h1Border: '#333',
			h2Border: '#888',
		}
	},
}
