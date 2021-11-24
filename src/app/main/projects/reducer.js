import { SET_PROJECTS } from './actions';

export function projectsReducer(projectsState, action) {
	let projects = Object.assign([], projectsState);

	switch (action.type) {
		case SET_PROJECTS:
			projects = action.projects;
			break;
	}

	return projects;
}
