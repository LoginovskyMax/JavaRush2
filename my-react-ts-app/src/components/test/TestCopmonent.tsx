type PropsType = {
  name: string,
  greetings?: string,
  getSum: () => number
}

function TestComponent({name, greetings = 'Привет', getSum}:PropsType) {
    const getRandomNumber = () => {
        // eslint-disable-next-line react-hooks/purity
        const num = Math.random()
        
        return num
    }

    return(
        <div className="test">
            <p>random number = {getRandomNumber()}</p>
            <p>{greetings} {name}</p>
            <p>{getSum()}</p>
         </div>
    )
}

export default TestComponent