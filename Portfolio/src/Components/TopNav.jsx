import React from "react";
import {Link} from "react-router-dom";
import styles from "./TopNav.module.css";
const TopNav = () => {
    return (
        <>
            <div className={styles.navCover}>
                <div className ={styles.name}>
                    <Link to="/">SURAJ SINGH</Link>
                </div>

                <div className={styles.listCover}>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div>
                        <Link to="/resume">Resume</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopNav;