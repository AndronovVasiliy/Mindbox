import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import style from './Header.module.scss'
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/hooks";
import toDoListSlice from "../../store/reducers/reducerListToDo";

interface IFormInputs {
    toDoListName: string
}

interface PropsType {
    setshowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const schema = yup.object({
    toDoListName: yup.string().required(),
}).required();

const AddFormTodoList = (props: PropsType) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch()

    const onSubmit = (data: IFormInputs) => {
        let id = new Date().getMilliseconds()
        dispatch(toDoListSlice.actions.addToDoList({idTodoList: id, toDoListName: data.toDoListName}))
        props.setshowForm(false)
    }

    return (
        <form className={style.add_toDo_form} onSubmit={handleSubmit(onSubmit)}>
            <label>Название листа задач</label>
            <input {...register("toDoListName")} />
            {errors.toDoListName?.message && <p>Поле должно быть заполнено</p>}
            <Button type="submit">Добавить</Button>
            <Button onClick={() => props.setshowForm(false)}>Отмена</Button>
        </form>
    );
}

export default AddFormTodoList