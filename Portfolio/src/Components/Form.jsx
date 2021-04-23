import React from "react";
import styles from "./Form.module.css";

const Form = () => {

    // const handleSubmit = () => {

    // }
    return (
        <>
            <div className={styles.cover}>
                <div className={styles.imageCover}>
                    <img src="Collab.webp" alt="Collab"/>
                </div>
                <form className={styles.form} action="mailto:surajbhansingh588@gmail.com"
                method="post"
                enctype="text/plain">
                    <input type="text" name="name" placeholder="Name..."/>
                    <input type="text" name="email" placeholder="Email..."/>
                    <input type="text" name="msg" placeholder="Your message..."/><br/>
                    <div>
                        <button type="submit">Send message</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
export default Form;
