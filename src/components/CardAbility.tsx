import React from "react";
import Image from 'next/image'
import styles from "@/styles/cardAbility.module.css";

const CardAbility = ({ iconPath, ability }: { iconPath: string, ability: string }) => {

    return (
        <div className={`${styles.card}`}>
            <Image
                src={iconPath}
                alt="icon"
                width="24"
                height="24"
            />
            <h5 className={`mt-2 ${styles.cardTitle} text-main`}>{ability}</h5>
        </div>
    )
}

export default CardAbility;