import React from "react"
import { Switch, Route } from "react-router-dom"
import PhotosList from "./PhotosList/PhotosList"
import AlbumsList from "./AlbumsList/AlbumsList"

function ContentWrapper({ albumsList, selectedUser }) {
    return (

        <Switch>
            {/*локальный switch для управления контентом - содержимым блока ContentWrapper*/}
            <Route exact path="/users/:userId">
                <AlbumsList
                    albums={albumsList}
                    user={selectedUser}
                />
            </Route>
            <Route path="/users/:userId/albums/:albumId">
                <PhotosList albums={albumsList} />
            </Route>
        </Switch>
    )
}

export default ContentWrapper
