import React from "react";
import CV from "../Components/CV";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import Heading from "../Components/Heading";
import TopNav from "../Components/TopNav";
import object from "../utils/utils.json";

const headings = object.headings;

const Resume = () => {
    return (
        <>
            <TopNav/>
            <Heading heading={headings[1]}/>
            <CV/>
            <Download/>
            <Footer/>
        </>
    )
}
export default Resume;