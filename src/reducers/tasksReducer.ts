import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TasksReducer = (state: TaskType[], action: tsarType) => {
    switch (action.type) {
        case  "REMOVE-TASK": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case  "ADD-TASK": {
            let newTask = {id: v1(), title: action.payload.title, isDone: false};

            return [newTask, ...state]
        }
        default:
            return state
    }
}
type tsarType = removeTaskACType | newStateACType

type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        payload: { // коробочка для хлама))
            id: id
        }
    } as const
}

type newStateACType = ReturnType<typeof newStateAC>

export const newStateAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: {title}

    } as const
}