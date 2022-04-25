import React, { useState } from "react";
import styles from "./contactform.module.scss";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMail, setErrorMail] = useState(false);
    const [validate, setValidate] = useState(0);

    const validMail = (mail) => {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
    }

    const handleSubmit = (e) => {

        console.log("SUBMIT")
        e.preventDefault()
        let data = {
            name,
            email,
            message
        }

        if (validMail(email)) {

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
                    setValidate(1);
                    setTimeout(function () {
                        setValidate(0);
                    }, 5000);
                } else {
                    setValidate(2);
                    setTimeout(function () {
                        setValidate(0);
                    }, 5000);
                }
            })
        } else {
            setErrorMail(true);
        }

    };

    return <div className="container"><div className={`row align-items-center justify-content-evenly ${styles.contactSection}`}>
        <div className="col-sm-4">
            <div className={styles.centerDiv}>
                <p className={styles.contactTitle}>N'hésitez pas</p>
                <p className={styles.contactSubtitle}>Parlons ensemble et trouvons la solution adéquate pour votre projet</p>
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
                    <li className="list-inline-item">
                        <a href="https://github.com/Zeikk" className="text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`col-lg-4 col-md-6 ${styles.contactForm}`}>
            <p>Laissez-moi un message</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="inputName">Votre Nom</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className={`form-control  ${errorMail && "is-invalid"}`} id="inputEmail" value={email} onChange={(e) => { setEmail(e.target.value); setErrorMail(false) }} required />
                    <label htmlFor="inputEmail">Votre Mail</label>
                </div>

                <div className="form-floating mb-5">
                    <textarea className="form-control" id="inputProject" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <label htmlFor="inputProject">Votre Projet</label>
                </div>
                <button type="submit" className={`btn ${styles.contactBtn}`} >Envoyer</button>
            </form>
        </div>

    </div>
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
            <div id="liveToast" className={`toast ${validate == 1 ? "bg-success" : ""} ${validate == 2 ? "bg-danger" : ""} ${validate > 0 && styles.active}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {
                        validate == 1 && (
                            <>
                                <span className="material-icons">
                                    done
                                </span>
                                <strong className="ms-2 me-auto">Mail envoyé</strong>
                            </>
                        )
                    }
                    {
                        validate == 2 && (
                            <>
                                <span className="material-icons">
                                    block
                                </span>
                                <strong className="ms-2 me-auto">Une erreur est survenue</strong>
                            </>
                        )
                    }

                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={(e) => setValidate(0)}></button>
                </div>
            </div>
        </div>
    </div>
}

export default ContactForm;