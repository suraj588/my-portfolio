import React from "react";
import {Link} from "react-router-dom";
import styles from "./TopNav.module.css";
const TopNav = () => {
    
    const menuIcon = React.useRef();
    const crossIcon = React.useRef();
    const listCover = React.useRef();
    const handleMenuIcon = () => {
        listCover.current.style.display = "block";
        crossIcon.current.style.display = "block";
    }
    const handleCrossIcon = () => {
        listCover.current.style.display = "none";
    }
    return (
        <>
            <div className={styles.navCover}>
                <div className ={styles.name}>
                    <Link to="/">SURAJ SINGH</Link>
                </div>
                
                <div onClick={handleMenuIcon} ref={menuIcon} className={styles.menuIcon}>&#9776;</div>  
                
                <div ref={listCover} className={styles.listCover}>
                    <div onClick={handleCrossIcon} className={styles.crossIcon} ref={crossIcon}>&#9932;</div>
                    <div className={styles.listItem}>
                        <Link to="/about">About</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to="/resume">Resume</Link>
                    </div>
                    <div className={styles.listItem}>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopNav;