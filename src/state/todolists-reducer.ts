import {TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: tsarType) => {
    switch ( action.type) {
        case 'REMOVE-TODOLIST' : {
           // setTodolists(todolists.filter(tl => tl.id != id));
            // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
            //delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
            // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
           // setTasks({...tasks});
            return state.filter (el=> el.id!==action.payload.todolistId1)
        }
        default: return state
    }
}
type tsarType = removeTodolistACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC =(todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
           todolistId1
        }
    }as const
}