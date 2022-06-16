import { combineReducers, configureStore } from "@reduxjs/toolkit"
import toDoListSlice from "./reducers/reducerListToDo"

const rootReducer = combineReducers({
    toDoList: toDoListSlice.reducer
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']

export default setupStore