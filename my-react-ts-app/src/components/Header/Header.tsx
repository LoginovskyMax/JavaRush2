import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

function Header(){
     const {logout, isAuthenticated} = useAuth()
    return (
        <div>
         <Link to="/">Главная</Link> | 
         <Link to="/pokemon">Покемоны</Link> | 
         <Link to="/rick">рик и Морти</Link> | 
         <Link to="/apollo">Аполло</Link> | 

         {isAuthenticated ? <button onClick={logout}>Выйти</button> : <Link to="/auth">Войти</Link>}
        </div>
    )
}

export default Header