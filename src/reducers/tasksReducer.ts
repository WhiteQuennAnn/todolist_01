export const TasksReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'XXX': {
            return state
        }
        default:
            return state
    }
}

type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
    return {
        type: " REMOVE-TASK",
        payload: { // коробочка для хлама))
            id: id
        }
    } as const
}