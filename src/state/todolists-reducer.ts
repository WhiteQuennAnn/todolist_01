import {TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: any) => {
    switch ( action.type) {
        case 'XXX' : {
            return state
        }
        default: return state
    }
}

const removeTodolistAC =() => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id: todolistId1
        }
    }
}