import './App.css'
import { Route, Routes } from 'react-router-dom'
const PokemonPage = lazy(() => import('./pages/Pokemon/PokemonPage'))
const RickPage = lazy(() => import('./pages/Rick/RickPage'))
const CharacterPage = lazy(() => import('./pages/Character/CharacterPage'))
import Header from './components/Header/Header'
import { lazy } from 'react'
import ApolloPage from './pages/ApolloPage/ApolloPage'
import AuthPage from './pages/Auth/Auth'
import HomePage from './pages/HomePage/HomePage'
import BookingProcess from './pages/BookingProcess/BookingProcess'


function App() {
  const changeTheme = () => {
    console.log('Вызов функции внутри компонента');
  }
  
  return (
      <main id="center">
        <Header changeTheme={changeTheme}/>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/booking-process' element={ <BookingProcess />} />
          <Route path='/pokemon' element={ <PokemonPage/>}>
          </Route>
          <Route path='/rick' element={ <RickPage/>} />
          <Route path='/apollo' element={ <ApolloPage/>} />
          <Route path='/auth' element={ <AuthPage/>} />
          <Route path='/character/:id' element={<CharacterPage/>} />

        </Routes>
      </main>
  )
}

export default App
