import { SET_PROJECTS } from './Actions';

export const projectsReducer = (projectsState, action) => {
  let projects = Object.assign([], projectsState);

  switch (action.type) {
    case SET_PROJECTS:
      projects = action.projects;
      break;
  }

  return projects;
};