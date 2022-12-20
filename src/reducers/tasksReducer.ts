import {TaskType} from "../Todolist";

export const TasksReducer = (state: TaskType[], action: tsarType) => {
    switch (action.type) {
        case  "REMOVE-TASK": {
            return state.filter(el=> el.id!==action.payload.id)
        }
        default:
            return state
    }
}
type tsarType = removeTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        payload: { // коробочка для хлама))
            id: id
        }
    } as const
}