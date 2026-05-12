import React, { useCallback, useEffect, useMemo, useState } from "react"
import Counter from "../Counter"
import { useAppSelector } from "../../store/storeHooks"

type PropsType = {
  name: string,
  greetings?: string,
  getSum: () => number
}

const Users = [
    {
        id: 1,
        name: 'Alice',
        age: 22
    },
        {
        id:2,
        name: 'Petr',
        age: 55
    },
        {
        id:3,
        name: 'Jack',
        age: 32
    }
]

function TestComponent({name, greetings = 'Привет', getSum}:PropsType) {
    const [users, setUsers] = useState(Users)
    const [usersLenght, setUsersLenght] = useState<number>(users.length)
    const counterStore = useAppSelector((state) => state.counter)

    const numbersArr = [1,2,3]

    const getRandomNumber = () => {
        // eslint-disable-next-line react-hooks/purity
        const num = Math.random()
        
        return num
    }


    const getUsersLenght = () => {
        return users.length * 2
    }

    const memoGetUsers = useCallback(() => {
        return getUsersLenght()
    }, [])

    const memoNumbersArr = useMemo(() => {
        return numbersArr
    }, [])

    const fetchData = async () => {
      const response = await fetch('someApi')
      const data = await response.json()
      console.log(data);
  }

  const deleteUser = (id: number) => {
    const newUsersArr = users.filter(user => user.id !== id)

    setUsers(newUsersArr)
    // setUsersLenght(newUsersArr.length)
  }

  useEffect(() => {
    console.log('Делаем запрос за данными');
    fetchData()
  }, [])

    console.log('rerender parent component');

    return(
        <div className="test">
            <p>random number = {getRandomNumber()}</p>
            <p>Global age = {counterStore.age}</p>
            <p>{greetings} {name}</p>
            <p>{getSum()}</p>
            <ul>
                {users.map(user => <li  key={user.id}>
                    Имя - {user.name}, Возраст - {user.age}  
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>)}
            </ul>
            <Counter 
               initialCounter={usersLenght} 
               numbersArr={memoNumbersArr}
               getUsersLenght={memoGetUsers}
               />
         </div>
    )
}

export default TestComponent