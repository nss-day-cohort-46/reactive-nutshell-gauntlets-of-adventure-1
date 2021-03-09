import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need Task data.
export const TaskContext = createContext()

// This component establishes task data that can be used within the application.
export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])
    // console.log('tasks: ', tasks);

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks?_expand=user")
            .then(res => res.json())
            .then(setTasks)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`)
            .then(res => res.json())
    }

    const addTask = (task) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTasks)
    }

    const deleteTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
            .then(getTasks)
    }

    const completeTask = (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                completed:true
            })
        })
        .then(()=>getTasks(parseInt(sessionStorage.getItem("nutshell_user"))))
    }

    const updateTask = (task) => {
        return fetch(`http://localhost:8088/tasks/edit/${task.id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(task)
        })
        .then(()=>getTasks(parseInt(sessionStorage.getItem("nutshell_user"))))
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, getTaskById, addTask, deleteTask, completeTask, updateTask 
            }}>
            {props.children}
        </TaskContext.Provider>
    )
}