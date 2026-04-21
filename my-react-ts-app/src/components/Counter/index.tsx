import { useEffect, useState } from "react";

function Counter() {
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

    return(
        <div className="test">
            <p>counter is = {counter}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={() => setshowBlock(!showBlock)}>
                {showBlock ? 'Hide' : 'Show'}
            </button>
            {showBlock && <div>Show div</div>}
         </div>
    )
}

export default Counter
