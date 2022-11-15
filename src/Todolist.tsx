import React from 'react';
//rsc

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number)=>void

}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const Todolist = (props: TodoListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el, index) => {

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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;