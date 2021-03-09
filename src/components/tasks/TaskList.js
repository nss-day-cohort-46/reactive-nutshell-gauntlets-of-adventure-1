import { useHistory } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"

export const TaskList = () => {
    const history = useHistory()
    const {tasks, getTasks} = useContext(TaskContext)

    useEffect(()=> {
        getTasks()
    },[])

    return (
        <>
            <div className="tasks">
                {tasks?.map(task => <TaskCard key={task.id} task={task}/>)}
            <button onClick={()=> history.push("/tasks/create")}>Add Task</button>
            </div>
        </>
    )
}