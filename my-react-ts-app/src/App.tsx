import { useState } from 'react'
import './App.css'
import TestComponent from './components/test/TestCopmonent'
import { ThemeContext, type Theme } from './contexts/Context'
import ChildrenForHOC from './components/ChildrenForHOC/ChildrenForHOC'
import AuthUser from './HOC/useAuth'
import LogIn from './components/LogIn/LogIn'
import UncontrolForm from './components/UncontrolForm/UnconrolForm'
import FormikForm from './components/FormicForm/FormikForm'
import CounterStore from './components/CounterStore/CounterStore'
import Characters from './components/Characters/Characters'
import Pokemon from './components/Pokemon/Pokemon'


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
            <FormikForm/>
            {/* <ReducerTest/> */}
        </ThemeContext.Provider>
        {/* <CounterStore />
        <Characters /> */}
        <Pokemon />
      </main>
  )
}

export default App
