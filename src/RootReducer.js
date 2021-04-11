import { projectsReducer } from './app/main/projects/reducer';
import { openSourceProjectsReducer } from './app/main/open-source/reducer';
import { socialMediaReducer } from './app/main/home/reducer';
import { blogReducer } from './app/main/blog/reducer';

export const rootReducer = (state, action) => {
  return {
    projects: projectsReducer(state.projects, action),
    openSourceProjects:
      openSourceProjectsReducer(state.openSourceProjects, action),
    socialMedia: socialMediaReducer(state.socialMedia, action),
    blog: blogReducer(state.blog, action),
  };
};
