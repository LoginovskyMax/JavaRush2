import { useEffect } from "react"
import { useAppSelector } from "../../store/storeHooks"
import { useNavigate } from "react-router-dom"
import { Trains } from "../../constants"
import Train from "../../components/Trains/Train"

function ReviewPage(){
  const navigate = useNavigate()
  const {tickets} = useAppSelector(store => store.tickets)

  function goToReview(){
    navigate('/review-page')
  }

useEffect(() => {
   if(!tickets) navigate('/')
}, [])

    return(
        <div>
            <p>Review page</p>

            <button onClick={goToReview} disabled={!tickets?.train}>Tickets Please!</button>
        </div>
    )
}

export default ReviewPage