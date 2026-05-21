import { useNavigate } from "react-router-dom"
import './style.css'

type PropsType = {
  character: {
    name: string,
    id: number,
    image: string
  }
}

function Character({character}:PropsType) {
  const navigate = useNavigate()

  const goToCharacterPage = () => {
     navigate(`/character/${character.id}`, {
      state: {
        someData: 'very important data'
      }
     })
  }
 
return (
    <div className="character" onClick={goToCharacterPage}>
        <img src={character.image} />
        <p>ID: {character.id}</p>
        <p>Name: {character.name}</p>
    </div>
)
}

export default Character