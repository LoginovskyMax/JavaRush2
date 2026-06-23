import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { increment, decrement, setAge } from "../../store/slices/counterSlice"
import { useState } from "react"

function CounterStore() {
    const counterStore = useAppSelector((state) => state.counter)
    const dispatch = useAppDispatch()
    const [inputAge, setInputAge] = useState(0)

    const incremmentFunc = () => {
        dispatch(increment())
    }

    const decremmentFunc = () => {
        dispatch(decrement())
    }

    const onChangeHelper = (age: string) => {
        setInputAge(Number(age))
    }

    const handleClick = () => {
        if(inputAge > 0 && inputAge < 130){
          dispatch(setAge(inputAge))
          setInputAge(0)
        }
    }

    return (
        <div className='counter'>
            <p>Global counter = {counterStore.count}</p>
            <p>Global age = {counterStore.age}</p>
            <button onClick={incremmentFunc}>+</button>
            <button onClick={decremmentFunc}>-</button>
            <p>укажите ваш возрраст</p>
            <input type="number" value={inputAge} onChange={(e) => onChangeHelper(e.target.value)}/>
            <button onClick={handleClick}>Установить возраст</button>
        </div>
    )
}

export default CounterStore