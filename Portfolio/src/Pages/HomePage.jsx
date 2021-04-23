import React from "react"
import FeaturedHeading from "../Components/FeaturedHeading"
import Footer from "../Components/Footer"
import Project from "../Components/Project"
import SampleStack from "../Components/SampleStack"
import Summary from "../Components/Summary"
import TopNav from "../Components/TopNav"
import object from "../utils/utils.json";
const HomePage = () => {
    const projects = object.projects;
    return (
        <>
            <TopNav/>
            <Summary/>
            <FeaturedHeading/>
            <Project project={projects[0]}/>
            <SampleStack/>
            <Footer/>
        </>
    )
}
export default HomePage;