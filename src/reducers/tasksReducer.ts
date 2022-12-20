export const TasksReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'XXX': {
            return state
        }
        default:
            return state
    }
}

export const removeTaskAC = (id: string) => {
    return {
        type: " REMOVE-TASK",
        payload: {
            id: id
        }
    }
}