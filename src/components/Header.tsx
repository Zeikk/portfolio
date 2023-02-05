import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/header.module.css';

const Header = ({ title }: { title: string }) => {

    const [actif, setActif] = useState('');

    useEffect(() => {
        setActif(window.location.pathname)
    }, [])

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Bonjour, Je suis Loïck LEPRÉVOST, Freelance Fullstack Développeur. Contactez-moi pour développer votre projetContact me to develop your website." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="favicon-32x32.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            <header>
                <div className="grid grid-cols-10 gap-4 text-center py-6">
                    <Link href="/" className={`col-start-2 ${styles.title}`}>
                        Loïck
                    </Link>
                    <div className="col-start-8 col-span-2 flex justify-evenly">
                        <Link href="/" className={`${styles.link} ${actif == '/' || actif == '' ? styles.active : ''}`}>
                            Accueil
                        </Link>
                        <Link href="/#contact" scroll={false} className={`${styles.link} ${actif == '/#contact' ? styles.active : ""}`}>
                            Contact
                        </Link>
                    </div>

                </div>

            </header>
        </>
    )
};

export default Header;