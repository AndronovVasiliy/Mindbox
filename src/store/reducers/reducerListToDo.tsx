import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const toDo = {
    nameList: "FirstList",
    idTodoList: 1,
    taskList: [
        {
            nameTask: "firstTask",
            idTask: 123,
            idTodoList: 1,
            isDone: false
        },
        {
            nameTask: "SecondTask",
            idTask: 321,
            idTodoList: 1,
            isDone: false
        }
    ],
}

const toDo2 = {
    nameList: "SecondList",
    idTodoList: 2,
    taskList: [
        {
            nameTask: "2firstTask",
            idTask: 234,
            idTodoList: 2,
            isDone: false
        },
        {
            nameTask: "2SecondTask",
            idTask: 2463,
            idTodoList: 2,
            isDone: false
        }
    ],
}

export interface TaskType {
    nameTask: string
    idTask: number
    isDone: boolean
    idTodoList: number
}

export interface ToDoListType {
    nameList: string
    idTodoList: number
    taskList: TaskType[]
}

const initialState: Array<ToDoListType> = [
    toDo,
    toDo2
]

const toDoListSlice = createSlice({
    name: 'ToDoList',
    initialState,
    reducers: {
        deleteTask(state, action: PayloadAction<{ idTodoList: number, idTask: number }>) {
            let findTodoList = state.findIndex(i => i.idTodoList === action.payload.idTodoList)
            let findTask = state[findTodoList].taskList.findIndex(i => i.idTask === action.payload.idTask)
            state[findTodoList].taskList.slice(findTask, 1)
        },

        isDone(state, action: PayloadAction<{ idTodoList: number, idTask: number }>) {
            let findTodoList = state.findIndex(i => i.idTodoList === action.payload.idTodoList)
            let findTask = state[findTodoList].taskList.findIndex(i => i.idTask === action.payload.idTask)
            state[findTodoList].taskList[findTask].isDone = !state[findTodoList].taskList[findTask].isDone
        },
        addTask(state, action: PayloadAction<{ idTask: number, idTodoList: number, nameTask: string }>) {
            let findTodoList = state.findIndex(i => i.idTodoList === action.payload.idTodoList)
            state[findTodoList].taskList
                .push({
                    idTask: action.payload.idTask,
                    isDone: false,
                    nameTask: action.payload.nameTask,
                    idTodoList: action.payload.idTodoList
                })
        },
        addToDoList(state, action: PayloadAction<{toDoListName: string, idTodoList: number}>) {
            state.push({
                nameList: action.payload.toDoListName,
                idTodoList: action.payload.idTodoList,
                taskList: []
            })
        }
    }
})

export default toDoListSlice