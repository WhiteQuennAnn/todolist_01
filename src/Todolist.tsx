import React, {useState} from 'react';
//rsc

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // filterTask: (filterValue: string) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const Todolist = (props: TodoListPropsType) => {
    const [filter, setFilter] = useState("All")
    let colander = props.tasks
    if (filter === "Active") {
        colander = props.tasks.filter(el => !el.isDone)
    }
    if (filter === "Completed") {
        colander = props.tasks.filter(el => el.isDone)
    }

    const filterTask = (filterValue: string) => {
        setFilter(filterValue)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {colander.map((el, index) => {

                    return (
                        <li key={index}>
                            <input type="checkbox" checked={el.isDone}/>
                            <button onClick={() => {
                                props.removeTask(el.id)
                            }}> X
                            </button>
                            <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=>{filterTask("All")}}>All</button>
                <button onClick={()=>{filterTask("Active")}}>Active</button>
                <button onClick={()=>{filterTask("Completed")}}>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;