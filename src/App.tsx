import React from 'react';
import './App.css';
import Todolist from "./Todolist";

function App() {
    const todoListTitle = "What to learn";
    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]

    return (
        <div className="App">
           <Todolist />
           <Todolist />
           <Todolist />
           <Todolist />

        </div>

    );
}

export default App;
