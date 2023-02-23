import React, { FormEvent, useState } from "react";
import styles from '@/styles/contactForm.module.css';
import { Spinner } from "flowbite-react";

const ContactForm = ({ triggerToast }: { triggerToast: (severity: string) => void }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMail, setErrorMail] = useState(false);
    const [loading, setLoading] = useState(false);

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
            setLoading(true)

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                if (res.status === 200) {
                    setName('')
                    setEmail('')
                    setMessage('')
                    triggerToast("success")
                } else {
                    triggerToast("error")
                }
                setLoading(false)

            }).catch((err) => {
                console.error(err)
                setLoading(false)
                triggerToast("error")
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
                        <input required disabled={loading} type="text" value={name} onChange={(e) => setName(e.target.value)} name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="mail" className={`block text-xs font-medium ${errorMail ? "text-red-700" : "text-gray-700"}`}>Votre Mail</label>
                    <input required disabled={loading} type="text" value={email} onChange={(e) => { setEmail(e.target.value), setErrorMail(false) }} name="mail" id="mail" autoComplete="mail" className={`mt-1 block w-full rounded-md ${errorMail ? "border-red-500 text-red-700" : "border-gray-300"} shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`} />
                    {errorMail && <p className="mt-2 text-sm text-red-600 dark:text-red-500">Email mal formé</p>}
                </div>

                <div className="my-4">
                    <label htmlFor="content" className="block text-xs font-medium text-gray-700">Votre Message</label>
                    <textarea required disabled={loading} value={message} onChange={(e) => setMessage(e.target.value)} name="content" id="content" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" className={`${styles.submitButton}`} disabled={loading} >
                    <div className="flex">{loading ? <>
                        <p>Envoi en cours</p>
                        <div className="ml-3">
                            <Spinner
                                size="sm"
                                light={true}
                            />
                        </div></> : "Envoyer"}
                    </div>
                </button>
            </form>
        </div>
    )
}

export default ContactForm;