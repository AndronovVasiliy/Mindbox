import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import style from './ListToDoList.module.scss'
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../../hooks/hooks";
import toDoListSlice from "../../../store/reducers/reducerListToDo";

interface IFormInputs {
    taskName: string
}

interface PropsType {
    setshowForm: React.Dispatch<React.SetStateAction<boolean>>
    idTodoList: number
}

const schema = yup.object({
    taskName: yup.string().required(),
}).required();

const AddTaskForm = (props: PropsType) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch()

    const onSubmit = (data: IFormInputs) => {
        let id = new Date().getMilliseconds()
        props.setshowForm(false)
        dispatch(toDoListSlice.actions.addTask({idTask: id, idTodoList: props.idTodoList, nameTask: data.taskName}))
    }

    return (
        <form className={style.add_task_form} onSubmit={handleSubmit(onSubmit)}>
            <label>Название задачи</label>
            <input {...register("taskName")} />
            {errors.taskName?.message && <p>Поле должно быть заполнено</p>}
            <Button type="submit">Добавить</Button>
            <Button onClick={() => props.setshowForm(false)}>Отмена</Button>
        </form>
    );
}

export default AddTaskForm