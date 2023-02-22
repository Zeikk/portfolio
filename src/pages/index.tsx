import Image from 'next/image'
import styles from '@/styles/index.module.css';
import Link from 'next/link';
import CardAbility from '../components/CardAbility';
import ContactForm from '../components/ContactForm';
import Toast from "../components/Toast";
import { useState } from 'react';

const Home = () => {

    const [toasts, setToasts] = useState<string[]>([])

    const triggerToast = (severity: string): void => {
        setToasts([...toasts, severity])
    }

    return (
        <>
            {/* SECTION INTRO */}
            <section className={`container flex-col md:flex-row bg-white`}>
                <div className="mx-10 md:mx-32">
                    <div className={`my-2 ${styles.title}`}>
                        <p>Loïck</p>
                        <p>LEPRÉVOST</p>
                    </div>
                    <div className={styles.subtitle}>
                        <p className='m-0'>Freelance <span className={styles.job} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Fullstack Développeur</span></p>
                        <p>Basé en France</p>
                    </div>
                    <Link href="/#contact">
                        <button type="button" className={`my-5 contactBtn`}>
                            Contactez-moi
                        </button>
                    </Link>
                </div>

                <div>
                    <div className={styles.bgImg}></div>
                    <Image
                        src="images/freelance.svg"
                        alt="Developer picture"
                        className={styles.img}
                        width="30"
                        height="30"
                    />
                </div>
            </section>
            {/* SECTION WORK EXPERIENCE */}
            <section className={`md:flex justify-around ${styles.workSection}`}>
                <div className='md:w-1/3'>
                    <div className={`text-center flex justify-evenly md:block`}>
                        <p className={styles.workYear}>{new Date().getFullYear() - 2020} +</p>
                        <div className={`my-4 ${styles.workDescription}`}>
                            <p>Années</p>
                            <p>d&apos;Expérience</p>
                            <p>Professionnelle</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-2/3'>
                    <div className={`text-center md:text-left ${styles.workTitle}`}>
                        <p>Fullstack développeur</p>
                        <p className="my-2">Apprenti Ingénieur en Informatique, spécialisé en Cybersécurité et E-Paiement.</p>
                    </div>
                    <div className="px-8 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-8 mx-2 md:mx-0">
                        <CardAbility
                            iconPath="images/web-icon.svg"
                            ability="ReactJS"
                        />
                        <CardAbility
                            iconPath="images/code-icon.svg"
                            ability="NodeJS"
                        />
                        <CardAbility
                            iconPath="images/query-icon.svg"
                            ability="Python / Pandas"
                        />
                    </div>
                </div>
            </section>
            {/* SECTION CONTACT */}
            <section id="contact" className={`container flex-col md:flex-row justify-evenly items-center py-12 bg-white`}>
                <div className="mx-10 md:w-1/4">
                    <p className={`my-5 ${styles.contactTitle}`}>N&apos;hésitez pas</p>
                    <p className={`my-2 ${styles.contactSubtitle}`}>Parlons ensemble et trouvons la solution adéquate pour votre projet</p>
                    <ul className={`flex justify-between w-20 my-4 ${styles.listIcons}`}>
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
                <div className="mx-10 md:w-1/4">
                    <ContactForm triggerToast={triggerToast} />
                </div>
            </section>
            <section className={`container flex justify-center`}>
                {toasts.map((severity, index) => <Toast key={index} severity={severity} />)}
            </section>

        </>
    )
}

export default Home;
