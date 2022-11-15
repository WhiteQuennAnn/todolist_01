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
        {id: 4, title: "React", isDone: false},
    ]

    const todoListTitle_2 = "What to buy";
    const tasks_2 = [
        {id: 4, title: "Beer", isDone: true},//0
        {id: 5, title: "Cheese", isDone: true},//1
        {id: 6, title: "Fish", isDone: false},//2
    ]

//GUI
    return (
        <div className="App">
            <Todolist title={todoListTitle} tasks={tasks} />
            <Todolist title={todoListTitle_2} tasks={tasks_2}/>
        </div>

    );
}

export default App;
