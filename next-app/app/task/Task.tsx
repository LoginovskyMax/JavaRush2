'use client'

import { TaskType } from "../types"

interface props {
    task: TaskType
}


export default function Task({task}:props ) {
    
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>{task.id}</p>
            <p>{task.name}</p>
            <p>{task.isDone ? 'Done' : 'Not done'}</p>
        </div>
    )
}