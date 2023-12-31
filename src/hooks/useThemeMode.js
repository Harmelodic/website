import { useDispatch, useSelector } from 'react-redux';
import { themeModeSlice, themeModeSelector } from '../store/themeModeSlice';

export function useThemeMode() {
	const selectedThemeMode = useSelector(themeModeSelector);
	const dispatch = useDispatch();

	function changeToSystemPreference() {
		dispatch(themeModeSlice.actions.setToSystemPreference());
	}

	function changeToLight() {
		dispatch(themeModeSlice.actions.setToLight());
	}

	function changeToDark() {
		dispatch(themeModeSlice.actions.setToDark());
	}

	return [selectedThemeMode, changeToSystemPreference, changeToLight, changeToDark];
}
