import {useReducer, type FC } from 'react'
import { useTheme } from '../../../hooks/useTheme'

interface  IState {
    counter: number,
    age: number | undefined
}

interface  IAction {
    type: string, 
    payload?: number
}

const reducer = (state:IState, action:IAction) => {
   switch(action.type) {
    case 'increment': 
     return {...state, counter: state.counter + 1 }

    case 'decrement': 
     return {...state, counter: state.counter - 1}
    
    case 'age': 
     return {...state, age: action.payload }
     
     default: 
     return state
   }
}

const ReducerTest:FC = () => {
     const {theme} = useTheme()
    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        age: 20
    })

    const incrementCount = () => {
        dispatch({type: 'increment'})
    }

    const deCrementCount = () => {
        dispatch({type: 'decrement'})
    }

    const setAge = () => {
        dispatch({type: 'age', payload: 30})
    }

    return (
        <div>
            <p>Счетчик</p>
            <p>{state.counter}</p>
            <p>Возраст</p>
            <p>{state.age}</p>
            <button onClick={incrementCount}>Повысить счетчик</button>
            <button onClick={deCrementCount}>Понизить счетчик</button>
            <button onClick={setAge}>Установить возраст</button>
            <p>Текущая тема это - {theme}</p>
        </div>
    )
}

export default ReducerTest