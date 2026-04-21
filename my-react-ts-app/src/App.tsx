import './App.css'
import Counter from './components/Counter'
import TestComponent from './components/test/TestCopmonent'
import ReducerTest from './components/TestReducer/TestReducer'


function App() {
  const greetings = 'Здравствуй'

  const getSum = () => {
    return 6 * 10
  }

  return (
      <main id="center">
        <div data-test='123'>
          <h1>Get started</h1>
          
          <p>{ getSum() }</p>
        </div>
        <TestComponent name={'Alice'} greetings={greetings} getSum={getSum}/>
        <Counter/>
        <ReducerTest/>
      </main>
  )
}

export default App
