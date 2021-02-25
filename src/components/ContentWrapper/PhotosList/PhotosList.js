import React, { Fragment, useState, useMemo } from "react"
import { useParams, useHistory } from "react-router-dom"
import PhotoView from "./PhotoView/PhotoView"
import PhotoItem from "./PhotoItem/PhotoItem"
import wrapperStyle from "../contentWrapper.module.sass"
import styles from "./photosList.module.sass"
import {HiOutlineArrowNarrowLeft} from "react-icons/hi"

//расчёт индекса следующего фото при перелистывании при просмотре
const
    getNextIndex = (index, len) => index === len - 1 ? 0 : index + 1,
    getPrevIndex = (index, len) => index === 0 ? len - 1 : index - 1

function PhotosList({ albums }) {

    // albumId - параметр из ссылки на страницу, текущий альбом
    const
        { albumId } = useParams(),

        // useMemo используется для оптимизации, пересчёт результата функции происходит только при изменении переменных albums или albumId,
        // а не при каждом рендере
        album = useMemo(
            () => albums.find(album => String(album.id) === albumId),
            [albums, albumId]),
        photos = album ? album.photos : [],

        // history для возможности возвращения на предыдущую страницу
        history = useHistory(),
        [selectedPhoto, setSelectedPhoto] = useState(),

        //обновление фото по индексу в массиве
        updatePhoto = index => setSelectedPhoto({
            url: photos[index].url,
            index,
            name: photos[index].name
        }),
        getNextPhoto = () => updatePhoto(getNextIndex(selectedPhoto.index, photos.length)),
        getPrevPhoto = () => updatePhoto(getPrevIndex(selectedPhoto.index, photos.length))

    return (
        <Fragment>
            <div className={wrapperStyle.wrapper}>
                <div className={wrapperStyle.content}>
                    <div className={`${wrapperStyle.header} ${styles.header}`}>
                        <h2 className={styles.back} onClick={history.goBack}>
                            <HiOutlineArrowNarrowLeft />
                            <span className={styles.backText}>Back</span>
                        </h2>
                        <h1>
                            {album?.title}
                        </h1>
                    </div>
                    <div className={wrapperStyle.elements}>
                        {
                            // если фотографии не загружены, возвращение на предыдущую страницу
                            // также если пользователем вручную был введён несуществующий номер альбома
                            photos.length
                                ? photos.map((photo, index) =>
                                    <PhotoItem
                                        onClick={() => updatePhoto(index)}
                                        key={index}
                                        {...photo}
                                    />)
                                : history.goBack()
                        }
                    </div>
                </div>
            </div>
            {
                selectedPhoto &&
                <PhotoView
                    photo={selectedPhoto.url}
                    close={() => setSelectedPhoto(undefined)}
                    next={getNextPhoto}
                    prev={getPrevPhoto}
                />
            }
        </Fragment>

    )
}

export default PhotosList
