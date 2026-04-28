import { useState } from 'react'
import './App.css'
import TestComponent from './components/test/TestCopmonent'
import ReducerTest from './components/TestReducer/TestReducer'
import { ThemeContext, type Theme } from './contexts/Context'
import ChildrenForHOC from './components/ChildrenForHOC/ChildrenForHOC'
import AuthUser from './HOC/useAuth'


function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const greetings = 'Здравствуй'

  const getSum = () => {
    return 6 * 10
  }

  const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }

  const WrappedCompoonent = AuthUser(ChildrenForHOC)

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
            <WrappedCompoonent name='Zhan'/> 
            {/* <ReducerTest/> */}
        </ThemeContext.Provider>
      </main>
  )
}

export default App
