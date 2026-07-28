'use client'

import { TaskType } from "../types"
import Task from "./Task"
import { useOptimistic, startTransition, useRef } from 'react';
import { createTask } from "../server-actions/saveTask";

interface props {
    list: TaskType[]
}

export default function TaskList({list}:props ) {
    const formRef = useRef(null)
      const [optimisticTask, addOptimisticTask] = useOptimistic(list);


      function submitForm(){
        const newList = [...list]
        newList.push({
            id:3,
            name: formRef.current.name.value,
            isDone:formRef.current.isDone.checked
         })

        const data = {
            name: formRef.current.name.value,
            isDone: formRef.current.isDone.checked
        }

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('isDone', data.isDone)

         startTransition(() => {
            addOptimisticTask(newList)
            createTask(formData)
         })
      }

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {optimisticTask && optimisticTask.map(task => <Task task={task} key={task.id} />)}
            <form ref={formRef}>
              <input type="text" name="name" placeholder="Введите новую задачу" />
              <label htmlFor='isDone'>Выполенена ли задача</label>
              <input type="checkbox" id='isDone' name="isDone" placeholder="Введите новую задачу" />
              <button type="button" onClick={submitForm}>Добавить</button>
            </form>
        </div>
    )
}