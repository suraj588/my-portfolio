import React from "react";
import Heading from "../Components/Heading";
import TopNav from "../Components/TopNav";
import object from "../utils/utils.json";
import Project from "../Components/Project";
import Footer from "../Components/Footer";
import {v4 as uuid} from "uuid";
const headings = object.headings;
const projects = object.projects;

const Projects = () => {
    
    return (
        <>
            <TopNav/>
            <Heading heading={headings[0]}/>
            {projects.map(project=><Project key={uuid()}project={project}/>)}
            <Footer/>
        </>
    )
}
export default Projects;