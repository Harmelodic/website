export const SET_PROJECTS = 'SET_PROJECTS';

export class Actions {
  static setProjects(projects) {
    return {
      type: SET_PROJECTS,
      projects: projects,
    };
  }
}
