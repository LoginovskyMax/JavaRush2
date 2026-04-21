import { useEffect, useState } from "react"

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

    const getRandomNumber = () => {
        // eslint-disable-next-line react-hooks/purity
        const num = Math.random()
        
        return num
    }

    const fetchData = async () => {
      const response = await fetch('someApi')
      const data = await response.json()
      console.log(data);
  }

  const deleteUser = (id: number) => {
    const newUsersArr = users.filter(user => user.id !== id)

    setUsers(newUsersArr)
  }

  useEffect(() => {
    console.log('Делаем запрос за данными');
    fetchData()
  }, [])

    return(
        <div className="test">
            <p>random number = {getRandomNumber()}</p>
            <p>{greetings} {name}</p>
            <p>{getSum()}</p>
            <ul>
                {users.map(user => <li  key={user.id}>
                    Имя - {user.name}, Возраст - {user.age}  
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>)}
            </ul>
         </div>
    )
}

export default TestComponent