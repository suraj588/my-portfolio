import React from "react";
import { useHistory } from "react-router";
import styles from "./Summary.module.css";
const Summary = () => {
    const history=useHistory();
    const toProjects = () => {
        history.push("/projects");
    }
    return (
        <>
            <div className={styles.summaryCover}>
                <div className={styles.leftPanel}>
                    <div>Hey, I'm Suraj.</div>
                    <div>Full Stack Web Developer, passionate about creating web-based products and solving problems related to it. Highly enthusiast to learn and work with latest technologies. </div>
                    <button onClick={toProjects}>My Projects</button>
                </div>
                <div className={styles.rightPanel}>
                    <img src="suraj.jpg" alt="profile_pic"/>
                </div>
                
            </div>
        </>
    )
}
export default Summary;
