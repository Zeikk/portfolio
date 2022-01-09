import React from "react";
import Layout from "../components/layout/Layout";
import styles from "./index.module.scss";

const Home = () => {
    return <Layout title="Portfolio">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-7">
                    <div className={styles.intro}>
                        <div className={styles.title}>
                            <p style={{ margin: 0 }}>Loïck</p>
                            <p>LEPREVOST</p>
                        </div>
                        <div className={styles.subtitle}>
                            <p style={{ margin: 0 }}>Freelance <span className={styles.job}>Fullstack Developer</span></p>
                            <p>Based in France</p>
                        </div>
                        <button type="button" className={`btn ${styles.contactBtn}`}>Contact Me</button>
                    </div>
                </div>
                <div className="col-5">
                    <div className={styles.bgImg}>
                    </div>
                    <div >
                        <img src="../static/images/freelance.svg" className={styles.img} />
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor: "red"}}>
            TEST
        </div>
    </Layout>
}


export default Home;