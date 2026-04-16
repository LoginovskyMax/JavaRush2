import { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return(
        <div className="test">
            <p>counter is = {counter}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
         </div>
    )
}

export default Counter
