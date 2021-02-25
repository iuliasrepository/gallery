import React from "react"
import Select from "./Select/Select"
import styles from "./header.module.sass"

//формирование ссылок для линков селекта; вынесено, чтоб сделать компонент селект независимыс и переиспользуемым
const generateLink = userId => `/user/${userId}`

function Header ({ userList, selectedUserIndex, onChangeUser }) {
    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Photo gallery
                </div>
                <Select
                    list={userList}
                    selectedElementIndex={selectedUserIndex}
                    onElementClick={onChangeUser}
                    getLink={generateLink}
                />
            </div>
        </header>
    )
}

export default Header
