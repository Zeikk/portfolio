import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = ({ title, path }: { title: string, path: string }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Hello, I'm Loïck LEPRÉVOST a Freelance Fullstack developer. Contact me to develop your website."/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="icon" type="image/png" href="favicon-32x32.png" />
        </Head>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className={`container-fluid ${styles.MarginNavbar}`}>
                    <Link href="/">
                        <a className={`navbar-brand ${styles.TitleBrand}`} href="#">Loïck</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className={`d-flex ${styles.Right}`}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className={`nav-link ${path == "/" ? "active" : ""}`} aria-current="page" >Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/contact">
                                        <a className={`nav-link ${path == "/contact" ? "active" : ""}`} aria-current="page">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    </>
);

export default Header;