import {FilterValuesType} from "../App";
import {removeTaskAC} from "./tasksReducer";

export const filterReducer = (state: FilterValuesType, action: any) => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return state
        }
        default: return state
    }
}
type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
    return {
      type: 'CHANGE-FILTER'
    }as const
}