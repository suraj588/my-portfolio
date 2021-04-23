import React from "react";
import styles from "./Heading.module.css";
const Heading = ({heading}) => {
    return (
        <>
            <div className={styles.cover}>
                <div>
                    {heading.name}
                </div>
                <div>
                    {heading.desc}
                </div>
            </div>
        </>
    )
}
export default Heading;