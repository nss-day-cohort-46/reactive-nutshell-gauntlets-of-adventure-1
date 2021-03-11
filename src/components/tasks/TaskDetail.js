import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"

export const TaskDetail = () => {
  const { completeTask, deleteTask, getTaskById } = useContext(TaskContext)
  const history = useHistory()
  const { taskId } = useParams();
  // console.log('taskId: ', taskId);

  const [tasks, setTasks] = useState({})
  // console.log('tasks: ', tasks);

  const handleComplete = () => {
    completeTask(tasks.id)
  }
  const handleDelete = () => {
    //   debugger
    deleteTask(tasks.id)
      .then(() => {
        history.push(`/tasks`)
      })
  }

  useEffect(() => {
    // debugger
    getTaskById(taskId)
      .then((res) => {
        setTasks(res)
      })
    }, [])
    
  return (
    <section className="task">
      <h4 className="task__name">Task Name: {tasks.name}</h4>
      <div className="task__date">Expected Completion: {tasks.expectedCompletion}</div>
      <div className="task__details">Details: {tasks.taskDetails}</div>
      <div className="completed">Completed: {String(tasks.completed)}</div>

      <button key={tasks.id} onClick={handleComplete}>Completed Task</button>
      <button onClick={() => handleDelete(tasks.id)}>Delete Task</button>
      <button onClick={() => { history.push(`tasks/edit/${tasks.id}`) }}>Edit Task</button>
    </section>
  )
}