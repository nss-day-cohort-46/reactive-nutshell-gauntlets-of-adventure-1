import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { TaskContext } from "./TaskProvider";
import "./Tasks.css"

export const TaskDetail = ({task}) => {
  const { completeTask, deleteTask, getTaskById } = useContext(TaskContext)
  const history = useHistory()
  const { taskId } = useParams();

  const handleComplete = () => {
    completeTask(task.id)
    // .then(() => {
    //   if ( task.completed === true ) {
        
    //   } else {
        
    //   }
    // }
  }
  
  const handleDelete = () => {
    deleteTask(task.id)
      .then(() => {
        history.push(`/tasks`)
      })
  }
    
  return (
    <section className="task">
      <h4 className="task__name">Task Name: {task.name}</h4>
      <div className="task__date">Expected Completion: {task.expectedCompletion}</div>
      <div className="task__details">Details: {task.taskDetails}</div>
      <div className="completed">Completed: {String(task.completed)}</div>

      <button key={task.id} onClick={handleComplete}>Completed Task</button>
      <button onClick={() => handleDelete(task.id)}>Delete Task</button>
      <button onClick={() => { history.push(`tasks/edit/${task.id}`) }}>Edit Task</button>
    </section>
  )
}