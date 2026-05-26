import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { ThemeContext, type Theme } from "../../contexts/Context"
import TestComponent from "../../components/test/TestCopmonent"
import AuthUser from "../../HOC/useAuth"
import ChildrenForHOC from "../../components/ChildrenForHOC/ChildrenForHOC"
import Loader from "../../components/Loader/Loader"
const LazyFormikComp = lazy(() => import('../../components/FormicForm/FormikForm'));

function MainPage() {
const [theme, setTheme] = useState<Theme>('light')
const [isShowFormik, setisShowFormik] = useState(false)
const elementRef = useRef<HTMLDivElement | null>(null)

const changeTheme = () => {
    setTheme( currentTheme => currentTheme === 'light' ? 'dark' : 'light' )
  }
const greetings = 'Здравствуй'

const getSum = () => {
    return 6 * 10
}

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => {
               setisShowFormik(true);
            }, 2000)
            
            if(elementRef.current){
              observer.unobserve(elementRef.current);
            }
          }
        }
      },
      {
        root: null,
        threshold: 0.01
      }
    );

    if(elementRef.current){
        observer.observe(elementRef.current);
    }

    return () => {
      if(elementRef.current){
            observer.unobserve(elementRef.current);
     }
    };
  }, []);

const WrappedCompoonent = AuthUser(ChildrenForHOC)
    return (
        <div className={theme === 'light' ? 'main--light' : 'main--dark'}>
           <h1>Main page</h1>
        <ThemeContext.Provider value={{changeTheme, theme}}>
            <TestComponent name={'Alice'} greetings={greetings} getSum={getSum}/>
            <WrappedCompoonent name='Zhan'/> 

            <button onClick={() => setisShowFormik(true)}>Show form</button>
            <div className="ref-elem" ref={elementRef}></div>
            {isShowFormik && <Suspense fallback={<Loader/>}>
                   <LazyFormikComp/>
                </Suspense>}
        </ThemeContext.Provider>
               
        </div>
    )
}

export default MainPage