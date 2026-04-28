import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

type PropsType = {
  initialCounter: number,
  greetings?: string,
  numbersArr?: number[],
  getUsersLenght: () => number
}

function CounterComponent({initialCounter, greetings = 'Привет', numbersArr = [], getUsersLenght}:PropsType) {
    const {theme, changeTheme} = useTheme()
    const [counter, setCounter] = useState<number>(initialCounter)
    const [showBlock, setshowBlock] = useState(true)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        console.log('Counter смонтирован в дом');
      }, [])

    useEffect(() => {
        console.log('Значение счетчика измениилось', counter);
      }, [counter])

        console.log('rerender child component');

    return(
        <div className="test">
            <ul>
               {numbersArr.map(item => <li key={item}>{item}</li>)} 
            </ul>
          
            <p>counter is = {counter}</p>
            <p>Текущая тема это - {theme}</p>
            <p>Props greetings: {greetings}</p>
            <p>getUsersLenght = {getUsersLenght()}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={() => setshowBlock(!showBlock)}>
                {showBlock ? 'Hide' : 'Show'}
            </button>
            <button onClick={changeTheme}>Изменить контекст</button>
            {showBlock && <div>Show div</div>}
         </div>
    )
}

// const propsEqual = (prevProps, nextProps) => {
//       if(prevProps.greetings !== nextProps.greetings){
//         return false
//       }

//       return true 
// } 

const Counter = React.memo(CounterComponent)

export default Counter
