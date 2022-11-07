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
    ]

    const todoListTitle_2 = "What to buy";
    const tasks_2 = [
        {id: 4, title: "Beer", isDone: true},
        {id: 5, title: "Cheese", isDone: true},
        {id: 6, title: "Fish", isDone: false},
    ]

//GUI
    return (
        <div className="App">
            <Todolist tasks={tasks} title={todoListTitle}/>
            <Todolist title={todoListTitle_2} tasks={tasks_2}/>
        </div>

    );
}

export default App;
