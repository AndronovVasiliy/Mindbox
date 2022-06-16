import { useAppSelector } from '../../../hooks/hooks'
import { ToDoList } from './ToDoList'
import style from './ListToDoList.module.scss'

export const ListToDoList = () => {

    const {toDoList} = useAppSelector(state => state)

    return (
        <ul className={style.list_to_do_list}>
            {toDoList.map(item => <ToDoList key={item.idTodoList} {...item} />)}
        </ul>
    )
}
