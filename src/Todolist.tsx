import React from 'react';
//rsc

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>

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
                {props.tasks.map((el, index)=>{
                    debugger
                    return (
                        <li key={el.id}><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
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