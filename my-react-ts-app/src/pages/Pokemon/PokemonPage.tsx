import { Outlet, useLocation } from "react-router-dom"
import Pokemon from "../../components/Pokemon/Pokemon"

function PokemonPage() {
    const location = useLocation()

    console.log(location);

    return (
        <div >
          <h1>Pokemon page</h1>
          <Pokemon />
          <Outlet />
        </div>
    )
}

export default PokemonPage