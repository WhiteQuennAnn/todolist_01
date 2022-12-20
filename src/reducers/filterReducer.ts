import {FilterValuesType} from "../App";
import {removeTaskAC} from "./tasksReducer";

export const filterReducer = (state: FilterValuesType, action: changeFilterACType) => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return action.payload.value
        }
        default:
            return state
    }
}
type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            value
        }
    } as const
}