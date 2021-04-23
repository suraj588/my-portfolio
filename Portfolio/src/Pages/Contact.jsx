import React from "react";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Heading from "../Components/Heading";
import TopNav from "../Components/TopNav";
import object from "../utils/utils.json";

const headings = object.headings;

const Contact = () => {
    return (
        <>
            <TopNav/>
            <Heading heading={headings[2]}/>
            <Form/>
            <Footer/>
        </>
    )
}
export default Contact;