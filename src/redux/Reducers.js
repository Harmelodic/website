import {
    SET_PROJECTS, SET_OPEN_SOURCE_PROJECTS
} from "./Actions";

export const rootReducer = (state, action) => {
    return {
        projects: projectsReducer(state.projects, action),
        openSourceProjects: openSourceProjectsReducer(state.openSourceProjects, action)
    }
}

export const projectsReducer = (projectsState, action) => {
    let projects = Object.assign([], projectsState);

    switch (action.type) {
        case SET_PROJECTS:
            projects = action.projects;
            break;
    }

    return projects;
}

export const openSourceProjectsReducer = (openSourceProjectsState, action) => {
    let openSourceProjects = Object.assign([], openSourceProjectsState);

    switch (action.type) {
        case SET_OPEN_SOURCE_PROJECTS:
            openSourceProjects = action.openSourceProjects;
            break;
    }

    return openSourceProjects;
}
