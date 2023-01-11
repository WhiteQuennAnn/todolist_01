import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type FirstTaskActionType = ReturnType<typeof firstAC>;
export type SecondTaskActionType = ReturnType<typeof secondAC>


type ActionsType =
    FirstTaskActionType
    | SecondTaskActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case '':
            return state
        case '':
            return state


        default:
            throw new Error("I don't understand this type")
    }
}

export const firstAC = () => {
    return {type: ''} as const
}
export const secondAC = () => {
    return {type: ''} as const
}

