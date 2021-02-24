import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Middleware from './Middleware';
import { Main } from '../../components/Main';
import Project from '../../components/Project';

export default function Projects(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.updatePath();
    dispatch(Middleware.fetchProjects());
  }, []);

  const projects = useSelector(store => store.projects);

  return (
    <Main>
      {
        projects
            .filter(project => !project.hidden)
            .sort((a, b) => {
              const titleA = a.title.toUpperCase();
              const titleB = b.title.toUpperCase();
              if (titleA < titleB) {
                return -1;
              }
              if (titleA > titleB) {
                return 1;
              }
              return 0;
            })
            .map((project, index) => {
              return (
                <Project
                  key={index}
                  src={project.src}
                  background={project.background}
                  title={project.title}
                  subtitle={project.subtitle}
                  href={project.href}
                  size={project.size}
                />
              );
            })
      }
    </Main>
  );
}
