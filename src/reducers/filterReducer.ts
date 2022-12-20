import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: any) => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return state
        }
        default: return state
    }
}


export const changeFilterAC = (value: FilterValuesType) => {
    return {
      type: 'CHANGE-FILTER'
    }as const
}