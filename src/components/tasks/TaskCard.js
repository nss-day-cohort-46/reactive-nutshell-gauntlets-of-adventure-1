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
  <div className="task__breed">Task Name: {task.name}</div>
  <div className="task__owner">Task Details: {task.taskDetails}</div>
  <address className="location__address">Expected Completion: {task.expectedCompletion}</address>
</section>
)