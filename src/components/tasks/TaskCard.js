import { useContext } from "react"
import { TaskContext } from "./TaskProvider";
import { useHistory } from "react-router-dom";
import "./Tasks.css"

export const TaskCard = ({ task }) => {
    const {completeTask, deleteTask, updateTask} = useContext(TaskContext)
    const history = useHistory()
    const complete = () => {
        completeTask(task.id)
    }
    const handleDelete = () => {
      // debugger
      deleteTask(task.id)
    }
    const update = () => {
      updateTask(task.id)
    }

    return (
      <section className="task">
        <h4 className="task__name">Task Name: {task.name}</h4>
        <div className="task__date">Expected Completion: { task.expectedCompletion }</div>
        <div className="task__details">Details: { task.taskDetails }</div>
        <div className="completed">Completed: {String(task.completed)}</div>
        <button key={task.id} onClick={complete}>Completed Task</button> 
        <button onClick={handleDelete}>Delete Task</button>
        <button onClick={update}>Edit Task</button>
    </section>
  )}

  // (event) => history.push(`tasks/edit/${task.id}`)