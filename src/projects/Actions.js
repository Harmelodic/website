export const SET_PROJECTS = 'SET_PROJECTS';

export default class Actions {
  static setProjects(projects) {
    return {
      type: SET_PROJECTS,
      projects: projects,
    };
  }
}
