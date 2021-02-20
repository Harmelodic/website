import React from 'react';
import Middleware from './Middleware';
import { Store } from '../Store';
import Nav from '../components/Nav';
import { Main } from '../components/Main';
import Project from '../components/Project';

export default class OpenSource extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openSourceProjects: Store.getState().openSourceProjects,
    };
  }

  componentDidMount() {
    this.unsubscribe = Store.subscribe(() => {
      this.setState({
        openSourceProjects: Store.getState().openSourceProjects,
      });
    });

    Store.dispatch(Middleware.fetchOpenSourceProjects());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Nav openSource={true} />
        <Main>
          {
            this.state.openSourceProjects
                .filter((project) => !project.hidden)
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
      </div>
    );
  }
}
