import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../store/storeHooks"
import { useEffect, useState } from "react"
import { type ICharacter } from "../../types"

interface PageParams {
    id: string
}

function CharacterPage() {
    const { id } = useParams<Readonly<PageParams>>()
    const {characters} = useAppSelector((state) => state.characters)
    const [character, setCharacter] = useState<ICharacter | null>(null)
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location);

    useEffect(() => {
      const current = characters.find(item => item.id === Number(id))
      if(!current){
         navigate('/rick')
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCharacter(current)
      }
    }, [])

    return (
        <div >
          <h1>Character page N {id}</h1>
          {character && <div>
                   <img src={character.image} />
                   <p>ID: {character.id}</p>
                   <p>Name: {character.name}</p>
            </div>}
        </div>
    )
}

export default CharacterPage