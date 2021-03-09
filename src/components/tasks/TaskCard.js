import { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export const TaskCard = ({ task }) => {
    const {completeTask} = useContext(TaskContext)
    const complete = () => {
        completeTask(task.id)
    }
    const {removeTask} = useContext(TaskContext)
    return (
      <section className="task">
        <h3 className="task__name">Task Name: {task.name}</h3>
        <div className="task__date">Expected Completion: { task.expectedCompletion }</div>
        <div className="task__details">Details:</div>
        <div className="completed">Completed: {String(task.completed)}</div>
        <button key={task.id} onClick={complete}>Completed Task</button> 
        <button onClick={(event) => removeTask(task.id)}>Delete Task</button>
    </section>
  )}