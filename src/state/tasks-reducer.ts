import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type FirstTaskActionType = {
    type: '',

}
export type SecondTaskActionType = {
    type: '',

}


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
    return {type: ''}
}
export const secondAC = () => {
    return {type: ''}
}

