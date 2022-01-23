import React from "react";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/common/ContactForm";
import styles from "./contact.module.scss";

const Contact = () => {
    return <Layout title="Portfolio">
        {/* SECTION CONTACT */}
        <div className={styles.containerContact}>
        <ContactForm /></div>
    </Layout>
}


export default Contact;