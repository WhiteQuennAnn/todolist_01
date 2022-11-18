import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle(' ')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            addTaskHandler()
        }
    }
    const activeChangeFilterHandler = () => {
        props.changeFilter("active")
    }
    const allChangeFilterHandler = () => {
        props.changeFilter("all")
    }

    const tsarFooHandler = (filterValue: FilterValuesType) => {

        props.changeFilter(filterValue)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onKeyDown={onKeyDownHandler}
                onChange={
                    onChangeHandler
                }/>
            <button onClick={addTaskHandler}>+
            </button>

        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const removeTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={removeTaskHandler}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <Button callBack={()=>tsarFooHandler("all")} nickName={"All"}/>
            <Button callBack={()=>tsarFooHandler("active")} nickName={"Active"}/>
            <Button callBack={()=>tsarFooHandler("completed")} nickName={"Completed"}/>

            {/*<button onClick={() => tsarFooHandler("all")}>All</button>*/}
            {/*<button onClick={() => tsarFooHandler("active")}>Active</button>*/}
            {/*<button onClick={() => tsarFooHandler("completed")}>Completed</button>*/}

            {/*<button onClick={allChangeFilterHandler}>All</button>*/}
            {/*<button onClick={activeChangeFilterHandler}>*/}
            {/*    Active*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    props.changeFilter("completed")*/}
            {/*}}>*/}
            {/*    Completed*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    props.changeFilter("all")*/}
            {/*}}>*/}
            {/*    All*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    props.changeFilter("active")*/}
            {/*}}>*/}
            {/*    Active*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    props.changeFilter("completed")*/}
            {/*}}>*/}
            {/*    Completed*/}
            {/*</button>*/}
        </div>
    </div>
}
