import { useState, type FC } from "react"

function AuthUser<T extends object>(Component:React.ComponentType<T>):FC<T>{
   const [auth, setAuth] = useState(true)
  
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