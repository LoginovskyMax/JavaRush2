
import { useGetPokemonQuery, useEditPokemonMutation } from "../../store/slices/pokemonSlice"
import Loader from "../Loader/Loader"

const Pokemon = () => {
    // pikachu
    const {data: pokemonData, isLoading, isError, refetch} = useGetPokemonQuery('pikachu')
    const [editPokemon] = useEditPokemonMutation()

    const edit = () => {
        editPokemon({
            id: 2,
            name: 'Pikachu',
        })
    }

    return (
        <div>
            {isError && <p>Ошибка загррузки данных</p>}
            {isLoading && <Loader/>}
            {pokemonData && <div>
                <p>{pokemonData?.name}</p>
                <img src={pokemonData?.sprites.back_default} width={200} />
                <img src={pokemonData?.sprites.front_default} width={200} />
            </div>}
            <button onClick={refetch}>refetch</button>
            <button onClick={edit}>edit</button>
        </div>
    )
}

export default Pokemon