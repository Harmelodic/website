import { SET_OPEN_SOURCE_PROJECTS } from './Actions';

export const openSourceProjectsReducer = (openSourceProjectsState, action) => {
  let openSourceProjects = Object.assign([], openSourceProjectsState);

  switch (action.type) {
    case SET_OPEN_SOURCE_PROJECTS:
      openSourceProjects = action.openSourceProjects;
      break;
  }

  return openSourceProjects;
};
