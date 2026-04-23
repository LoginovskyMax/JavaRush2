import { useState } from 'react'
import './App.css'
import TestComponent from './components/test/TestCopmonent'
import ReducerTest from './components/TestReducer/TestReducer'
import { ThemeContext, type Theme } from './contexts/Context'


function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const greetings = 'Здравствуй'

  const getSum = () => {
    return 6 * 10
  }

  const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }


  return (
      <main 
        className={theme === 'light' ? 'main--light' : 'main--dark'}
        id="center"
        >
        {/* <div >
          <h1>Get started</h1>
          
          <p>{ getSum() }</p>
        </div> */}
        <ThemeContext.Provider value={{changeTheme, theme}}>
            <TestComponent name={'Alice'} greetings={greetings} getSum={getSum}/>
            {/* <ReducerTest/> */}
        </ThemeContext.Provider>
      </main>
  )
}

export default App
