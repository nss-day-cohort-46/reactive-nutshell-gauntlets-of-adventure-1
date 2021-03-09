import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"

export const TaskForm = () => {
    const { addTask, getTaskById, deleteTask } = useContext(TaskContext)
    const history = useHistory()

    const [task, setTask] = useState({
        userId: 1,
        name: "",
        expectedCompletion: "",
        completed: true
    })

    const handleInputChange = (event) => {
        const newTask = { ...task }
        newTask[event.target.id] = event.target.value
        setTask(newTask)
    }
    const saveTask = () => {
        addTask(task)
            .then(history.push("/tasks"))
    }
    return (
        <form className="taskForm">
            <h2 className="taskForm__title">Create New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task Name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Task name" value={task.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Expected Completion Date: </label>
                    <input type="date" id="date" onChange={handleInputChange} required className="form-control" placeholder="Task Date" value={task.expectedCompletion} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    saveTask()
                }}>
                Create Task
          </button>
        </form>
    )
}