import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/header.module.css';

const Header = ({ title }: { title: string }) => {

    const [actif, setActif] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const url = window.location.href.split('/')
        setActif(url.length > 0 ? `/${url.pop()}` : '/')
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
                <div className={`grid grid-cols-10 gap-4 text-center ${open ? 'pt-6' : 'py-6'}`}>
                    <Link href="/" className={`col-start-2 ${styles.title}`}>
                        Loïck
                    </Link>
                    <div className='col-start-8 col-span-2 '>
                        <div className="hidden md:flex justify-evenly">
                            <Link href="/" className={`${styles.link} ${actif == '/' || actif == '' ? styles.active : ''}`}>
                                Accueil
                            </Link>
                            <Link href="/#contact" scroll={false} className={`${styles.link} ${actif == '/#contact' ? styles.active : ""}`}>
                                Contact
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${open ? "visible" : "hidden"}  w-full text-left ml-10`}>
                    <ul className={`flex flex-col bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}>
                        <li className="py-2">
                            <Link href="/" className={`${styles.link} ${actif == '/' || actif == '' ? styles.active : ''}`}>
                                Accueil
                            </Link>
                        </li>
                        <li className="py-3">
                            <Link href="/#contact" scroll={false} className={`${styles.link} ${actif == '/#contact' ? styles.active : ""}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header;