import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/Main/Main'
import PokemonPage from './pages/Pokemon/PokemonPage'
import Header from './components/Header/Header'
import RickPage from './pages/Rick/RickPage'
import CharacterPage from './pages/Character/CharacterPage'
import FormikForm from './components/FormicForm/FormikForm'
import LogIn from './components/LogIn/LogIn'


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
          <Route path='/character/:id' element={<CharacterPage/>} />

        </Routes>
      </main>
  )
}

export default App
