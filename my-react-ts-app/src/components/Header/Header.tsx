import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useState } from "react"


function Header({changeTheme}){
    const {logout, isAuthenticated} = useAuth()
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div data-testid='header'>
         <p>Заголовок сайта</p>
         <Link to="/">Главная</Link> | 
         <Link to="/pokemon">Покемоны</Link> | 
         <Link to="/rick">рик и Морти</Link> | 
         <Link to="/apollo">Аполло</Link> | 

         {isAuthenticated ? <button onClick={logout}>Выйти</button> : <Link to="/auth">Войти</Link>}
         <button data-testid='toggle-btn' onClick={() => setIsVisible(prev => !prev)}>{isVisible ? 'Скрыть модалку' : 'Показать модалку'}</button>
         {isVisible && <div data-testid='header-modal'>
            Модалка
         </div>}
         <button data-testid='theme-btn' onClick={changeTheme}>Поменять тему</button>
        </div>
    )
}

export default Header