import { mobileViewReducer } from './mobile-view/Reducer';
import { projectsReducer } from './containers/projects/Reducer';
import { openSourceProjectsReducer } from './containers/open-source/Reducer';
import { socialMediaReducer } from './containers/home/Reducer';
import { blogReducer } from './containers/blog/Reducer';

export const rootReducer = (state, action) => {
  return {
    mobileView: mobileViewReducer(state.mobileView, action),
    projects: projectsReducer(state.projects, action),
    openSourceProjects:
      openSourceProjectsReducer(state.openSourceProjects, action),
    socialMedia: socialMediaReducer(state.socialMedia, action),
    blog: blogReducer(state.blog, action),
  };
};
