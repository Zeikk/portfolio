import React, { useState } from "react";
import styles from "./contactform.module.scss";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                setName('')
                setEmail('')
                setMessage('')
            }
        })
    };

    return <div className="container"><div className={`row align-items-center justify-content-evenly ${styles.contactSection}`}>
        <div className="col-sm-4">
            <div className={styles.centerDiv}>
                <p className={styles.contactTitle}>Let's Connect</p>
                <p className={styles.contactSubtitle}>Let's talk together to find a solution for your project</p>
                <ul className={`list-inline ${styles.listLink}`}>
                    <li className="list-inline-item">
                        <a href="mailto:loick.leprevost@gmail.com" className="text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/lo%C3%AFck-leprevost-46a627181/" className="text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`col-sm-4 ${styles.contactForm}`}>
            <p>Let me a message</p>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="inputName">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="inputEmail">Your Email</label>
                </div>

                <div className="form-floating mb-5">
                    <textarea className="form-control" id="inputProject" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <label htmlFor="inputProject">Your Project</label>
                </div>
                <button type="submit" className={`btn ${styles.contactBtn}`} onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    </div>
    </div>
}

export default ContactForm;