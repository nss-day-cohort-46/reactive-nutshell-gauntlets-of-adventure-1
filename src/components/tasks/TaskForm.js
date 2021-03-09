import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { TaskContext } from "./TaskProvider"

export const TaskForm = () => {
    const { addTask, getTaskById, deleteTask, updateTask } = useContext(TaskContext)
    const history = useHistory()
    const { taskId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const [task, setTask] = useState({
        userId: 0,
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
        addTask(task)
            .then(history.push("/tasks"))
    }

    // const handleSaveTask = () => {
    //     if (parseInt(task.taskId) === 0) {
    //         window.alert("Please select a task!")
    //     } else {
    //         //disable the button - no extra clicks
    //         setIsLoading(true);
    //         // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an animal
    //         if (taskId) {
    //             //PUT - update
    //             updateTask({
    //                 id: task.id,
    //                 name: task.name,
    //                 taskDetails: task.taskDetails,
    //                 expectedCompletion: task.expectedCompletion,
    //                 completed: false
    //             })
    //                 .then(() => history.push(`/tasks/edit/${task.id}`))
    //         } else {
    //             //POST - add
    //             addTask({
    //                 userId: 0,
    //                 name: "",
    //                 taskDetails: "",
    //                 expectedCompletion: "",
    //                 completed: false
    //             })
    //                 .then(() => history.push("/tasks"))
    //         }
    //     }
    // }

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