import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { fetchCharacters, setCurrentPage } from "../../store/slices/charactersSlice"

function Pagination() {
    const {currentPage, totalPages, isLoading} = useAppSelector((state) => state.characters)
    const dispatch = useAppDispatch()

    const getNextPage = () => {
        const page = currentPage + 1

        if(totalPages < page) return
       
        dispatch(setCurrentPage(page))
         dispatch(fetchCharacters(page))
    }

    const getPrevPage = () => {
        const page = currentPage - 1

        if(page < 1) return

        dispatch(setCurrentPage(page))
        dispatch(fetchCharacters(page))
    }
 
return (
    <div className="pagination">
      <button disabled={isLoading} onClick={getPrevPage}>Prev</button>
      <span>{currentPage}...</span>
      {totalPages && <span>{totalPages}</span>}
      <button disabled={isLoading} onClick={getNextPage}>Next</button>
    </div>
)
}

export default Pagination