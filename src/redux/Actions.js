// Action Types
export const SET_PROJECTS = "SET_PROJECTS";
export const SET_OPEN_SOURCE_PROJECTS = "SET_OPEN_SOURCE_PROJECTS";

// Action Creators
export default class Actions {
    static setProjects(projects) {
        return {
            type: SET_PROJECTS,
            projects: projects
        }
    }

    static setOpenSourceProjects(openSourceProjects) {
        return {
            type: SET_OPEN_SOURCE_PROJECTS,
            openSourceProjects: openSourceProjects
        }
    }
}
