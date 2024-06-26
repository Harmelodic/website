import styled from 'styled-components';
import { useThemeMode } from '../../hooks/useThemeMode';

const StyledPicker = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	height: 100%;
	
	padding: 0 10px;
`;

const ThemeSelectBox = styled.select`
	appearance: none;

	// Drop-down arrow
    background: ${props => props.theme.colors.transparent};
	background-image:
		linear-gradient(45deg, transparent 50%, ${props => props.theme.font.normalNegativeColor} 50%),
		linear-gradient(135deg, ${props => props.theme.font.normalNegativeColor} 50%, transparent 50%);
	background-position:
		calc(100% - 17px) calc(1em - 1px),
		calc(100% - 12px) calc(1em - 1px);
	background-size:
		5px 5px,
		5px 5px;
	background-repeat: no-repeat;
	
	border: solid 1px ${props => props.theme.colors.softLight};
	border-radius: 5px;
	padding: 0 35px 0 15px;
	height: 40px;
	color: ${props => props.theme.font.normalNegativeColor};
	transition: border 200ms;

	&::placeholder {
		color: ${props => props.theme.font.placeholderColor};
		transition: color 200ms;
	}

	&:focus {
		border: solid 1px ${props => props.theme.colors.hardLight};
	}

	&:hover {
		border: solid 1px ${props => props.theme.colors.hardLight};
	}

	&:focus::placeholder {
		color: ${props => props.theme.font.placeholderColor};
	}
`;

export function ThemeModePicker() {
	const [selectedThemeMode, changeToSystemPreference, changeToLight, changeToDark] = useThemeMode();

	function changeMode(event) {
		switch (event.target.value) {
			case 'system-preference':
				changeToSystemPreference();
				break;
			case 'light':
				changeToLight();
				break;
			case 'dark':
				changeToDark();
				break;
		}
	}

	return (
		<StyledPicker>
			<ThemeSelectBox name="theme-mode-picker" value={selectedThemeMode} onChange={changeMode} title="Theme Mode">
				<option value="system-preference">System Theme</option>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
			</ThemeSelectBox>
		</StyledPicker>
	);
}
