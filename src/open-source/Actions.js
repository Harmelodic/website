export const SET_OPEN_SOURCE_PROJECTS = 'SET_OPEN_SOURCE_PROJECTS';

export default class Actions {
  static setOpenSourceProjects(openSourceProjects) {
    return {
      type: SET_OPEN_SOURCE_PROJECTS,
      openSourceProjects: openSourceProjects,
    };
  }
};
