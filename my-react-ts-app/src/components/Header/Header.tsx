import { Link } from "react-router-dom"

function Header(){
    return (
        <div>
         <Link to="/">Главная</Link> | 
         <Link to="/pokemon">Покемоны</Link> | 
         <Link to="/rick">рик и Морти</Link> | 
        </div>
    )
}

export default Header