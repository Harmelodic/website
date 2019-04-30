import React from "react";
import Middleware from "../redux/Middleware";
import { Store } from "../redux/Store";
import Menu from "../components/Menu";
import { StyledFadeInDiv } from "../components/Stylings";
import Project from "../components/Project";
import { StyledProjects } from "../components/Stylings";

export default class OpenSource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openSourceProjects: Store.getState().openSourceProjects
        }
    }

    componentDidMount() {
        this.unsubscribe = Store.subscribe(() => {
            this.setState({
                openSourceProjects: Store.getState().openSourceProjects
            })
        })

        Store.dispatch(Middleware.fetchOpenSourceProjects());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <Menu openSource={true} />
                <StyledFadeInDiv>
                    <StyledProjects>
                        {
                            this.state.openSourceProjects
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
                                        />
                                    )
                                })
                        }
                    </StyledProjects>
                </StyledFadeInDiv>
            </div>
        )
    }
}