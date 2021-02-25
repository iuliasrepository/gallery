import React from "react"
import styles from "./photoItem.module.sass"

function PhotoItem({ title, thumbnailUrl, onClick }) {
    // для отображения фото в списке фото используется маленькое изображение: thumbnailUrl
    // для отображения фото при его просмотре используется большое изображение: url
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <img src={thumbnailUrl} alt={title} />
            <div className={styles.info}>
                {title}
            </div>
        </div>
    )
}

export default PhotoItem
