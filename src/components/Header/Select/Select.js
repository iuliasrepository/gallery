import React, { useState } from "react"
import styles from "./select.module.sass"
import { MdExpandMore, MdExpandLess } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Select ({ list, selectedElementIndex, onElementClick, getLink }) {
    // рендер блока выпадающего списка только в случае, если isOpen === true
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.select__header}>
                <span>{list[selectedElementIndex]?.name}</span>
                {
                    isOpen
                        ? <MdExpandLess size='1.2em'/>
                        : <MdExpandMore size='1.2em'/>
                }
            </div>
            { /*минимизированный вид шапки селекта на мобильных устройствах (и др с width < 481px)*/ }
            <div className={styles.select__mobile_header}>
                < FaUser />
            </div>
            {
                isOpen &&
                <div className={styles.select__list}>
                    {
                        //генерация выпадающего списка всех пользователей без выбранного с ссылками на соответствующие страницы
                        list.map((element, index) => index !== selectedElementIndex &&
                            <div
                                className={styles.select__item}
                                key={element.id}
                                onClick={() => onElementClick(index)}
                            >
                                <Link to={getLink(element.id)}>
                                    {element.name}
                                </Link>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Select
