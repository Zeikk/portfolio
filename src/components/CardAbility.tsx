import React from "react";
import Image from 'next/image'
import styles from "@/styles/cardAbility.module.css";

const CardAbility = ({ iconPath, ability }: { iconPath: string, ability: string }) => {

    return (
        <div className={`${styles.card}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Image
                src={iconPath}
                alt="icon"
                width="24"
                height="24"
            />
            <h5 className={`mt-2 ${styles.cardTitle}`}>{ability}</h5>
        </div>
    )
}

export default CardAbility;