import { Toast } from 'flowbite-react';
import { ReactElement, useEffect, useState } from 'react';

const TOASTS: { severity: string, color: string, icon: ReactElement, message: string }[] = [{
    severity: "success",
    color: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    icon: <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>,
    message: "Mail envoyé"
}, {
    severity: "error",
    color: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    icon: <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>,
    message: "Erreur lors de l'envoi du mail"
}]

const DISABLE = "transition-opacity duration-300 ease-out opacity-0 "

const ENABLE = "transition-opacity duration-300 ease-out opacity-100"

const ConfirmationToast = ({ severity }: { severity: string }) => {

    const toast = TOASTS.find((toast) => toast.severity == severity)
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisable(true)
        }, 5000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <Toast className={`${disable ? DISABLE : ENABLE}  absolute`}>
            <div className={`${toast?.color} inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg`}>
                {toast?.icon}
            </div>
            <div className="ml-3 text-sm font-normal">
                {toast?.message}
            </div>
            <Toast.Toggle />
        </Toast>
    )
}

export default ConfirmationToast;