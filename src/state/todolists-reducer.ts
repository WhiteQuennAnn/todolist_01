import {TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: tsarType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' : {

            return state.filter(el => el.id !== action.payload.todolistId1)
        }
        default:
            return state
    }
}
type tsarType = removeTodolistACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId1
        }
    } as const
}