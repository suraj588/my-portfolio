import React from "react";
import styles from "./Form.module.css";
import axios from "axios";

const initState = {
    sender:"",
    email_id:"",
    msg:""
}

const Form = () => {
    const [details,setDetails] = React.useState(initState);
    const [isPosting,setIsPosting] = React.useState(false);
    const [isPosted,setIsPosted] = React.useState(false);
    const [isError,setIsError] = React.useState(false);
    const [postError,setPostError] = React.useState(false);

    const handleChange = (e) => {
        let {name,value} = e.target;
        setDetails(details => {
            return {...details,[name]:value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsError(false);
        const url = process.env.REACT_APP_SERVER_URL;
        if(details.name !== "" && details.email_id !=="" && details.msg !==""){
            setIsPosting(true);
            axios.post(url,{
                ...details,
                date: new Date().toLocaleString()
            })
            .then(() => {
                setIsPosting(false);
                setIsPosted(true);
                setDetails(initState);
            })
            .catch(err => {
                console.log(err);
                setPostError(true);
                setIsPosting(false);
            })
        }
        else {
            setIsError(true);
        }
    }
    return (
        <>
            <div id="contact" className={styles.cover}>
                <div className={styles.imageCover}>
                    <img src="../../Collab.webp" alt="Collab"/>
                </div>
                <form className={styles.form} onSubmit = {handleSubmit}>
                    <div>
                        <input value = {details.sender} onChange = {handleChange} type="text" name="sender" placeholder="Name..."/>
                        <input value = {details.email_id} onChange = {handleChange} type="text" name="email_id" placeholder="Email..."/>
                        <input value = {details.msg} onChange = {handleChange} type="text" name="msg" placeholder="Your message..."/><br/>
                        <div>
                            <button type="submit">Send message</button>
                        </div>
                        {isError?<div className={styles.errMsg+" "+styles.msg}>This was not expected of you 🥺 <br/> Kindly fill all the fields.</div>:null}
                        {postError?<div className={styles.errMsg+" "+styles.msg}>Server error 🤒</div>:null}
                        {isPosting?<div className={styles.posting+" "+styles.msg}>Posting 🏃‍♂️...</div>:null}
                        {isPosted?<div className={styles.successMsg+" "+styles.msg}>Message sent successfully 🥳</div>:null}
                    </div>
                </form>
                
            </div>
            
        </>
    )
}
export default Form;
