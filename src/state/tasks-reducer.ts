import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {
    AddTodolistActionType,
    ChangeTodolistFilterActionType,
    ChangeTodolistTitleActionType,
    RemoveTodolistActionType
} from "./todolists-reducer";

export type Action1Type = {
    type: '1',
    id: string
}
export type Action2Type = {
    type: '2',
    title: string
}

type ActionsType = Action1Type | Action2Type


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "1": {
            return {...state};
        }
        case "2": {
            return {...state};
        }
        default:
            return state;
    }
}

export const action1AC = (todolistId: string): Action1Type => {
    return {type: '1', id: todolistId}
}
export const action2AC = (title: string): Action2Type => {
    return {type: '2', title: title}
}
