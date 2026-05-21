import { useState } from "react"
import { ThemeContext, type Theme } from "../../contexts/Context"
import TestComponent from "../../components/test/TestCopmonent"
import AuthUser from "../../HOC/useAuth"
import ChildrenForHOC from "../../components/ChildrenForHOC/ChildrenForHOC"
import FormikForm from "../../components/FormicForm/FormikForm"

function MainPage() {
const [theme, setTheme] = useState<Theme>('light')

const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }
const greetings = 'Здравствуй'

const getSum = () => {
    return 6 * 10
}

const WrappedCompoonent = AuthUser(ChildrenForHOC)
    return (
        <div className={theme === 'light' ? 'main--light' : 'main--dark'}>
           <h1>Main page</h1>
        <ThemeContext.Provider value={{changeTheme, theme}}>
            <TestComponent name={'Alice'} greetings={greetings} getSum={getSum}/>
            <WrappedCompoonent name='Zhan'/> 
            <FormikForm/>
        </ThemeContext.Provider>
               
        </div>
    )
}

export default MainPage