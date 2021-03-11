import React from "react"
import { Link } from "react-router-dom"
import "./Tasks.css"

export const TaskCard = ({ task }) => (
  <section className="task">
  <h3 className="task__name">
      <Link to={`/tasks/details/${task.id}`}>
      { task.name }
      </Link>
  </h3>
  <div className="task__name">Task Name: {task.name}</div>
  <div className="task__taskDetails">Task Details: {task.taskDetails}</div>
  <address className="task__expectedCompletion">Expected Completion: {task.expectedCompletion}</address>
</section>
)