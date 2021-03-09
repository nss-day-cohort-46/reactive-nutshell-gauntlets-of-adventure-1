import { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Tasks.css"

export const TaskCard = ({ task }) => {
    const {completeTask, deleteTask, updateTask, getTaskById} = useContext(TaskContext)
    const history = useHistory()
    const {taskId} = useParams();
    const [tasks, setTasks] = useState({})

    const handleComplete = () => {
        completeTask(task.id)
    }
    const handleDelete = () => {
      debugger
      deleteTask(tasks.id)
      .then(() => {
        history.push(`/tasks`)
      })
    }
    const handleUpdate = () => {
      updateTask(task.id)
    }

    useEffect(() => {
      // console.log("useEffect", newsArticleId)
      getTaskById(taskId)
      .then((response) => {
        setTasks(response)
      })
      }, [])

    return (
      <section className="task">
        <h4 className="task__name">Task Name: {task.name}</h4>
        <div className="task__date">Expected Completion: { task.expectedCompletion }</div>
        <div className="task__details">Details: { task.taskDetails }</div>
        <div className="completed">Completed: {String(task.completed)}</div>
        <button key={task.id} onClick={handleComplete}>Completed Task</button> 
        <button onClick={handleDelete}>Delete Task</button>
        <button onClick={handleUpdate}>Edit Task</button>
        <button onClick={() => {history.push(`tasks/edit/${task.id}`)}}></button>
    </section>
  )}