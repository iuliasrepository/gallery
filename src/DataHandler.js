class DataHandler {

    //getUsers () - выгрузка всех пользователей, фильтрация информации о пользователе: { id, name }
    static getUsers () {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(result => result.map(({id, name}) => ({id, name})))
    }

    //getAlbumsData(userId) - выгрузка альбомов по переданному id пользователя и фотографий по альбомам
    //userId - id выбранного пользователя, expected type: string or number
    // result - {albumInfo, photos: []}
    static async getAlbumsData(userId) {
        const albumsList = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
        return fetch(`https://jsonplaceholder.typicode.com/photos?${
                albumsList.map(album => `albumId=${album.id}`).join('&')
            }`)
            .then(response => response.json())
            .then(result =>
                albumsList.map(album => ({
                    ...album,
                    photos: result.filter(ph => ph.albumId === album.id)
                }))
            )

    }
}

export default DataHandler
