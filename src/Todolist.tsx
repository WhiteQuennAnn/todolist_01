import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import styles from './Todolist.module.css';
import {CheckBox} from "./components/CheckBox";

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
    addTask: (title: string) => void
    changeIsDone: (taskId: string, isDoneValue: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<null | string>(null)
    const [filterValue, setFilterValue] = useState('all')

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        setFilterValue("all")
        props.changeFilter("all")
    };

    const onActiveClickHandler = () => {
        setFilterValue("active")
        props.changeFilter("active")
    };
    const onCompletedClickHandler = () => {
        setFilterValue("completed")
        props.changeFilter("completed")
    };

    const changeIsDoneHandler= (isDone: boolean, taskId: string)  => {
        props.changeIsDone(  taskId, isDone)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? styles.error : ''}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>

        {error && <div className={styles.errorMassage}> {error}</div>}

        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)
                    // const changeIsDoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
                    //     props.changeIsDone(t.id, event.currentTarget.checked)
                    // }

                    // const changeIsDoneHandler= (isDone: boolean)  => {
                    //     props.changeIsDone(t.id, isDone)
                    // }

                    return <li key={t.id} className={t.isDone ? styles.isDone : ''}>


                        <CheckBox isDone={t.isDone} callBack={()=>changeIsDoneHandler(t.id)}/>
                        {/*<input type="checkbox" checked={t.isDone} onChange={changeIsDoneHandler}/>*/}
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={filterValue === 'all' ? styles.activeFilter : ''} onClick={onAllClickHandler}>All
            </button>
            <button className={filterValue === 'active' ? styles.activeFilter : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={filterValue === 'completed' ? styles.activeFilter : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
