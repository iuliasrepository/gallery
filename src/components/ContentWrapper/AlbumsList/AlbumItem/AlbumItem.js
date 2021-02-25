import React from "react"
import "./albumItem.module.sass"
import style from "./albumItem.module.sass"
import { MdPhotoLibrary } from "react-icons/md"

function AlbumItem({ title, cover, count }) {
    // обложкой альбома передаётся последняя фотка внутри альбома в маленьком размере: thumbnailUrl
    return (
        <div className={style.album}>
            <div className={style.cover}>
                <img src={cover.thumbnailUrl} alt={title} />
            </div>
            <div className={style.text}>
                <span className={style.title}>{title}</span>
                <span className={style.count}>
                    <MdPhotoLibrary />
                    {count}
                </span>
            </div>
        </div>
    )
}

export default AlbumItem
