import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

function CounterComponent() {
    const {theme, changeTheme} = useTheme()
    const [counter, setCounter] = useState<number>(0)
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
            <p>counter is = {counter}</p>
            <p>Текущая тема это - {theme}</p>
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

const Counter = React.memo(CounterComponent)

export default Counter
