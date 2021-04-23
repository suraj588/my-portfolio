import React from "react"
import styles from "./Footer.module.css";
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";
import {HiMail} from "react-icons/hi"
import { useHistory } from "react-router";

const Footer = () => {
    const history = useHistory();

    const contactPage = () => {
        history.push("/contact");
    }
    return (
        <>
            <div className={styles.cover}>
                <div>
                    <div>Let's Work Together</div>
                    <div>Have a project you would like to discuss?</div>
                    <button onClick={contactPage}>Get in Touch</button>
                </div>
                <div>
                    <div>
                    <HiMail style={{fontSize:"32px",color:"white"}}/>
                        <div>surajbhansingh588@gmail.com</div>
                    </div>
                    <div>
                    <FaLinkedin style={{color:"white",fontSize:"32px"}}/>
                        <a href="https://www.linkedin.com/in/suraj-bhan-singh">Linked-in</a>
                    </div>
                    <div>
                        <FaGithubSquare style={{color:"white",fontSize:"32px"}}/>
                        <a href="https://github.com/suraj588">Github</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
