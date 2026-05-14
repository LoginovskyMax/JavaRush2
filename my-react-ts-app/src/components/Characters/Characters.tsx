import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { fetchCharacters } from "../../store/slices/charactersSlice"
import { useEffect } from "react"
import Loader from "../Loader/Loader"
import Character from "../Character/Character"
import './style.css'
import Pagination from "../Pagination/Pagination"

function Characters() {
    const {characters, isLoading} = useAppSelector((state) => state.characters)
    const dispatch = useAppDispatch()


    useEffect(() => {
        if(!characters.length) {
            dispatch(fetchCharacters())
        }
    }, [])

    return (
        <div>
            <div className='characters'>
            {isLoading && <Loader />}
            {characters.length && characters.map(item => <Character character={item} key={item.id} />)}
            </div>
            <Pagination />
        </div>
    )
}

export default Characters