import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { creationsSlice, creationsSelector } from '../store/creationsSlice';
import { request } from './api-registry';

export function useCreations() {
	const dispatch = useDispatch();
	const creations = useSelector(creationsSelector);

	useEffect(() => {
		request('GET', '/resources/creations.json')
			.then(response => response.json())
			.then(data => {
				dispatch(creationsSlice.actions.setCreations(data));
			});
	}, []);

	return creations;
}
