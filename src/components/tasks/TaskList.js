import { useHistory } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskDetail } from "./TaskDetail"

export const TaskList = () => {
    const history = useHistory()
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
            <header className="tasks__header">
                <h2>Tasks:</h2>
            </header>
            <section className="tasks__addTaskButton">   
                <button onClick={() => history.push("/tasks/create")}>Create New Task</button>
            </section>
            <div className="tasks">
                {tasks?.map(task => <TaskDetail key={task.id} task={task} />)}
            </div>
        </>
    )
}