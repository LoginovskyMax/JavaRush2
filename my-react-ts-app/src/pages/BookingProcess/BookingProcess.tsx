import { useEffect } from "react"
import { useAppSelector } from "../../store/storeHooks"
import { useNavigate } from "react-router-dom"

function BookingProcess(){
    const navigate = useNavigate()
const {tickets} = useAppSelector(store => store.tickets)

useEffect(() => {
   console.log(tickets);

   if(!tickets) navigate('/')
}, [])

    return(
        <div>
            <p>Search Results</p>
        </div>
    )
}

export default BookingProcess