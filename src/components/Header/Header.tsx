import React, { useState } from 'react'
import { Nav } from './Nav'
import style from './Header.module.scss'
import AddFormTodoList from './AddFormTodoList'
import { Button } from 'react-bootstrap'


export const Header = () => {
    const [showForm, setshowForm] = useState(false)   
    return (
        <div className={style.header}>
            {showForm && <AddFormTodoList setshowForm = {setshowForm}/>}
            <Nav />
            <Button onClick={() => setshowForm(true)}>Добавить список</Button>
        </div>
    )
}
