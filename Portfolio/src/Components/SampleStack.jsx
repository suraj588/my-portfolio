import React from "react";
import styles from "./SampleStack.module.css";

const SampleStack = () => {
    return (
        <div className={styles.outerCover}>
            <div className={styles.heading}>My Services</div>
            <div className={styles.contentCover}>
                <div>
                    <img src="Front-end.png" alt="FE"/>
                    <div>Front-End Development</div>
                    <div>User Focused</div>
                    <div>Responsive and clean websites with prime focus on the user's expectations.</div>
                </div>
                <div>
                    <img src="Back-end.png" alt="BE"/>
                    <div>Back-End Development</div>
                    <div>Fast</div>
                    <div>Developing easy to use REST-API's as per requirement of  front-end developers.</div>
                </div>
            </div>
            <div className={styles.btnCover}>
                <button className={styles.services}>View All Stack</button>
            </div>
            
        </div>
    )
}
export default SampleStack;