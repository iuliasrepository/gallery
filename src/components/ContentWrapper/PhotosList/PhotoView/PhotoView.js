import React from "react"
import styles from "./photoView.module.sass"
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5"

function PhotoView({ photo, ...handlers }) {

    return (
        <div className={styles.modalPage}>
            <div className={styles.modalWrapper}>
                <h1 className={styles.close} onClick={handlers.close}><IoClose/></h1>
                <div className={`${styles.control} ${styles['control__left']}`} onClick={handlers.prev}>
                    <IoChevronBack size="1.3rem"/>
                </div>
                <img src={photo} alt={photo} />
                <div className={`${styles.control} ${styles['control__right']}`} onClick={handlers.next}>
                    <IoChevronForward size="1.3rem"/>
                </div>
            </div>
        </div>
)
}

export default PhotoView
