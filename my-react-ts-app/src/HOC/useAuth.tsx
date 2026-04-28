import { useState, type FC } from "react"

const AuthUser = (Component:FC<{name:string}>):React.ComponentType<{name:string}> => {
   const [auth, setAuth] = useState(false)
  
   if(!auth) {
    return () => {
      return <div>
         <p>Авторизуйтесь</p>
         <button onClick={() => setAuth(true)}>Авторизоваться</button>
      </div>
    }
   }

   return (props) => <Component {...props} />
}

export default AuthUser