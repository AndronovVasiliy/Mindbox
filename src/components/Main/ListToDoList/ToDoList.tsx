import { ToDoListType } from '../../../store/reducers/reducerListToDo';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import style from './ListToDoList.module.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Task } from './Tasks/Task';
import AddTaskForm from './AddTaskForm';

export const ToDoList = (props: ToDoListType) => {
    const [open, setOpen] = useState(false);
    const [showForm, setshowForm] = useState(false)    

    return (
        <li className={style.item_do_do_list}>
            {showForm && <AddTaskForm idTodoList = {props.idTodoList} setshowForm = {setshowForm}/>}
            <div className={style.button_group}>
                <Button className={style.button_name_to_do_list}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    {props.nameList}
                </Button>
                <Button onClick={() => setshowForm(true)} className={style.button_add}>
                    <AddIcon />
                </Button>
                <Button className={style.button_delete_task}>
                    <RemoveIcon />
                </Button>
            </div>
            <Collapse className={style.collapse} in={open}>
                <ul>
                    {props.taskList.map(item => <Task key={item.nameTask} {...item} idTodoList = {props.idTodoList} />)}
                </ul>
            </Collapse>
        </li>
    );
}