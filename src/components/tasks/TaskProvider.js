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

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, getTaskById, deleteTask,
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}