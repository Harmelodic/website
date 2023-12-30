import { useDispatch, useSelector } from 'react-redux';
import { themeMode } from '../store/themeMode';

export function useThemeMode() {
	const selectedThemeMode = useSelector(state => state.themeMode.value);
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
