import React from "react";
import Layout from "../components/layout/Layout";
import styles from "./index.module.scss";

const Home = () => {
    return <Layout title="Portfolio">
        {/* SECTION CONTACT */}
        <div className={`row align-items-center justify-content-evenly ${styles.contactSection}`}>
            <div className="col-4">
                <div className={styles.centerDiv}>
                    <p className={styles.contactTitle}>Let's Connect</p>
                    <p className={styles.contactSubtitle}>Let's talk together to find a solution for your project</p>
                </div>
            </div>
            <div className="col-4">
                <p>Let me a message</p>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="inputName" />
                        <label htmlFor="inputName">Your Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="inputEmail" />
                        <label htmlFor="inputEmail">Your Email</label>
                    </div>
                    
                    <div className="form-floating mb-5">
                        <textarea className="form-control" id="inputProject"></textarea>
                        <label htmlFor="inputProject">Your Project</label>
                    </div>
                    <button type="submit" className={`btn ${styles.contactBtn}`}>Submit</button>
                </form>
            </div>
        </div>
    </Layout>
}


export default Home;