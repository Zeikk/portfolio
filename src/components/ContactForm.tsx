import React, { FormEvent, useState } from "react";
import styles from '@/styles/contactForm.module.css';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMail, setErrorMail] = useState(false);
    const [validate, setValidate] = useState(0);

    const validMail = (mail: string) => {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

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
                console.log(res)

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

    return (
        <div className={``}>
            <p className="font-medium text-base mb-5">Laissez-moi un message</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="md:col-span-1">
                    <div className="my-4">
                        <label htmlFor="first-name" className="block text-xs font-medium text-gray-700">Votre Nom</label>
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="mail" className="block text-xs font-medium text-gray-700">Votre Mail</label>
                    <input type="text" name="mail" id="mail" autoComplete="mail" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className="my-4">
                    <label htmlFor="content" className="block text-xs font-medium text-gray-700">Votre Message</label>
                    <textarea name="content" id="content" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" className={`${styles.submitButton}`} >Envoyer</button>
            </form>
        </div>
    )
}

export default ContactForm;