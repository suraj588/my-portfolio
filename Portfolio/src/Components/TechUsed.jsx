import React from "react";
import styles from "./TechUsed.module.css";
import {v4 as uuid} from "uuid";

const TechUsed = ({techUsed}) => {
    return (
        <div className={styles.cover}>
            {techUsed.map(tech=>{
                return (
                    <div key={uuid()}>{tech}</div>
                )
            })}
        </div>
    )
}
export default TechUsed;