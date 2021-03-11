import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"

export const TaskForm = () => {
    const { addTask, getTasks, getTaskById, deleteTask, updateTask } = useContext(TaskContext)
    const history = useHistory()
    const { taskId } = useParams()
    console.log('taskId: ', taskId);

    const [isLoading, setIsLoading] = useState(true)

    const [task, setTask] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        name: "",
        taskDetails: "",
        expectedCompletion: "",
        completed: false
    })

    const handleInputChange = (event) => {
        const newTask = { ...task }
        newTask[event.target.id] = event.target.value
        setTask(newTask)
    }
    const saveTask = () => {
        // debugger
        if (taskId) {
            updateTask({
                id: taskId,
                name: task.name,
                taskDetails: task.taskDetails,
                expectedCompletion: task.expectedCompletion,
                completed: task.completed,
                userId: task.userId
            })
            .then(history.push("/tasks"))
            // .then(history.push(`/tasks/details/${task.id}`))
        } else {
            addTask(task)
            .then(history.push("/tasks"))
        }
    }

    useEffect(() => {
        getTasks()
    }, [])


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
                    <label htmlFor="taskDetails">Task Details: </label>
                    <textarea type="text" id="taskDetails" onChange={handleInputChange} required className="form-control" placeholder="Task Details" value={task.taskDetails} ></textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Expected Completion Date: </label>
                    <input type="date" id="expectedCompletion" onChange={handleInputChange} required className="form-control" placeholder="Task Date" value={task.expectedCompletion} />
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