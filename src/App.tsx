import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'},
    ])

    let [tasksObj, setTasksObj] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],

        [todolistId2]: [
            {id: v1(), title: "Fish", isDone: false},
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Cheese", isDone: true},
            {id: v1(), title: "Meat", isDone: true},
            {id: v1(), title: "Bread", isDone: true},
        ]
    })
    // let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    //     {id: v1(), title: 'What to learn', filter: 'all'},
    //     {id: v1(), title: 'What to buy', filter: 'active'},
    // ])
    //
    //
    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);

    // let [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTodolistHandler = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasksObj[todolistId]
    }

    function removeTask(todolistId: string, taskId: string) {
        //     let filteredTasks = tasks.filter(t => t.id != id);
        //     setTasks(filteredTasks);
        setTasksObj({...tasksObj, [todolistId]: tasksObj[todolistId].filter(t => t.id !== taskId)})
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        setTasksObj({...tasksObj, [todolistId]: [...tasksObj[todolistId], newTask]})
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        setTasksObj({
            ...tasksObj,
            [todolistId]: tasksObj[todolistId].map(el => el.id === taskId ? {...el, isDone: newIsDone} : el)
        })
    }

    function changeFilter(todolistId: string, filterValue: FilterValuesType) {
        console.log(todolistId)
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: filterValue} : el))
        // setFilter(value);
    }

    return (
        <div className="App">
            {todolists.map(tl => {
                let allTodolistTasks = tasksObj[tl.id];
                let tasksForTodolist = allTodolistTasks;

                if (tl.filter === "active") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        key={tl.id}
                        todolistId={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolistHandler={removeTodolistHandler}
                    />
                )
            })}

        </div>
    );
}

export default App;
