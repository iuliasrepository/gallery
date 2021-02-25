import React, { useState, useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Header from "./Header/Header"
import ContentWrapper from "./ContentWrapper/ContentWrapper"
import DataHandler from "../DataHandler"

function App() {
    const
        [users, setUsers] = useState([]),
        [selectedUserIndex, setSelectedUserIndex] = useState(0),
        [albums, setAlbums] = useState([]),
        //getUserData() - передача выгруженных данных об альбомах в albums state
        getUserData = () =>
            DataHandler.getAlbumsData(users[selectedUserIndex].id)
                .then(result => {
                    setAlbums(result)
                }),
        selectedUserId = users[selectedUserIndex]?.id

    // выгрузка данных о текущем пользователе
    useEffect(() => {
        if (users.length > 0)
            getUserData()
    }, [users, selectedUserIndex])

    // выгрузка всех пользователей
    useEffect(() => {
        DataHandler.getUsers()
            .then(result => setUsers(result))
    },[])

    return (
        //если пользователи не загружены => сообщение об ошибке, контент страницы не загружается
        users.length > 0
            //Switch для общего управления приложением
            ? <Switch>
                {/*
                    проверка выполняется последовательно, при соответсвии одного условия, проверка дальше не выполняется
                    генерация контента страницы по адресу: "{baseUrl}/users*"
                */}
                <Redirect exact from="/users" to={`/users/${selectedUserId}`} />
                <Redirect exact from="/" to={`/users/${selectedUserId}`} />
                <Route from="/users">
                    <Header
                        userList={users}
                        selectedUserIndex={selectedUserIndex}
                        onChangeUser={setSelectedUserIndex}
                    />
                    <ContentWrapper
                        albumsList={albums}
                        selectedUser={users[selectedUserIndex]}
                    />
                </Route>
                <Redirect from="*" to={`/users/${selectedUserId}`} />
            </Switch>
            : <div>Sorry, the page is temporarily unavailable :(</div>
    )
}

export default App
