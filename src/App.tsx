import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    //Bll
    const todoListTitle = "What to learn";
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "ReactJS", isDone: false},
    ])
    const removeTask = (taskId: number) => {

        // tasks = tasks.filter((el) =>
        //     el.id !== taskId)
        console.log(tasks)
        setTasks(tasks = tasks.filter((el) =>
            el.id !== taskId))
    }
    const filterTask=()=>{
        console.log("kik;kk")
    }
    //GUI
    return (
        <div className="App">
            <Todolist
                title={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}
                filterTask={filterTask}/>
        </div>
    );
}

export default App;
