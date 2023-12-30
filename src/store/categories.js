import { createSlice } from '@reduxjs/toolkit';
import { request } from '../ui/fetchHandler';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export function useCategories() {
	const dispatch = useDispatch();
	const categories = useSelector(categoriesSelector);
	const [isLoadingCategories, setLoadingCategories] = useState(true);

	useEffect(() => {
		setLoadingCategories(true);
		dispatch(fetchCategories(() => setLoadingCategories(false)));
	}, []);

	return {
		categories: categories,
		isLoadingCategories: isLoadingCategories,
	};
}

export const categories = createSlice({
	name: 'categories',
	initialState: {
		value: [],
	},
	reducers: {
		setCategories: (state, action) => {
			state.value = action.payload;
		},
	},
});

export function categoriesSelector(state) {
	return state.categories.value;
}

const blogAPI = process.env.BLOG_API || '';

export function fetchCategories(done) {
	return async dispatch => {
		const response = await request('GET', `${blogAPI}/category`);
		const data = await response.json();
		dispatch(categories.actions.setCategories(data));
		done();
	};
}
