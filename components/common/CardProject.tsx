import React, { useState } from "react";
import styles from "./cardproject.module.scss";

const CardProject = ({ title, subtitle, url, img }: { title: string, subtitle: string, url: string, img: string }) => {

    return <div className="card">
        <a href={url} className="text-decoration-none">
            <div className={`card-body ${styles.headerCard}`}>
                <p className={styles.titleCard}>{title}</p>
                <p className={styles.subtitleCard}>{subtitle}</p>
            </div>
            <img src={img} className={`card-img-top ${styles.img}`} />
        </a>
    </div>

}

export default CardProject;