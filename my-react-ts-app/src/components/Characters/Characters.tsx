import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { fetchCharacters } from "../../store/slices/charactersSlice"
import { useEffect } from "react"
import Loader from "../Loader/Loader"
import Character from "../Character/Character"
import './style.css'
import Pagination from "../Pagination/Pagination"
import useApi from "../../hooks/useApi"
import type { ICharacterResponse } from "../../types"

function Characters() {
    // const {characters, isLoading} = useAppSelector((state) => state.characters)
    // const dispatch = useAppDispatch()
    const {data: characters, getData, isLoading} = useApi<ICharacterResponse>()


    useEffect(() => {
        // if(!characters.length) {
        //     dispatch(fetchCharacters())
        // }
        getData('https://rickandmortyapi.com/api/character', { page: 1 })
    }, [])

    return (
        <div>
            <div className='characters'>
            {isLoading && <Loader />}
            {/* {characters.length && characters.map(item => <Character character={item} key={item.id} />)} */}
             {characters && characters.results.map(item => <Character character={item} key={item.id} />)}
            </div>
            <Pagination />
        </div>
    )
}

export default Characters