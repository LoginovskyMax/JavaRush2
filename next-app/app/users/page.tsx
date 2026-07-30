'use client'
import { useEffect, useState } from "react"
import useApi from "../hooks/apiClient"



export default function UsersPage() {
    const {getData, data} = useApi()
    const [name, setName] = useState('')

    function createuser() {
        getData('http://localhost:3000/api/users', {
            method: 'POST',
            body: { name }
        })
    }

    useEffect(() => {
      getData('http://localhost:3000/api/user/1')
    }, [])
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Users Page</p>

             <div>
                  <input 
                     type="text" 
                     value={name} 
                     onChange={e => {setName(e.target.value)}}
                     placeholder="Введите имя пользователя" />
                  <button onClick={createuser}>Создать</button>
             </div>
        
            {/* <NewTaskForm /> */}
        </div>
    )
}