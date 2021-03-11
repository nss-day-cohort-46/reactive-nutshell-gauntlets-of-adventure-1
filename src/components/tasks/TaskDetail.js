import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"

export const TaskDetail = ({ task }) => {
    const {completeTask, deleteTask } = useContext(TaskContext)
    const history = useHistory()
    const {taskId} = useParams();
    const [tasks, setTasks] = useState({})

    const handleComplete = () => {
        completeTask(task.id)
    }
    const handleDelete = () => {
    //   debugger
      deleteTask(task.id)
      .then(() => {
        history.push(`/tasks`)
      })
    }

    return (
      <section className="task">
        <h4 className="task__name">Task Name: {task.name}</h4>
        <div className="task__date">Expected Completion: { task.expectedCompletion }</div>
        <div className="task__details">Details: { task.taskDetails }</div>
        <div className="completed">Completed: {String(task.completed)}</div>
        <button key={task.id} onClick={handleComplete}>Completed Task</button> 
        <button onClick={(event) => handleDelete(task.id)}>Delete Task</button>
        <button onClick={(event) => {history.push(`tasks/edit/${task.id}`)}}>Edit Task</button>
    </section>
  )}