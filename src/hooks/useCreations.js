import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { creations, creationsSelector } from '../store/creations';
import { request } from '../api/apiHandler';

export function useCreations() {
	const dispatch = useDispatch();
	const creations = useSelector(creationsSelector);

	useEffect(() => {
		dispatch(fetchCreations());
	}, []);

	return creations;
}

export function fetchCreations() {
	return async dispatch => {
		const response = await request('GET', '/resources/creations.json');
		const data = await response.json();
		dispatch(creations.actions.setCreations(data));
	};
}
