import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTodolistActionType = {
    type: '',

}
export type AddTodolistActionType = {
    type: '',

}


type ActionsType =
    RemoveTodolistActionType
    | AddTodolistActionType


export const tasksReducer = (state:TasksStateType, action: ActionsType) : TasksStateType => {
    switch (action.type) {
        case '':
            return state
        case '':
            return state


default:
    throw new Error("I don't understand this type")
}
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', id: todolistId}
}
export const AddTodolistAC = (title: string): AddTodolistActionType => {
    return {type: 'ADD-TODOLIST', title: title}
}
export const ChangeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId}
}
export const ChangeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: todolistId}
}
