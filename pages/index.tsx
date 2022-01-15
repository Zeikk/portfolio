import React from "react";
import Link from 'next/link';
import Layout from "../components/layout/Layout";
import ContactForm from "../components/common/ContactForm";
import styles from "./index.module.scss";

const Home = () => {
    return <Layout title="Portfolio">
        {/* SECTION INTRO */}
        <div className="container">
            <div className="row align-items-center">
                <div className="col-7">
                    <div className={styles.centerDiv}>
                        <div className={styles.title}>
                            <p style={{ margin: 0 }}>Loïck</p>
                            <p>LEPREVOST</p>
                        </div>
                        <div className={styles.subtitle}>
                            <p style={{ margin: 0 }}>Freelance <span className={styles.job}>Fullstack Developer</span></p>
                            <p>Based in France</p>
                        </div>
                        <Link href="/contact">
                            <button type="button" className={`btn ${styles.contactBtn}`}>
                                Contact Me
                            </button>
                        </Link>
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
        {/* SECTION WORK EXPERIENCE */}
        <div className={`row align-items-center bg-light ${styles.workSection}`}>
            <div className="col-4">
                <div className={styles.centerDiv}>
                    <p className={styles.workYear}>2 +</p>
                    <div className={styles.workDescription}>
                        <p>Years</p>
                        <p>Experience</p>
                        <p>Working</p>
                    </div>
                </div>
            </div>
            <div className="col-7">
                <p className={styles.workTitle}>Fullstack developer and IT engineer student, specialized in Cybersecurity and E-payment.</p>
                <div className="container">
                    <div className="row align-items-center justify-content-evenly">
                        <div className="col-4">
                            <div className={`card ${styles.borderColor}`}>
                                <div className="card-body">
                                    <span className="material-icons">
                                        web
                                    </span>
                                    <h5 className="card-title">Fullstack developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`card ${styles.borderColor}`}>
                                <div className="card-body">
                                    <span className="material-icons">
                                        code
                                    </span>
                                    <h5 className="card-title">Software developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className={`card ${styles.borderColor}`}>
                                <div className="card-body">
                                    <span className="material-icons">
                                        architecture
                                    </span>
                                    <h5 className="card-title">Software Architect</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SECTION CONTACT */}
        <ContactForm />
    </Layout>
}


export default Home;