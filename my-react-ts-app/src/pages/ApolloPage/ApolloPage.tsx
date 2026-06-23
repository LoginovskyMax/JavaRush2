import { useMutation, useQuery } from "@apollo/client/react"
import { gql } from "@apollo/client"
// import Loader from "../../components/Loader/Loader"
// import Character from "../../components/Character/Character"
import type { IGQLCharacterResponse } from "../../types"
import { useState } from "react"

const GET_CHARACTERS = gql`
query getCharacters ($name: String!) {
  characters(page: 1, filter: { name: $name }) {
    info {
      count
    }
    results {
      name
      image
      id
    }
  }
}
`

const ADD_CHARACTER = gql`
mutation AddCharacter ($name: String!) {
  addCharacter(input: {name: $name}){
  character {
      name
      id
  }
  success # Например, булево поле успеха
  errors # Список ошибок, если они есть
  }
}
`

function ApolloPage() {
    const [characterName, setName] = useState('Rick')
    const {loading, data} = useQuery<IGQLCharacterResponse, { name: string }>(GET_CHARACTERS, {
        variables: {name: characterName}
    })

    const [addCharacter, {error}] = useMutation(ADD_CHARACTER, {
        refetchQueries: [GET_CHARACTERS]
    })

    const createCharacter = () => {
        addCharacter({
            variables: { name: 'Alice'}
        })
    }
    
    return (
        <div >
          <h1>Apollo page</h1>
          <select onChange={(e) => setName(e.target.value)}>
            <option value='Rick'>Rick</option>
            <option value='Morty'>Morty</option>
          </select>
          <button onClick={createCharacter}>Create</button>
          {error && <p>Error:  {error ? error?.message : 'error' } </p>}
          <div className='characters'>
            {/* {loading && <Loader />}
                
            {data && data.characters.results.map(item => <Character character={item} key={item.id} />)} */}
          </div>
        </div>
    )
}

export default ApolloPage