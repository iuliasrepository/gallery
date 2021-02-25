import React from "react"
import AlbumItem from "./AlbumItem/AlbumItem"
import { Link, useParams } from "react-router-dom"
import wrapperStyle from "../contentWrapper.module.sass"

function AlbumsList({ albums, user }) {
    const { userId } = useParams()

    return (
        <div className={wrapperStyle.wrapper}>
            <div className={wrapperStyle.content}>
                <h1 className={wrapperStyle.header}>
                    {`${user.name}'s albums`}
                </h1>
                <div className={wrapperStyle.elements}>
                    {
                        albums.map(album =>
                            <Link to={`/users/${userId}/albums/${album.id}`} key={album.id}>
                                <AlbumItem
                                    title={album.title}
                                    cover={album.photos[album.photos.length - 1]}
                                    count={album.photos.length}
                                />
                            </Link>)
                    }
                </div>
            </div>
        </div>
    )

}

export default AlbumsList
