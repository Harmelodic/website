import { useEffect, useState } from 'react';

export function useSystemPreferenceTheme() {
	const [systemPreferenceTheme, setSystemPreferenceTheme] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	);

	useEffect(() => {
		function handleSystemPreferenceThemeChange(event) {
			if (event.matches) {
				setSystemPreferenceTheme('dark');
			} else {
				setSystemPreferenceTheme('light');
			}
		}

		window.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handleSystemPreferenceThemeChange);

		return function cleanup() {
			window.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', handleSystemPreferenceThemeChange);
		};
	});

	return systemPreferenceTheme;
}
