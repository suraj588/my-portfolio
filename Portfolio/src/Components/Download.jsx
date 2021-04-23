import React from "react";
import styles from "./Download.module.css";

const Download = () => {
    return (
        <div className={styles.linkCover}>
            <a href="Resume.pdf" download className={styles.link}>
                <button className={styles.btn}>
                    Download <img src="Download.jpg" alt="download"/>
                </button>
            </a>
        </div>
    )
}
export default Download;