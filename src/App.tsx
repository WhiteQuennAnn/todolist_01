import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    //Bll
    const todoListTitle = "What to learn";
    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "ReactJS", isDone: false},
    ]
const removeTask=()=>{

}

    //GUI
    return (
        <div className="App">
            <Todolist title={todoListTitle} tasks={tasks} removeTask={removeTask}/>

        </div>

    );
}

export default App;
