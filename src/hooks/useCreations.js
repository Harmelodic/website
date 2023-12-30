import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { creationsSelector, fetchCreations } from '../store/creationsState';

export function useCreations() {
	const dispatch = useDispatch();
	const creations = useSelector(creationsSelector);

	useEffect(() => {
		dispatch(fetchCreations());
	}, []);

	return creations;
}
