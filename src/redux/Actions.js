// Action Types
export const SET_PROJECTS = "SET_PROJECTS";

// Action Creators
export default class Actions {
    static setProjects(projects) {
        return {
            type: SET_PROJECTS,
            projects: projects
        }
    }
}
