import style from './AllDoneTask.module.scss'
import { useAppSelector } from '../../../hooks/hooks'
import { TaskType } from '../../../store/reducers/reducerListToDo';
import { Task } from '../ListToDoList/Tasks/Task';

function AllNotDone() {

    const {toDoList} = useAppSelector(state => state)

    let allDoneTask: TaskType[] = []

    toDoList.forEach(i => {
        allDoneTask = allDoneTask.concat(i.taskList)
    })
    
    return (
        <ul className={style.list_all_task}>
            {allDoneTask.map(item => item.isDone === false && <Task key = {item.idTask} {...item} />)}
        </ul>
    )
}

export default AllNotDone