import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/storeHooks"
import { addToTickets } from "../../store/slices/ticketsSlice"
import { useNavigate } from "react-router-dom"

function ReviewPage(){
  const navigate = useNavigate()
  const {tickets, price} = useAppSelector(store => store.tickets)
  const [code, setCode] = useState('')
  const dispatch = useAppDispatch()

  function goToReview(){
    navigate('/review-page')
  }

  function applyCode(){
    dispatch(addToTickets({
      key: 'promoCode',
      value: code
    }))
  }

  function addBaggage(){
    dispatch(addToTickets({
      key: 'extraBaggage',
      value: true
    }))
  }

useEffect(() => {
  console.log('price', price);
   if(!tickets) navigate('/')
}, [])

    return(
        <div>
            <p>Review page</p>

            <input 
               type='text' 
               placeholder="Enter Code" 
               value={code}
               onChange={(e) => setCode(e.target.value)}
               />
            {code && <button onClick={applyCode}>Apply code</button>}
            <div>
              <p>Extra Baggage</p>
               <button onClick={addBaggage}>Add to ticket</button>
            </div>
        
            <div>
              <p>Bill details</p>
              <p>Base Ticket Fare: {price.tikets}</p>
              <p>Food: {price.food}</p>
              <p>Extra Baggage: {price.baggage}</p>
              <p>Discount: {price.discount}</p>
              <p>Total Charge: {price.total}</p>
            </div>

            <button onClick={goToReview} disabled={!tickets?.train}>Book now</button>
        </div>
    )
}

export default ReviewPage