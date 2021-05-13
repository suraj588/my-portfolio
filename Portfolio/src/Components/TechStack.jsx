import React from "react";
import styles from "./TechStack.module.css";

const TechStack = () => {
    return (
        <>
            <div id="tech_stack" className={styles.heading}>My Tech Stack 🛠</div>
            <div className={styles.cover}>
                <div>
                    <img src="../../HTML.png" alt="HTML" title="HTML5"/>
                    <div>HTML</div>
                </div>
                <div>
                    <img src="../../Css.jpg" alt="CSS" title="CSS3"/>
                    <div>CSS</div>
                </div>
                <div>
                    <img src="../../js.jpg" alt="JS" title="JavaScript"/>
                    <div>JavaScript</div>
                </div>
                <div>
                    <img src="../../logo192.png" alt="React" title="React.js"/>
                    <div>React.JS</div>
                </div>
                <div>
                    <img src="../../nodejs.png" alt="Node" title="Node.js"/>
                    <div>Node.JS</div>
                </div>
                <div>
                    <img src="../../express1.png" alt="Express" title="Express.js"/>
                    <div>Express.JS</div>
                </div>
                <div>
                    <img src="../../mongodb.png" alt="Mongodb" title="MongoDB"/>
                    <div>MongoDB</div>
                </div>
                <div>
                    <img src="../../mysql.png" alt="Mysql" title="MySQL"/>
                    <div>MySQL</div>
                </div>
            </div>
        </>
    )
}
export default TechStack;