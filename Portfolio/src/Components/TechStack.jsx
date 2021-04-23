import React from "react";
import styles from "./TechStack.module.css";

const TechStack = () => {
    return (
        <>
            <div className={styles.heading}>My Tech Stack</div>
            <div className={styles.cover}>
                <img src="HTML.png" alt="HTML" title="HTML5"/>
                <img src="Css.jpg" alt="CSS" title="CSS3"/>
                <img src="js.jpg" alt="JS" title="JavaScript"/>
                <img src="logo192.png" alt="React" title="React.js"/>
                <img src="nodejs.png" alt="Node" title="Node.js"/>
                <img src="express1.png" alt="Express" title="Express.js"/>
                <img src="mongodb.png" alt="Mongodb" title="MongoDB"/>
                <img src="mysql.png" alt="Mysql" title="MySQL"/>
            </div>
        </>
    )
}
export default TechStack;