import { useDispatch, useSelector } from 'react-redux';
import { themeMode, themeModeSelector } from '../store/themeMode';

export function useThemeMode() {
	const selectedThemeMode = useSelector(themeModeSelector);
	const dispatch = useDispatch();

	function changeToSystemPreference() {
		dispatch(themeMode.actions.setToSystemPreference());
	}

	function changeToLight() {
		dispatch(themeMode.actions.setToLight());
	}

	function changeToDark() {
		dispatch(themeMode.actions.setToDark());
	}

	return [selectedThemeMode, changeToSystemPreference, changeToLight, changeToDark];
}
