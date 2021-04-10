import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Middleware from './Middleware';
import { Main } from '../../components/Main';
import Project from '../../components/Project';

const OpenSourceMain = styled(Main)`
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    padding-top: 20px;
`;

export default function OpenSource(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    props.updatePath();
    dispatch(Middleware.fetchOpenSourceProjects());
  }, []);

  const openSourceProjects = useSelector(store => store.openSourceProjects);

  return (
    <OpenSourceMain>
      {
        openSourceProjects
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
    </OpenSourceMain>
  );
}
