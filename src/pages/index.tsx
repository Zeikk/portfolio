import Image from 'next/image'
import styles from '@/styles/index.module.css';
import Link from 'next/link';
import CardAbility from '../components/CardAbility';

const Home = () => {
    return (
        <>
            {/* SECTION INTRO */}
            <section className="container my-5">
                <div className="mx-32">
                    <div className={`my-2 ${styles.title}`}>
                        <p>Loïck</p>
                        <p>LEPRÉVOST</p>
                    </div>
                    <div className={styles.subtitle}>
                        <p className='m-0'>Freelance <span className={styles.job}>Fullstack Développeur</span></p>
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
                        width="300"
                        height="300"
                    />
                </div>
            </section>
            {/* SECTION WORK EXPERIENCE */}
            <section className={`flex justify-around ${styles.workSection}`}>
                <div className='w-1/3'>
                    <div className={`text-center`}>
                        <p className={styles.workYear}>{new Date().getFullYear() - 2020} +</p>
                        <div className={`my-4 ${styles.workDescription}`}>
                            <p>Années</p>
                            <p>d'Expérience</p>
                            <p>Professionnelle</p>
                        </div>
                    </div>
                </div>
                <div className='w-2/3'>
                    <div className={styles.workTitle}>
                        <p>Fullstack développeur</p>
                        <p className="my-2">Apprenti Ingénieur en Informatique, spécialisé en Cybersécurité et E-Paiement.</p>
                    </div>
                    <div className="px-8 grid grid-cols-3 gap-8">
                        <CardAbility
                            iconPath="images/web-icon.svg"
                            ability="Développeur ReactJS"
                        />
                        <CardAbility
                            iconPath="images/web-icon.svg"
                            ability="Développeur NodeJS"
                        />
                        <CardAbility
                            iconPath="images/web-icon.svg"
                            ability="Développpeur Python"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
