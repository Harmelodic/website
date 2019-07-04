import {
  SET_PROJECTS, SET_OPEN_SOURCE_PROJECTS, SET_SOCIAL_MEDIA,
} from './Actions';

export const rootReducer = (state, action) => {
  return {
    projects:
      projectsReducer(state.projects, action),
    openSourceProjects:
      openSourceProjectsReducer(state.openSourceProjects, action),
    socialMedia:
      socialMediaReducer(state.socialMedia, action),
  };
};

export const projectsReducer = (projectsState, action) => {
  let projects = Object.assign([], projectsState);

  switch (action.type) {
    case SET_PROJECTS:
      projects = action.projects;
      break;
  }

  return projects;
};

export const openSourceProjectsReducer = (openSourceProjectsState, action) => {
  let openSourceProjects = Object.assign([], openSourceProjectsState);

  switch (action.type) {
    case SET_OPEN_SOURCE_PROJECTS:
      openSourceProjects = action.openSourceProjects;
      break;
  }

  return openSourceProjects;
};

export const socialMediaReducer = (socialMediaState, action) => {
  let socialMedia = Object.assign([], socialMediaState);

  switch (action.type) {
    case SET_SOCIAL_MEDIA:
      socialMedia = action.socialMedia;
      break;
  }

  return socialMedia;
};
