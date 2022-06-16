import toDoListSlice, { TaskType } from '../../../../store/reducers/reducerListToDo'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import style from './Task.module.scss';
import { useAppDispatch } from '../../../../hooks/hooks';

export const Task = (props: TaskType & { idTodoList: number }) => {

  const dispatch = useAppDispatch()

  return (
    <li className={style.task}>
      {props.isDone ?
        <CheckCircleOutlineIcon
          onClick={() => dispatch(toDoListSlice.actions.isDone({ idTodoList: props.idTodoList, idTask: props.idTask }))} />
        :
        <CircleOutlinedIcon
          onClick={() => dispatch(toDoListSlice.actions.isDone({ idTodoList: props.idTodoList, idTask: props.idTask }))} />}
      {props.nameTask}
    </li>
  )
}
