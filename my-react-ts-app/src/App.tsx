import './App.css'
import { Route, Routes } from 'react-router-dom'
const MainPage = lazy(() => import('./pages/Main/Main'))
const PokemonPage = lazy(() => import('./pages/Pokemon/PokemonPage'))
const RickPage = lazy(() => import('./pages/Rick/RickPage'))
const CharacterPage = lazy(() => import('./pages/Character/CharacterPage'))
import Header from './components/Header/Header'
import FormikForm from './components/FormicForm/FormikForm'
import LogIn from './components/LogIn/LogIn'
import { lazy } from 'react'
import ApolloPage from './pages/ApolloPage/ApolloPage'
import AuthPage from './pages/Auth/Auth'


function App() {
  return (
      <main id="center">
        <Header />
        <Routes>
          <Route path='/' element={ <MainPage />} />
          <Route path='/pokemon' element={ <PokemonPage/>}>
            <Route path='form' element={<FormikForm/>} />
            <Route path='login' element={<LogIn/>} />
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
